# CeroSoft — Corporate Website

Official corporate website for **CeroSoft**, built with React, TypeScript, and Vite and deployed on Vercel.

**Production:** https://cerosoft.net

## Overview

CeroSoft builds practical software solutions around real business problems. This repository contains the production corporate website, including the public-facing company pages and a serverless contact endpoint.

The site is designed to remain lightweight: the frontend is statically built and served through Vercel, while contact-form email delivery is handled by a Vercel Serverless Function and Resend. No application database is required.

## Tech Stack

- React 19
- TypeScript
- Vite 8
- Lucide React
- Vercel
- Cloudflare DNS
- Resend Email API
- Node.js 20+

## Architecture

```text
Visitor
  |
  v
https://cerosoft.net
  |
  v
Cloudflare DNS
  |
  v
Vercel
  |-- Static React / Vite frontend
  |
  `-- /api/contact
          |
          v
        Resend
          |
          v
     CeroSoft inbox
```

The main `cerosoft.net` domain is deployed on Vercel. Other CeroSoft subdomains can be routed independently; for example, customer applications may use Cloudflare Tunnel without affecting the corporate website.

## Project Structure

```text
CeroSoft-Webpage/
├── api/
│   └── contact.js       # Serverless contact/email endpoint
├── app/
├── components/
├── hooks/
├── icons/
├── lib/
├── public/
├── src/
├── index.html
├── package.json
└── vercel.json
```

## Local Development

Requires **Node.js 20 or newer**.

```bash
git clone https://github.com/Cheer3142/CeroSoft-Webpage.git
cd CeroSoft-Webpage
npm install
npm run dev
```

The Vite development server runs on:

```text
http://localhost:3000
```

## Build

Create a production build with:

```bash
npm run build
```

Vite outputs the production site to `dist/`.

To preview the production build locally:

```bash
npm start
```

The preview server runs on:

```text
http://localhost:8081
```

## Contact Form & Resend

The production contact form uses the serverless endpoint:

```text
POST /api/contact
```

The endpoint validates the submitted form and sends the enquiry through Resend. The visitor's email address is set as `Reply-To`, allowing CeroSoft to reply directly from the received notification.

### Environment Variables

Configure these variables in **Vercel → Project Settings → Environment Variables**:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
CONTACT_TO_EMAIL=your-inbox@example.com
CONTACT_FROM_EMAIL=CeroSoft Website <contact@cerosoft.net>
```

`RESEND_API_KEY` must remain server-side. Never expose it through a `VITE_*` environment variable or commit the real key to GitHub.

The sending domain must also be verified in Resend before using an address under `cerosoft.net` as the production sender.

## Deployment

Production deployment is handled by Vercel and connected to this GitHub repository.

```text
GitHub main
    |
    v
Vercel Build
    |
    | npm install
    | npm run build
    v
   dist/
    |
    v
https://cerosoft.net
```

For a new Vercel setup, use:

| Setting | Value |
| --- | --- |
| Framework | Vite |
| Node.js | 20+ |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Production Domain | `cerosoft.net` |

After changing environment variables, redeploy the application so the new values are available to the serverless function.

## Available Scripts

```bash
npm run dev      # Start Vite development server on port 3000
npm run build    # TypeScript build + Vite production build
npm start        # Preview production build on port 8081
npm run lint     # Run oxlint
```

## Security Notes

- API credentials are stored as Vercel environment variables.
- The Resend API key is never sent to the browser.
- Contact input is validated server-side.
- User-provided content is escaped before being inserted into the email HTML.
- The contact endpoint includes a honeypot field for basic bot filtering.
- Production traffic is served over HTTPS.

## Production Status

**Live:** https://cerosoft.net

The current production stack consists of Vercel for hosting/serverless execution, Cloudflare for DNS, and Resend for transactional contact-form email delivery.

---

© 2026 CeroSoft. All rights reserved.
