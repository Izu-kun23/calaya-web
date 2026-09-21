# Calaya Engineering Deployment Guide

This is a Next.js App Router application and requires a deployment platform that supports the Next.js runtime.

## Vercel

1. Import the repository into Vercel.
2. Keep the detected framework preset as **Next.js**.
3. Add the production environment variables used by the contact and email integrations.
4. Deploy.

Vercel uses the scripts in `package.json` automatically. No custom rewrite or static publish directory is required.

## Other Next.js hosts

Install dependencies and create the production build:

```bash
npm ci
npm run build
npm run start
```

The host should run `npm run start` with the platform-provided `PORT` environment variable.

## Verification

Before deployment, run:

```bash
npm run build
```

Confirm the required environment variables are configured in the hosting dashboard before testing the contact form.
