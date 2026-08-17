# DocWizard API Reference

The DocWizard API lets you create documents from templates programmatically — the same
engine that powers the DocWizard dashboard, exposed for your own integrations.

This reference covers the three resources you'll actually use as an API consumer:

- **[Templates](/docs/api-reference/templates)** — upload and manage the `.docx` templates documents are generated from.
- **[Documents](/docs/api-reference/documents)** — generate a single document from a template and a set of field values.
- **[Jobs](/docs/api-reference/jobs)** — generate many documents at once from a CSV, XLSX, or JSON array of rows, and poll for completion.

> This document covers the main concepts and components that make up DocWizard.
> There currently is no API support for managing user / account details.

## Base URL

```
https://api.docwizard.co
```

All endpoints below are relative to this base URL.

## Authentication

Every request (except sign-up) needs an API key. API keys are created from **Settings → API Keys**
in the DocWizard dashboard — the full key is only ever shown once, at creation time, so store it
somewhere safe.

API key access is a **Pro plan and above** feature. Free plan accounts can use the dashboard, but
`ApiCallsPerMonth` is `0` and API keys can't be created until you upgrade.

Pass your key in the `Authorization` header as a bearer token:

```
Authorization: Bearer sk_live_your_key_here
```

or, equivalently, as a dedicated header:

```
X-API-Key: sk_live_your_key_here
```

Requests with no key and no valid dashboard session are rejected with `401 Unauthorized`.

## Rate limits

Every response includes rate-limit headers so you can back off proactively rather than
waiting to be throttled:

| Header | Meaning |
|---|---|
| `X-RateLimit-Limit` | Requests allowed per minute on your current plan. |
| `X-RateLimit-Remaining` | Requests remaining in the current window. |
| `X-RateLimit-Reset` | Unix timestamp (seconds) when the window resets. |

Limits scale with plan:

| Plan | Requests / minute |
|---|---|
| Free | 10 |
| Pro | 60 |
| Business | 300 |
| Enterprise | 1,000 |

If you exceed the limit, you'll get a `429 Too Many Requests` with a `Retry-After` header
(seconds to wait before retrying).

## Errors

Most error responses share this shape:

```json
{
  "error": "Usage Limit Exceeded",
  "message": "Monthly document generation limit exceeded. You have used 500 of 500 allowed for your Pro plan.",
  "code": "USAGE_LIMIT_EXCEEDED",
  "correlationId": "0HN...",
  "details": {
    "currentPlan": "Pro",
    "currentUsage": 500,
    "limit": 500,
    "upgradeUrl": "/billing/upgrade"
  }
}
```

| Field | Meaning |
|---|---|
| `error` | Short, human-readable category. |
| `message` | Full description of what went wrong. |
| `code` | Stable machine-readable error code — safe to branch on in your integration. |
| `correlationId` | Include this if you contact support about a specific failed request. |
| `details` | Extra context, varies by error type (only present on some errors). |

Common `code` values:

| Code | HTTP status | Meaning |
|---|---|---|
| `UNAUTHORIZED` | 401 | Missing or invalid API key. |
| `USAGE_LIMIT_EXCEEDED` | 429 | You've hit your plan's monthly document/preview/API call limit. |
| `RATE_LIMIT_EXCEEDED` | 429 | Too many requests per minute — see `details.retryAfterSeconds`. |
| `SUBSCRIPTION_REQUIRED` | 402 | Your subscription is inactive/past due. |
| `BAD_REQUEST` | 400 | Invalid request (bad IDs, missing required fields, etc.). |
| `INTERNAL_ERROR` | 500 | Something went wrong on our end — safe to retry, include the `correlationId` if it persists. |

**One inconsistency worth knowing about:** a handful of endpoints (currently the template
upload/promote endpoints) catch their own errors internally and return a plain string message
in the response body instead of the structured shape above. If you're writing generic error
handling, don't assume every non-2xx response is JSON in this exact shape — check the
`Content-Type` or wrap your JSON parsing defensively.

## A note on IDs

Templates, Documents, and Jobs are identified by GUIDs (e.g.
`019fb7e5-ab16-75ee-8cd5-f9050889956a`). Treat them as opaque strings — don't parse or rely on
their format.
