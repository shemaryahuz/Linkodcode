# Linkodcode Frontend
React + Vite (TypeScript) single‑page app for the Linkodcode project. Handles authentication, post browsing, single‑post view, and post submission against the backend API.

## Tech
- React 19, React Router 7
- TypeScript
- Vite dev/build toolchain
- js-cookie for auth cookies

## Getting Started
```bash
cd frontend
npm install
npm run dev       # defaults to http://localhost:5173
```
The app expects the backend to run at `http://localhost:3000` (API base `/api`). No extra frontend env vars are required for local development.

## Scripts
- `npm run dev` – Vite dev server.
- `npm run build` – TypeScript build + production bundle.
- `npm run preview` – preview the production build.
- `npm run lint` – ESLint.

## App Flow & Routes
- `/` – Login/register page (token stored in `localStorage` and httpOnly cookie from backend).
- `/home` – Posts feed.
- `/home/:id` – Single post details.
- `/add-post` – Submit a new post.
- `/about` – About page.

## Key Components & Pages (under `src/`)
- `pages/` – `HomePage`, `SinglePostPage`, `SubmitPostPage`, `LoginPage`, `AboutPage`.
- `components/layout/` – `Layout`, `Header`, `Footer`, `Nav`, `Logo`, `Slogan`.
- `components/post/` – `PostsFeed`, `PostCard`, `PostDetails`.
- `components/submit-post/` – `SubmitPost`.
- `components/auth/` – `LoginForm`.
- `components/common/` – `LoadingDisplay`, `ErrorDisplay`.
- Global styling in `App.css` and modular CSS in `src/styles/**`.

## Data & Services (`src/services`)
- `loginService.ts` – `login` and `register`, stores the JWT returned in the `Authorization` response header.
- `postsService.ts` – fetches posts list, single post, and submits a new post. Sends token via `Authorization` header and includes cookies.
- `authService.ts` – simple token persistence helpers (`saveToken`, `getToken`, `deleteToken`).

## Authentication Notes
- Backend sets a `token` cookie (httpOnly) and also returns the JWT in the `Authorization` header.
- The frontend saves the token to `localStorage` and reuses it in API calls; cookies are sent with `credentials: "include"`.

## Building for Production
```bash
npm run build
npm run preview
```
Output is produced by Vite; adjust backend static hosting as needed if you deploy both together.
