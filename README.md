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

## Middleware

The API uses the following middleware:

### validateUrl

This middleware is used in the `POST /shorten`, `PUT /update`, and `POST /update-expiry` routes to validate the `destinationUrl` parameter. It checks if the provided URL is valid using a regular expression. If the URL is invalid, the middleware returns a `400 Bad Request` response with an error message.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL` - The URL of your MongoDB database

`BASE_URL` - The base URL of your API

`NODE_ENV` - The environment in which your API will run (`development` or `production`)

`PORT` - The port on which your API will run

## Deployment

To deploy this project

### Build Command

    ```bash
    yarn --ignore-engines

    # or

    npm install --ignore-engines
    ```

### Start Command

    ```bash
    node app/index.js
    ```
![image](https://github.com/sauravhathi/url-shortner/assets/61316762/02787ede-a4f2-47d8-8f07-1d919ffbac34)

## Run Locally

1. Clone the project

```bash
git clone https://github.com/sauravhathi/url-shortner.git
```

2. Go to the project directory

```bash
cd url-shortener
```

3. Install dependencies

```bash
npm install

# or

yarn install
```

4. Start the server

```bash
npm run start

# or

yarn start
```

## Postman API Tests

You can use Postman to test the API endpoints. Below are the examples of API requests that you can test using Postman.

### Create a short URL

**Request**

```http
POST /shorten
Content-Type: application/json

{
    "destinationUrl": "https://www.example.com/xyz/abc"
}
```

**Response**

```json
{
  "shortUrl": "http://localhost:3000/abc1234"
}
```

### Update the long URL associated with a short URL

**Request**

```http
PUT /update
Content-Type: application/json

{
    "shortUrl": "http://localhost:3000/abc1234",
    "destinationUrl": "https://www.example.com/xyz/abc/123"
}
```

**Response**

```json
{
  "success": true
}
```

### Redirect to the long URL associated with a short URL

**Request**

```http
GET /abc1234
```

**Response**

Redirects to the long URL associated with the short URL

### Update the expiry date of a short URL

**Request**

```http
POST /update-expiry
Content-Type: application/json

{
    "shortUrl": "http://localhost:3000/abc1234",
    "daysToAdd": 7
}
```

**Response**

```json
{
  "success": true
}
```

## Tech Stack

- Server: Node, Express, MongoDB

## Authors

- [Saurav Hathi](https://www.github.com/sauravhathi)
"# node-mongodb-urlshorter" 
