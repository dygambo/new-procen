# new-procen

A full-stack web application built with **React + Vite** (frontend) and **Express** (backend), using **PostgreSQL** via Drizzle ORM.

---

## Prerequisites

| Tool | Minimum version |
|------|----------------|
| Node.js | 18.x or later |
| npm | 9.x or later |
| PostgreSQL | 14.x or later |

---

## Local development

```bash
# 1. Install dependencies
npm install

# 2. Create your local .env file
cp .env.example .env
# Edit .env and fill in DATABASE_URL, SESSION_SECRET, etc.

# 3. Push the database schema
npm run db:push

# 4. Start the dev server (Express API + Vite HMR)
npm run dev
```

The application will be available at `http://localhost:5000` (or the port configured in the server).

---

## Production build

```bash
npm run build
```

This command:
1. Compiles the React frontend with Vite → `dist/public/`
2. Bundles the Express server with esbuild → `dist/index.cjs`

---

## Deploying to Hostinger (Node.js Hosting)

### 1. Upload your code

Push all files **except** `node_modules/` and `dist/` to your Hostinger repository or upload via SSH/FTP.

### 2. Set environment variables

In the Hostinger control panel → **Node.js** → **Environment Variables**, add:

| Variable | Value |
|----------|-------|
| `NODE_ENV` | `production` |
| `DATABASE_URL` | Your PostgreSQL connection string |
| `SESSION_SECRET` | A long random string |

Hostinger injects `PORT` automatically — **do not override it**.

### 3. Configure the entry point

In the Hostinger Node.js settings set:

- **Entry point / Start file**: `dist/index.cjs`  
  *(the `npm start` command — `NODE_ENV=production node dist/index.cjs` — already does this)*

### 4. Install & build

Run these commands via SSH or the Hostinger terminal:

```bash
npm install --omit=dev   # install production dependencies
npm run build            # compile client + server
```

> **Note:** If Hostinger runs `npm install` automatically, it will install all dependencies (including dev). That is fine — esbuild and tsx are needed for the build step.

### 5. Run database migrations

```bash
npm run db:push
```

### 6. Start the server

Hostinger will run `npm start` automatically. The server reads the injected `PORT` variable and listens on it.

---

## Available scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Express + Vite dev server |
| `npm run build` | Build client and server for production |
| `npm start` | Start the production server |
| `npm run check` | Type-check all TypeScript |
| `npm run db:push` | Sync Drizzle schema to the database |
