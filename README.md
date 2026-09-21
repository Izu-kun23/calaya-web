# Calaya Engineering Website

Calaya Engineering's website is built with Next.js App Router, React, and Tailwind CSS.

## Requirements

- Node.js 20 or newer
- npm

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production

```bash
npm run build
npm run start
```

The application routes live in `app/`. Shared UI components live in `app/components/` and `src/components/`, while public images and documents live in `public/`.

## Environment variables

Copy `env.example` to `.env.local` and provide the values required by the contact form and email provider. Never commit `.env.local`.
