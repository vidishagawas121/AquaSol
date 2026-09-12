# ☀️ Aqua-Sol Energy — Official Static React Website

A high-performance, maintenance-free **Static React Web Application** engineered for **Aqua-Sol Energy**, an authorized solar and renewable energy solutions enterprise headquartered in **Pune, Maharashtra**.

---

## 📋 Executive Summary

* **Company**: Aqua-Sol Energy
* **Registered Office**: Office No. 05, Ground Floor, Laxmi Kunj, Near Ganpati Mandir, Chandan Nagar, Pune - 411014, Maharashtra
* **Helpline & WhatsApp**: +91 8275067701
* **Official Email**: aquasolpune@gmail.com
* **Official WhatsApp**: `https://wa.me/918275067701`
* **Credentials**: Registered under Ministry of MSME, Govt. of India; Authorized PM Surya Ghar Vendor Partner.
* **Financing Assistance**: Solar loan facility assistance through Union Bank of India and leading nationalised banks.

---

## 🚀 Key Website Features

### 1. Customer & Lead Generation Experience
- **PM Surya Ghar: Muft Bijli Yojana Central Hub**:
  - Detailed subsidy breakdown up to ₹78,000 (1 kW = ₹30k, 2 kW = ₹60k, 3 kW+ = ₹78k).
  - 300 units/month free electricity breakdown, eligibility criteria, and step-by-step net metering flowchart.
  - Collateral-free solar loan information with Union Bank of India.
- **Interactive Solar Savings Calculator**:
  - Instant estimates for system capacity, monthly bill reduction, government subsidy, net investment, and payback period.
  - Sliders for monthly electricity bill (₹) or sanctioned load (kW).
  - One-click button to dispatch calculator estimates directly to WhatsApp.
- **Specialized Services & Maintenance**:
  - Solar Water Heater Tank Repair using specialized **Argon Arc Welding**.
  - Chemical and mechanical descaling for hard water scale buildup.
  - Leak stoppage, gasket sealing, glass tube replacement, and comprehensive Annual Maintenance Contracts (AMC).
- **Direct WhatsApp Lead Dispatch**:
  - All inquiry forms (Free Quote Modal, Book Site Survey, Solar Calculator, Contact Page) compile clean pre-formatted messages and launch WhatsApp directly to `+91 8275067701`.
  - Zero backend server or database required to capture leads; inquiries land instantly in the business owner's WhatsApp.
- **Automatic Scroll Restoration**:
  - Every page navigation automatically scrolls smoothly to the very top.
- **Product & Solution Showcase**:
  - Evacuated Tube Collector (ETC) and Flat Plate Collector (FPC) solar water heaters, commercial heat pumps, solar street lights, and rooftop solar PV systems.
- **Authentic Pune Projects & Installation Gallery**:
  - Documented installations across Pune (Kothrud, Baner, Chandan Nagar, Wagholi, Hadapsar, etc.).

---

## 🛠️ Architecture & Tech Stack

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | React 19 + Vite 8 | Ultra-fast client-side single page application |
| **Styling** | Tailwind CSS + Lucide React | Clean, modern, fully responsive mobile-first design |
| **Static Data Layer** | Pure JavaScript Modules (`src/data/`) | Centralized data files for company info, products, services, projects, blogs, faqs |
| **Routing** | React Router v7 | Seamless client routing with `ScrollToTop` restoration |
| **Lead Generation** | Direct WhatsApp API | Pre-formatted `https://wa.me/918275067701?text=...` dispatch |
| **Deployment** | 100% Static HTML/JS/CSS | Ready for Vercel, Netlify, Cloudflare Pages, GitHub Pages, or any web host |

---

## 📂 Project Structure

```
d:\Aqua Sol\
├── brochures\                    # Authentic client PDF brochures & extracted assets
│   ├── AQUA SOL ENERGY-1.pdf
│   └── Aquasol Energy.pdf
├── frontend\                     # Vite + React static client
│   ├── public\                   # Favicon and public assets
│   ├── src\
│   │   ├── assets\               # Extracted logo, product photos, badges
│   │   ├── components\           # Navbar, Footer, QuoteModal, WhatsAppButton, ScrollToTop
│   │   ├── context\              # SettingsContext (synchronous branding data)
│   │   ├── data\                 # Centralized static data modules
│   │   │   ├── companyInfo.js    # Contact info, Pune address, subsidy matrix, calculator constants
│   │   │   ├── products.js       # Solar water heaters, rooftop solar, heat pumps, street lights
│   │   │   ├── services.js       # Argon welding, descaling, AMC, leakage removal
│   │   │   ├── solutions.js      # Residential, commercial, heating, pumping
│   │   │   ├── projects.js       # Real Pune case studies
│   │   │   ├── faqs.js           # PM Surya Ghar & technical solar FAQs
│   │   │   ├── testimonials.js   # Customer reviews
│   │   │   ├── blogs.js          # Solar guides & articles
│   │   │   ├── gallery.js        # Categorized gallery photos
│   │   │   └── index.js          # Barrel exports
│   │   ├── layouts\              # PublicLayout
│   │   ├── pages\                # 18 static customer-facing pages
│   │   │   ├── HomePage.jsx
│   │   │   ├── AboutPage.jsx
│   │   │   ├── ProductsPage.jsx & ProductDetailPage.jsx
│   │   │   ├── ServicesPage.jsx & ServiceDetailPage.jsx
│   │   │   ├── SolutionsPage.jsx & SolutionDetailPage.jsx
│   │   │   ├── PMSuryaGharPage.jsx
│   │   │   ├── SolarCalculatorPage.jsx
│   │   │   ├── BookSurveyPage.jsx
│   │   │   ├── ProjectsPage.jsx & ProjectDetailPage.jsx
│   │   │   ├── GalleryPage.jsx
│   │   │   ├── BlogPage.jsx & BlogDetailPage.jsx
│   │   │   ├── ContactPage.jsx
│   │   │   └── LegalPages.jsx
│   │   ├── App.jsx               # Route configuration with ScrollToTop
│   │   ├── main.jsx              # App entry point
│   │   └── index.css             # Tailwind base styles
│   ├── package.json
│   └── vite.config.js
```

---

## 🏃 Local Development

To run the static website locally:

```bash
cd "d:\Aqua Sol\frontend"
npm install
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 📦 Production Build & Deployment

To generate an optimized static production bundle:

```bash
cd "d:\Aqua Sol\frontend"
npm run build
```

The compiled static assets will be output to `frontend/dist/`.

### Deployment Options:
1. **Vercel**: Run `npx vercel` or connect the GitHub repository.
2. **Netlify**: Drag and drop the `dist/` folder into Netlify Drop or configure build command `npm run build` and publish directory `dist`.
3. **Cloudflare Pages / GitHub Pages**: Point the build output to `frontend/dist`.
4. **Any Traditional Apache/Nginx Web Server**: Upload the contents of `dist/` directly to `public_html`.
