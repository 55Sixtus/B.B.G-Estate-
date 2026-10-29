# Deployment Guide - Bashir Building Green Estates (B.G.E.)

This document provides complete instructions for building and deploying the B.G.E. real estate website to Netlify or any modern static/JAMstack hosting provider.

---

## 1. Prerequisites & Installation

- **Node.js**: Version 18.x or higher recommended.
- **Package Manager**: npm (or yarn / bun).

To install dependencies locally:
```bash
npm install
```

---

## 2. Local Development

To start the local development server on port 3000:
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

---

## 3. Production Build

To create an optimized production build:
```bash
npm run build
```
The compiled output will be generated in the `/dist` directory.

---

## 4. Netlify Deployment Settings

When deploying this project on Netlify, configure the following site settings:

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: `18` or `20` (configured via Netlify environment or site settings if needed)

### SPA Routing Fallback
Client-side routing is handled via `public/_redirects`, which contains:
```text
/*    /index.html   200
```
This ensures direct URL navigation and page refreshes work correctly without 404 errors.

---

## 5. Environment Variables

This application is primarily a static frontend client with WhatsApp direct handoffs and verified contact integrations. 
If Gemini AI features or server-side endpoints are used, set the following environment variable in your Netlify Site Settings (`Settings > Build & deploy > Environment`):

- `GEMINI_API_KEY`: Required only if AI valuation / smart assistant features are enabled.

No sensitive credentials or private keys are exposed in client-side bundles.

---

## 6. Official Contact & Domain Configuration

- **Official Website URL**: Configure your custom production domain (e.g., `https://bgepropertyholding.com` or `https://mandamis.com`) in Netlify domain settings.
- **Primary Contact**: 
  - Phone: `+234 811 295 8241`
  - WhatsApp: `https://wa.me/2348112958241`
  - Email: `bgepropertyholding@gmail.com`
  - Instagram: `@bashir_bge`
  - Facebook: `BGE Property Holding`
