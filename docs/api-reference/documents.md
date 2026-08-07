# Documents

A **Document** is the output of merging field values into a Template — a generated PDF or
Word file. This page covers generating a single document. For generating many documents at
once from a spreadsheet or a list of rows, see [Jobs](/docs/api-reference/jobs) instead.

## The Document object

```json
{
  "id": "0a1b2c3d-...",
  "organisationId": "org_2abc...",
  "templateId": "019fb7e5-ab16-75ee-8cd5-f9050889956a",
  "documentName": "Invoice #1042",
  "templateVersionId": 2,
  "createdByUserId": "user_2xyz...",
  "s3FilePath": "org_2abc.../generated/....pdf",
  "createdAt": "2026-08-01T10:00:00Z",
  "updatedAt": "2026-08-01T10:00:00Z"
}
```

| Field | Type | Meaning |
|---|---|---|
| `id` | GUID | The document's ID. |
| `templateId` | GUID | Which template it was generated from. |
| `documentName` | string \| null | The name you gave it at generation time. |
| `templateVersionId` | number | The template **version** that was active when this document was generated — a template can be re-versioned later without affecting documents already generated. |
| `createdByUserId` | string | Clerk user ID of whoever generated it, or your API key's identity for API-key calls. |
| `s3FilePath` | string | Internal storage path — not directly downloadable, use the download endpoint below. |

## Generate a document

```
POST /api/documents
Content-Type: application/json
```

```json
{
  "templateId": "019fb7e5-ab16-75ee-8cd5-f9050889956a",
  "documentName": "Invoice #1042",
  "dataJson": {
    "CustomerName": "Acme Corp",
    "AmountDue": "$1,250.00"
  }
}
```

| Field | Required | Meaning |
|---|---|---|
| `templateId` | yes | The template to generate from. |
| `documentName` | no | Defaults to `"document"` if omitted. |
| `dataJson` | yes | A flat object of `{ "FieldName": "value" }` pairs — one entry per merge field in the template. Both keys and values are strings. |

Every key in `dataJson` must **exactly** match a `{{FieldName}}` in the template, case
included — see [Merge syntax](/docs/api-reference/templates#merge-syntax) on the Templates page. Extra keys
that don't match any field in the template are silently ignored; fields in the template with no
matching key are left as literal `{{FieldName}}` text in the output — there's no error for a
missing field on this endpoint (batch jobs, covered in [Jobs](/docs/api-reference/jobs), do surface a warning
count for this).

Documents are currently always generated as **PDF** via this endpoint. (Batch jobs support
choosing PDF or `.docx` output — see [Jobs](/docs/api-reference/jobs).)

Response is the created [Document object](#the-document-object) described above.

## Get, list, rename, delete

```
GET    /api/documents            # all documents in your org
GET    /api/documents/{id}       # one document
PUT    /api/documents/{id}       # rename ({ "documentName": "..." })
DELETE /api/documents/{id}
```

## Download a document

```
GET /api/documents/GetUrl/{id}
```

```json
{ "url": "https://...presigned-s3-url...", "name": "Invoice #1042" }
```

`url` is a presigned download link valid for **60 minutes**. Documents don't currently expose a
way to re-fetch just the download link with a different expiry — request this endpoint again
for a fresh one.
