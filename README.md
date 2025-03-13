# URL Shortener


## API Routes

### POST /shorten
Create a short URL from a long URL
- Body: `{ "destinationUrl": "string" }`

### PUT /update
Update the destination URL for an existing short URL
- Body: `{ "shortUrl": "string", "destinationUrl": "string" }`

### GET /:urlCode
Redirect to the original long URL
- Path parameter: urlCode

### POST /update-expiry
Update expiry date of a short URL
- Body: `{ "shortUrl": "string", "daysToAdd": number }`
