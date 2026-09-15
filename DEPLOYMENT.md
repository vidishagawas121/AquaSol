# 🚀 Aqua-Sol Energy — Vercel Separate Deployment Guide

This guide explains how to deploy **Aqua-Sol Energy** on **Vercel** as two separate, independently managed projects:
1. **Backend Project** (Express Serverless API on Vercel)
2. **Frontend Project** (Vite + React Single-Page Application on Vercel CDN)

> **💡 Zero Database Required**: Aqua-Sol Energy is architected to operate in **100% standalone zero-database mode**. Customer inquiries and site survey requests are dispatched directly to WhatsApp Web (`+91 8275067701`), and all company, service, and subsidy data is self-contained. **No MongoDB Atlas or external database setup is required!**

---

## 📑 Table of Contents
1. [Prerequisites](#1-prerequisites)
2. [Step 1: Deploy Backend to Vercel](#step-1-deploy-backend-to-vercel)
3. [Step 2: Deploy Frontend to Vercel](#step-2-deploy-frontend-to-vercel)
4. [Step 3: Connect Frontend to Backend](#step-3-connect-frontend-to-backend)
5. [Architecture Overview](#architecture-overview)
6. [Troubleshooting & Common Questions](#troubleshooting--common-questions)

---

## 1. Prerequisites
- A [Vercel Account](https://vercel.com/signup)
- A [GitHub Account](https://github.com/) with this repository pushed to your account

---

## Step 1: Deploy Backend to Vercel

1. Log into your [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **Add New...** > **Project**.
3. Select your **AquaSol** repository.
4. Name the project (e.g. `aqua-sol-backend`).
5. In **Root Directory**, click **Edit** and select:
   ```
   backend
   ```
6. **Framework Preset**: Leave as **Other** (Vercel automatically detects `vercel.json` and `api/index.js`).
7. Expand **Environment Variables** (Optional, you can set `NODE_ENV=production`):

| Key | Value | Description |
| :--- | :--- | :--- |
| `NODE_ENV` | `production` | Production mode |

8. Click **Deploy**.
9. Once deployment finishes, Vercel gives you your backend URL, for example:
   ```
   https://aqua-sol-backend.vercel.app
   ```
10. Test the health endpoint in your browser:
    ```
    https://aqua-sol-backend.vercel.app/api/health
    ```
    You should see:
    ```json
    {
      "status": "online",
      "service": "Aqua-Sol Energy Production API",
      "location": "Pune, Maharashtra",
      "environment": "vercel-serverless",
      "database": "not required (standalone mode)"
    }
    ```

---

## Step 2: Deploy Frontend to Vercel

1. Return to the [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **Add New...** > **Project**.
3. Select the **same** GitHub repository (`AquaSol`).
4. Name this project (e.g. `aqua-sol-frontend`).
5. In **Root Directory**, click **Edit** and select:
   ```
   frontend
   ```
6. **Framework Preset**: Vercel will automatically detect **Vite**.
   - Build Command: `npm run build`
   - Output Directory: `dist`
7. Expand **Environment Variables** and add:

| Key | Example Value | Description |
| :--- | :--- | :--- |
| `VITE_API_BASE_URL` | `https://aqua-sol-backend.vercel.app` | Your deployed backend URL from Step 1 |

8. Click **Deploy**.
9. Once deployment finishes, Vercel gives you your frontend URL, for example:
   ```
   https://aqua-sol-frontend.vercel.app
   ```

---

## Step 3: Connect Frontend to Backend

1. Copy your frontend Vercel domain (e.g. `https://aqua-sol-frontend.vercel.app`).
2. Go to your **Backend Project** in Vercel:
   - Navigate to **Settings** > **Environment Variables**.
   - Set `CLIENT_URL` to your frontend URL:
     ```
     CLIENT_URL=https://aqua-sol-frontend.vercel.app
     ```
   *(Note: Any `*.vercel.app` domain is also automatically permitted by the built-in CORS configuration).*

---

## 🛠️ Architecture Overview

### Frontend (`frontend/`)
- `vercel.json`: Implements Single-Page Application (SPA) rewrites `/(.*) -> /index.html` so that direct URLs (like `/services`, `/contact`, `/pm-surya-ghar`) work on page reload without 404 errors.
- `src/services/api.js`: Pre-configured Axios service connecting to `VITE_API_BASE_URL`.
- `.env.example`: Reference for frontend environment variables.

### Backend (`backend/`)
- `vercel.json`: Rewrites all incoming requests `/(.*)` to the serverless function `/api/index.js`.
- `api/index.js`: Standard serverless export for Vercel Lambdas.
- `config/db.js`: Optional database connection with instant fallback to zero-database standalone mode when no `MONGODB_URI` is provided.
- `controllers/uploadController.js`: Safe `/tmp/uploads` pathing for read-only serverless filesystems.
- `server.js`: Enables `trust proxy` for edge rate-limiting, dynamically allows `*.vercel.app` CORS origins, and conditionally suppresses local port listening on Vercel.

---

## 🔍 Troubleshooting & Common Questions

| Question | Answer |
| :--- | :--- |
| **Do I need to pay for or host a database?** | **No.** Aqua-Sol runs in standalone zero-database mode. Leads and surveys are dispatched directly to WhatsApp. |
| **Why does refreshing a page give 404 on Vercel?** | Ensure `frontend/vercel.json` exists with the rewrite to `/index.html`. We have configured this already. |
| **How does WhatsApp lead dispatch work?** | Form submissions compile pre-formatted WhatsApp messages and open `https://wa.me/918275067701`, ensuring instant lead delivery without any database downtime. |
