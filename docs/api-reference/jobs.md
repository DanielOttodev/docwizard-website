# Jobs (batch generation)

A **Job** generates many documents at once from a template — one document per row of data,
bundled into a single downloadable ZIP. Rows can come from a `.csv`/`.xlsx` file upload, or be
sent inline as JSON. Generation runs in the background, so you queue a job and poll for its
status rather than waiting on one long request.

## The flow

1. Queue a job — `POST /api/documents/batch` (file upload) or `POST /api/documents/batch/json` (inline rows).
2. Poll `GET /api/documents/batch/{jobId}` until `status` is a terminal value.
3. Download the ZIP from the `zipUrl` in the response.

## Queue a job — file upload

```
POST /api/documents/batch
Content-Type: multipart/form-data
```

| Form field | Required | Meaning |
|---|---|---|
| `TemplateId` | yes | The template to generate from. |
| `File` | yes | A `.csv` or `.xlsx` file, one row per document. |
| `DocumentNamePrefix` | no | Defaults to `"document"`. Used to name rows that don't set their own name (see below). |
| `ExportFormat` | no | `"Pdf"` (default) or `"Docx"`. |

**Column headers must exactly match the template's `{{FieldName}}` merge fields**, case
included — same rule as [single document generation](/docs/api-reference/documents#generate-a-document). Each
row becomes one document; extra columns that don't match a field are ignored.

An optional `DocumentName` column names each output document individually. Rows without it
(or with it blank) are named `{DocumentNamePrefix}_{rowNumber}` — e.g. `document_1`,
`document_2`.

## Queue a job — inline JSON

```
POST /api/documents/batch/json
Content-Type: application/json
```

```json
{
  "templateId": "019fb7e5-ab16-75ee-8cd5-f9050889956a",
  "rows": [
    { "CustomerName": "Acme Corp", "AmountDue": "$1,250.00" },
    { "CustomerName": "Globex Inc", "AmountDue": "$430.00", "DocumentName": "Globex Invoice" }
  ],
  "documentNamePrefix": "invoice",
  "exportFormat": "Pdf"
}
```

Functionally identical to the file-upload endpoint — same field-matching rules, same
`DocumentName` override — just for callers that already have structured data and don't want to
round-trip it through a CSV first.

## Job queued response

Both endpoints return `202 Accepted` immediately, before generation starts:

```json
{
  "id": "b3c4d5e6-...",
  "status": "Queued",
  "totalRows": 250,
  "processedRows": 0,
  "missingFieldWarningCount": 1,
  "createdAt": "2026-08-01T10:00:00Z"
}
```

`missingFieldWarningCount` (JSON endpoint only) tells you upfront how many of the template's
fields were never supplied by **any** row in the batch — a useful early warning, but note it's
computed once at submission and is about fields missing from the whole batch, not a per-row
check. A field present in most rows but missing from just one row won't be flagged here.

## Poll job status

```
GET /api/documents/batch/{jobId}
```

```json
{
  "id": "b3c4d5e6-...",
  "status": "Completed",
  "totalRows": 250,
  "processedRows": 250,
  "missingFieldWarningCount": 1,
  "zipUrl": "https://...presigned-s3-url...",
  "zipFileName": "batch_20260801100512_a1b2c3d4.zip",
  "documentCount": 250,
  "errorMessage": null,
  "createdAt": "2026-08-01T10:00:00Z",
  "completedAt": "2026-08-01T10:01:42Z"
}
```

### Status values

| Status | Meaning |
|---|---|
| `Queued` | Accepted, not yet started. Poll again shortly. |
| `Processing` | Generating documents now. `processedRows` updates as it goes — safe to poll every couple of seconds. |
| `Completed` | All rows generated. `zipUrl` is ready. |
| `PartiallyCompleted` | Your plan's monthly document limit was hit partway through. `zipUrl` contains whatever was generated before the limit; `documentCount` tells you how many. `errorMessage` explains what happened. |
| `Failed` | Something went wrong and no documents were generated (or a limit was hit before *any* row could be generated). `errorMessage` has details. |

`zipUrl` is only populated for `Completed`/`PartiallyCompleted`, and is a presigned link valid
for **60 minutes** — poll this endpoint again for a fresh one if it expires before you download.

There's no cap on how long a job can stay `Queued`/`Processing` from the API's side, but in
practice jobs process quickly; if a job seems stuck, it likely failed at the infrastructure
level rather than being naturally slow — treat a job that hasn't moved in several minutes as
worth investigating rather than continuing to poll indefinitely.
