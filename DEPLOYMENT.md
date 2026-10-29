# Deployment Guide - Bashir Building Green Estates (B.G.E.)

This document provides instructions for deploying the B.G.E. real estate website to **Vercel** or **Netlify**.

---

## 1. Local Development & Production Build

- **Install dependencies**: `npm install`
- **Run dev server**: `npm run dev`
- **Production build**: `npm run build` (outputs to `/dist`)

---

## 2. Deploying to Vercel (Recommended)

This project includes a `vercel.json` configuration for seamless SPA client-side routing.

1. Push your code to GitHub / GitLab / Bitbucket.
2. Import the project into **Vercel** (`vercel.com`).
3. Vercel automatically detects Vite. Verify the build settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**.

---

## 3. Deploying to Netlify

This project includes a `public/_redirects` configuration for Netlify SPA routing.

1. Import the project into **Netlify** (`netlify.com`).
2. Configure site settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Click **Deploy**.

---

## 4. Official Contact & Developer Credit

- **Developer Credit**: Sixtus Tech Hub | 08130678052
- **Primary Contact**: +234 811 295 8241 | bgepropertyholding@gmail.com
