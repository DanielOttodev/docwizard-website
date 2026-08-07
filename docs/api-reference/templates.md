# Templates

A **Template** is a `.docx` file with merge fields in it — the file you upload becomes the
source that Documents get generated from. Uploading a template is a two-step process: **scan**
it first (DocWizard reads the file and detects its merge fields), then **promote** it (turns
the scan into a real, usable Template).

## The Template object

```json
{
  "id": "019fb7e5-ab16-75ee-8cd5-f9050889956a",
  "organisationId": "org_2abc...",
  "name": "Invoice",
  "description": "Standard client invoice",
  "currentVersionId": 1,
  "s3FilePath": "org_2abc.../templates/019fb7e5.../versions/1/Invoice.docx",
  "tags": "billing,client",
  "createdAt": "2026-07-31T09:42:00Z"
}
```

| Field | Type | Meaning |
|---|---|---|
| `id` | GUID | The template's ID — use this everywhere else in the API. |
| `organisationId` | string | Your organisation's ID. Every template is scoped to one org; you'll never see another org's templates. |
| `name` | string | Display name, editable. |
| `description` | string | Free-text description, editable. |
| `currentVersionId` | number | The version number currently in use for new documents (see [Versions](#versions) below). |
| `s3FilePath` | string | Internal storage path. Not directly downloadable — use the version download endpoint instead. |
| `tags` | string \| null | Comma-separated tags you set, for your own organisation. |
| `createdAt` | datetime | When the template was first created. |

## Merge syntax

Inside the `.docx` itself, a merge field looks like `{{FieldName}}` — plain double curly
braces, no spaces inside them, written directly into the Word document text. For example, a
line in your template like:

```
Dear {{CustomerName}}, your invoice total is {{AmountDue}}.
```

has two merge fields: `CustomerName` and `AmountDue`. When you generate a document, DocWizard
replaces each `{{FieldName}}` with the value you supply for that field name.

**Field names are case-sensitive.** The value you supply for `{{CustomerName}}` must be keyed
exactly `CustomerName`, not `customername` — a mismatched case won't error, it will just leave
the literal `{{CustomerName}}` text in the generated document untouched.

## Upload flow

### 1. Scan a file

```
POST /api/templates/scan
Content-Type: multipart/form-data
```

| Form field | Type | Required | Meaning |
|---|---|---|---|
| `File` | file | yes | The `.docx`/`.dotx` file to scan. |
| `FileName` | string | yes | Name to store it under. |
| `Description` | string | yes | Description for the template. |
| `Tags` | string | no | Comma-separated tags. |

Scanning reads the file, detects every `{{FieldName}}` in it, and stores it as a **temporary
template** (not yet a real, usable Template — that happens at promote). Response:

```json
{
  "success": true,
  "message": "Template scanned successfully.",
  "data": "{\"templateId\":\"e4f1...\",\"fields\":\"[\\\"CustomerName\\\",\\\"AmountDue\\\"]\"}"
}
```

`data` is a **JSON string**, not a nested object — parse it, and note that its own `fields`
property is itself a JSON-encoded string too (double-encoded). Once parsed, you get:

```json
{ "templateId": "e4f1...", "fields": ["CustomerName", "AmountDue"] }
```

`templateId` here is the **temp template's** ID — you'll need it for the promote call below.

### 2. Promote it

```
POST /api/templates/promote/{tempTemplateId}
```

Turns the scanned temp template into a real Template, returning the full Template object (see
above). This is the ID you'll use everywhere else — for generating documents, adding versions,
etc.

## Get, list, update, delete

```
GET    /api/templates              # all templates in your org
GET    /api/templates/{id}         # one template
PUT    /api/templates/{id}         # update name / description / tags
DELETE /api/templates/{id}
```

`PUT` accepts a partial body — only send the fields you want to change:

```json
{ "name": "Client Invoice v2" }
```

`s3FilePath`, `currentVersionId`, and `organisationId` can't be changed via `PUT` — they're
managed internally by the upload/versioning flow.

## Fields

```
GET /api/templates/{id}/fields
```

Returns the current merge fields for a template:

```json
[
  { "id": "...", "fieldName": "CustomerName", "fieldType": "string", "displayName": "CustomerName", "isRequired": true }
]
```

`fieldType` and `isRequired` are currently informational only — every field is detected as a
plain string and treated as required by the merge engine (there's no type coercion or
optional-field skipping today). Use `fieldName` as the key when generating documents.

## Versions

Every time you re-upload a template's file (rather than creating a brand-new template), it
becomes a new **version** — the old file stays downloadable, and `currentVersionId` on the
Template moves forward. This is how you can safely update a template's wording without
breaking documents already generated from the previous version.

### Add a new version

```
POST /api/templates/{templateId}/versions/{tempTemplateId}
```

Same two-step flow as a brand-new template — `scan` the new file first, then call this with
the resulting temp template ID against an **existing** template's ID. Response:

```json
{
  "template": { "...": "the updated Template object" },
  "versionNumber": "2",
  "addedFields": ["DueDate"],
  "removedFields": ["OldReference"]
}
```

`addedFields`/`removedFields` diff the new version's merge fields against the previous
version's, so you can tell at a glance whether anything your integration depends on changed.

### List version history

```
GET /api/templates/{id}/versions
```

```json
[
  { "id": 2, "versionNumber": "2", "createdAt": "...", "fileName": "Invoice.docx", "createdByUserId": 14 },
  { "id": 1, "versionNumber": "1", "createdAt": "...", "fileName": "Invoice.docx", "createdByUserId": null }
]
```

`createdByUserId` is `null` for versions created via API key (there's no dashboard user to
attribute it to) or for versions that predate this feature.

### Download a specific version

```
GET /api/templates/{id}/versions/{versionId}/download
```

```json
{ "url": "https://...presigned-s3-url...", "name": "Invoice.docx" }
```

`url` is a presigned download link valid for **60 minutes** — fetch it promptly, and re-request
this endpoint for a fresh link if it expires. `versionId` here is the numeric `id` from the
version-history response above, not the version *number*.
