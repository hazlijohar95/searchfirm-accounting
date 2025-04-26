
# SearchFirm Public API

This document describes the public API endpoints available in the SearchFirm directory.

## Base URL
```
https://searchfirm.lovable.dev/api
```

## Endpoints

### GET /firms
Returns a list of all accounting firms.

**Response**
```json
[
  {
    "id": "string",
    "firmNumber": "string",
    "name": "string",
    "address": "string",
    "state": "string",
    "country": "string",
    "phoneNumber": "string",
    "email": "string",
    "website": "string | null",
    "latitude": "number",
    "longitude": "number",
    "services": "string[]"
  }
]
```

### GET /firms/:id
Returns a single firm by ID.

**Parameters**
- `id` (string, required) - The firm's unique identifier

**Response**
```json
{
  "id": "string",
  "firmNumber": "string",
  "name": "string",
  "address": "string",
  "state": "string",
  "country": "string",
  "phoneNumber": "string",
  "email": "string",
  "website": "string | null",
  "latitude": "number",
  "longitude": "number",
  "services": "string[]"
}
```

**Error Response (404)**
```json
{
  "error": "Firm not found"
}
```

### GET /states
Returns a list of all states where firms are located.

**Response**
```json
[
  {
    "value": "string",
    "label": "string"
  }
]
```

## Error Handling
The API uses standard HTTP status codes:
- 200: Success
- 404: Resource not found
- 500: Server error

## Rate Limiting
This API is free to use without authentication, but please be mindful of rate limiting:
- Maximum of 60 requests per minute
- Maximum of 1000 requests per day

## Example Usage
```javascript
// Fetch all firms
const firms = await fetch('https://searchfirm.lovable.dev/api/firms')
  .then(res => res.json());

// Fetch a single firm
const firm = await fetch('https://searchfirm.lovable.dev/api/firms/1')
  .then(res => res.json());

// Fetch all states
const states = await fetch('https://searchfirm.lovable.dev/api/states')
  .then(res => res.json());
```

## Contributing
We welcome contributions! Please check our [CONTRIBUTING.md](../CONTRIBUTING.md) for guidelines.
