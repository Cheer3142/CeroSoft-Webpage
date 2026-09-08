# CeroSoft corporate website

Production-ready React + Vite website with a Vercel Serverless contact endpoint. No database is required.

## Local development

```bash
npm install
npm run dev
```

## Production preview on port 8081

```bash
npm run build
npm start
```

The production preview is available at `http://localhost:8081`.

## Deploy to Vercel

1. Import this repository into Vercel.
2. Vercel reads `vercel.json`, runs `npm run build`, and publishes `dist`.
3. Create a Resend account and API key.
4. Add these variables in Vercel for Production, Preview, and Development:
   - `RESEND_API_KEY` — the Resend API key.
   - `CONTACT_TO_EMAIL` — recipient address; currently `cheer3142@gmail.com`.
   - `CONTACT_FROM_EMAIL` — verified sender, for example `CeroSoft Website <website@cerosoft.net>`.
5. Redeploy after adding or changing environment variables.

To change the recipient later, update `CONTACT_TO_EMAIL` in **Vercel → Project Settings → Environment Variables**. The code fallback is defined at the top of `api/contact.js`.

Resend requires a verified sending domain for production delivery. Verify `cerosoft.net` in Resend, then use an address on that domain in `CONTACT_FROM_EMAIL`.
