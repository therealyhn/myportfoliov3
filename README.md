# Jovan Ljušić — Portfolio v3

Personal portfolio site at [jovanljusic.com](https://jovanljusic.com).

## Stack

- **React 18** + Vite
- **Tailwind CSS v3**
- **Sanity CMS** — content source (projects, shared dataset with v2)
- **React Router v6**
- **GitHub Actions** — auto-deploy to Hostinger via FTP on push to `main`

## Local development

```bash
npm install
npm run dev
```

Sanity Studio (separate):

```bash
cd sanity
npm install
sanity dev
```

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deploy

Every push to `main` triggers the GitHub Actions workflow which builds and deploys via FTP to Hostinger.

Required GitHub Secrets:

| Secret | Description |
|---|---|
| `FTP_HOST` | Hostinger FTP host |
| `FTP_USERNAME` | FTP username |
| `FTP_PASSWORD` | FTP password |
| `FTP_PORT` | FTP port (21 or 990) |

## Environment

Create a `.env` file at the root (never commit):

```env
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
```

## Previous versions

- v2 → [v2.jovanljusic.com](https://v2.jovanljusic.com)
- v1 → [v1.jovanljusic.com](https://v1.jovanljusic.com)
