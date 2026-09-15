# 🚀 Aqua-Sol Energy — Vercel Separate Deployment Guide

This guide explains how to deploy **Aqua-Sol Energy** on **Vercel** as two separate, independently scaled projects:
1. **Backend Project** (Express Serverless API on Vercel)
2. **Frontend Project** (Vite + React Single-Page Application on Vercel CDN)

---

## 📑 Table of Contents
1. [Prerequisites](#1-prerequisites)
2. [Step 1: Set Up MongoDB Atlas (Cloud Database)](#step-1-set-up-mongodb-atlas-cloud-database)
3. [Step 2: Deploy Backend to Vercel](#step-2-deploy-backend-to-vercel)
4. [Step 3: Deploy Frontend to Vercel](#step-3-deploy-frontend-to-vercel)
5. [Step 4: Connect Backend & Frontend](#step-4-connect-backend--frontend)
6. [Step 5: Database Seeding (Optional)](#step-5-database-seeding-optional)
7. [Troubleshooting & Common Issues](#troubleshooting--common-issues)

---

## 1. Prerequisites
- A [Vercel Account](https://vercel.com/signup)
- A [GitHub Account](https://github.com/) with this repository pushed to your GitHub
- A free [MongoDB Atlas Account](https://www.mongodb.com/cloud/atlas/register)

---

## Step 1: Set Up MongoDB Atlas (Cloud Database)
> Since Vercel uses serverless functions without persistent local disk or daemons, your MongoDB database must be hosted in the cloud.

1. Log in to [MongoDB Atlas](https://cloud.mongodb.com/).
2. Create a free shared cluster (M0 Free Tier).
3. **Database Access**: Create a Database User (e.g. `aquasol_admin`) with a secure password.
4. **Network Access**: 
   - Click **Network Access** > **Add IP Address**.
   - Choose **Allow Access From Anywhere (`0.0.0.0/0`)** because Vercel serverless functions have dynamic outgoing IP addresses.
5. **Get Connection String**:
   - Go to **Database** > **Connect** > **Drivers** (Node.js).
   - Copy the URI, replacing `<password>` with your database user password:
     ```
     mongodb+srv://aquasol_admin:<password>@cluster0.abcde.mongodb.net/aqua_sol_energy?retryWrites=true&w=majority
     ```

---

## Step 2: Deploy Backend to Vercel

1. Log into your [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **Add New...** > **Project**.
3. Select your Aqua-Sol repository.
4. Name the project (e.g. `aqua-sol-backend`).
5. In **Root Directory**, click **Edit** and choose:
   ```
   backend
   ```
6. **Framework Preset**: Leave as **Other** (Vercel will detect `backend/vercel.json` and `backend/api/index.js`).
7. Expand **Environment Variables** and add the following:

| Key | Example Value | Description |
| :--- | :--- | :--- |
| `NODE_ENV` | `production` | Production mode |
| `MONGODB_URI` | `mongodb+srv://...` | Your MongoDB Atlas connection URI |
| `JWT_SECRET` | `super_secure_random_key_2026_xYz98` | 32+ character secret string |
| `CLIENT_URL` | `http://localhost:5173` | *(Will update with frontend URL in Step 4)* |

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
      "environment": "vercel-serverless"
    }
    ```

---

## Step 3: Deploy Frontend to Vercel

1. Return to the [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **Add New...** > **Project**.
3. Select the **same** GitHub repository.
4. Name this project (e.g. `aqua-sol-frontend`).
5. In **Root Directory**, click **Edit** and choose:
   ```
   frontend
   ```
6. **Framework Preset**: Vercel will automatically detect **Vite**.
   - Build Command: `npm run build`
   - Output Directory: `dist`
7. Expand **Environment Variables** and add:

| Key | Example Value | Description |
| :--- | :--- | :--- |
| `VITE_API_BASE_URL` | `https://aqua-sol-backend.vercel.app` | Your deployed backend URL from Step 2 |

8. Click **Deploy**.
9. Once deployment finishes, you get your frontend URL, for example:
   ```
   https://aqua-sol-frontend.vercel.app
   ```

---

## Step 4: Connect Backend & Frontend

1. Copy your frontend Vercel domain (e.g. `https://aqua-sol-frontend.vercel.app`).
2. Go to your **Backend Project** in Vercel:
   - Go to **Settings** > **Environment Variables**.
   - Edit `CLIENT_URL` and add your frontend URL:
     ```
     https://aqua-sol-frontend.vercel.app,http://localhost:5173
     ```
3. Trigger a redeploy of the backend project (or go to **Deployments** > click the three dots on the latest deployment > **Redeploy**).

---

## Step 5: Database Seeding (Optional)

To seed initial products, services, solutions, blogs, faqs, and the admin account (`admin@aquasol.com` / `AquaSol@2026!`) into your MongoDB Atlas database:

Run from your local terminal:
```bash
cd "d:\Aqua Sol\backend"
# Set your MongoDB Atlas URI in backend/.env:
# MONGODB_URI=mongodb+srv://...

npm run seed
```

---

## 🛠️ Architecture & Vercel Files Overview

### Frontend (`frontend/`)
- `vercel.json`: Implements Single-Page Application (SPA) rewrites `/(.*) -> /index.html` so that direct page links (like `/services` or `/contact`) work on reload without 404 errors.
- `src/services/api.js`: Pre-configured Axios service connecting to `VITE_API_BASE_URL`.
- `.env.example`: Reference for frontend environment variables.

### Backend (`backend/`)
- `vercel.json`: Rewrites all incoming requests `/(.*)` to the serverless function `/api/index.js`.
- `api/index.js`: Standard serverless export for Vercel Lambdas.
- `config/db.js`: Implements connection caching across warm serverless invocations to avoid exhausting MongoDB Atlas connection limits.
- `controllers/uploadController.js`: Detects Vercel serverless environment and safely uses `/tmp/uploads` to prevent read-only filesystem errors (`EROFS`).
- `server.js`: Enables `trust proxy` for rate limiters behind Vercel load balancers, dynamically allows `*.vercel.app` CORS origins, and conditionally suppresses local port listening on Vercel.

---

## 🔍 Troubleshooting & Common Issues

| Issue | Cause | Solution |
| :--- | :--- | :--- |
| **404 on page refresh** | SPA route not rewritten | Verify `frontend/vercel.json` exists with rewrite to `/index.html`. |
| **CORS error in browser console** | Backend doesn't recognize frontend domain | In backend project on Vercel, set `CLIENT_URL` to include your frontend URL and redeploy. Any `*.vercel.app` domain is also automatically permitted. |
| **MongoDB connection timeout (5000ms)** | Atlas IP whitelist blocking Vercel | In MongoDB Atlas, go to **Network Access** and make sure `0.0.0.0/0` (Allow from anywhere) is active. |
| **API request hangs or fails** | Missing `MONGODB_URI` in Vercel | Check backend Vercel logs under **Runtime Logs** and ensure `MONGODB_URI` environment variable is set. |
