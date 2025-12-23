# Linkodcode
Full‑stack demo that lets users read a feed of image‑backed posts and submit new ones. It is split into an Express backend (API + static images) and a React + Vite frontend.

## What’s Inside
- Authenticated posts experience (register/login with JWT).
- Posts API backed by JSON files (no external DB).
- React SPA for login, feed, single post view, submit post, and about.
- Bundled image set; new posts get a random image automatically.

## Repository Layout
- `backend/` – Express server, auth + posts routes, JSON storage, static assets.
- `frontend/` – React (TypeScript) SPA, routing, and API clients.

## Quick Start
1) Clone and enter the repo:
   ```bash
   git clone https://github.com/shemaryahuz/Linkodcode
   cd Linkodcode
   ```
2) Start the backend (requires `backend/.env` with `JWT_SECRET`):
   ```bash
   cd backend
   npm install
   npm start
   ```
3) Start the frontend (expects backend at `http://localhost:3000`):
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

## Environments
- Backend: `JWT_SECRET` (required), `PORT` optional (defaults to 3000).
- Frontend: no custom env required for local dev; uses the backend URL above.

## Useful Scripts
- Backend: `npm start`
- Frontend: `npm run dev`, `npm run build`, `npm run preview`, `npm run lint`

## More Detail
- Backend API docs and setup: `backend/README.md`
- Frontend pages and workflow: `frontend/README.md`
