# Linkodcode Backend
Express server that powers the Linkodcode project. Provides authentication, protected posts API, and serves static images.

## Tech
- Node.js, Express
- JWT auth (`jsonwebtoken`)
- bcrypt for password hashing
- CORS, cookie-parser

## Setup
```bash
cd backend
npm install
```
Create `.env`:
```bash
JWT_SECRET=<your_secret_string>
PORT=3000              # optional; defaults to 3000
```
Run the server (with file watch):
```bash
npm start
```
Base URL: `http://localhost:3000/api`

Static images are served from `http://localhost:3000/api/images/<file>` (files live in `public/images`).

## Data Storage
- Posts: `data/posts.json`
- Users: `data/users.json`
Data is stored in JSON files (no external database). New posts are assigned `id`, `time`, and a random `imageUrl` (`/images/img1.jpg` … `img20.jpg`).

## API Documentation
All routes are prefixed with `/api`.

### Auth (public)
- `POST /api/login`
  - Body: `{ "username": string, "password": string }`
  - Returns JWT in `Authorization` response header and sets `token` httpOnly cookie.
- `POST /api/register`
  - Body: `{ "username": string, "password": string }`
  - Creates user, returns JWT in `Authorization` header, sets `token` cookie.

### Posts (requires JWT via `Authorization` header or `token` cookie)
- `GET /api/posts`
  - Returns `{ posts: Post[] }`
- `GET /api/posts/:id`
  - Returns a single `Post`
- `POST /api/posts`
  - Body: `{ "description": string, "author": string }`
  - Server adds `id`, `time`, `imageUrl`; responds with `{ message: "Post added successfully" }`

### Images (public)
- `GET /api/images/<image-file-name>`

## Middleware
- `authenticateToken` – reads JWT from `Authorization` header or `token` cookie; rejects missing/invalid tokens.
- `validatePost` – ensures `description` and `author` are present on POST `/api/posts`.

## Scripts
- `npm start` – run the server with `node --watch --env-file=.env app.js`

## Notes & Limits
- File-based storage; concurrent writes are not synchronized.
- No HTTPS or production hardening; intended for local/demo use.