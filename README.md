# 🏫 Krupa Nilaya School — Official Website

A full-stack, production-ready school website built with **Next.js**, **Node.js**, **Express**, and **MongoDB Atlas**.

---

## 📁 Project Structure

```
krupa-nilaya-school/
├── frontend/          # Next.js 14 + Tailwind CSS
│   ├── app/
│   │   ├── page.tsx              # Home page
│   │   ├── about/page.tsx
│   │   ├── academics/page.tsx
│   │   ├── facilities/page.tsx
│   │   ├── gallery/page.tsx      # With lightbox
│   │   ├── admissions/page.tsx   # With inquiry form
│   │   ├── announcements/page.tsx
│   │   ├── contact/page.tsx      # With map + form
│   │   ├── layout.tsx
│   │   └── globals.css
│   └── components/
│       ├── layout/   Navbar, Footer
│       ├── sections/ Home page sections
│       └── ui/       Reusable components
│
└── backend/           # Node.js + Express REST API
    ├── models/        MongoDB schemas
    ├── routes/        API routes
    └── server.js
```

---

## 🚀 Running Locally

### Step 1 — Set up Backend

```bash
cd backend
npm install
cp .env.example .env
# Edit .env and add your MongoDB Atlas URI
npm run dev
# Runs at http://localhost:5000
```

**Get MongoDB URI:**
1. Go to https://cloud.mongodb.com → Create free cluster
2. Click Connect → Connect your application → Copy URI
3. Replace <username> and <password> in the URI

---

### Step 2 — Set up Frontend

```bash
cd frontend
npm install
cp .env.local.example .env.local
npm run dev
# Runs at http://localhost:3000
```

---

### Step 3 — Seed Sample Announcements (Optional)

```
POST http://localhost:5000/api/announcements/seed
```

---

## 🌐 Deployment

### Frontend → Vercel (Free)
1. Push frontend/ to GitHub
2. Import at vercel.com → set Root Directory: frontend
3. Add env var: NEXT_PUBLIC_API_URL = your Render backend URL
4. Deploy

### Backend → Render (Free)
1. Push backend/ to GitHub
2. New Web Service at render.com → Root Directory: backend
3. Start Command: node server.js
4. Add env vars: MONGODB_URI, FRONTEND_URL, NODE_ENV=production
5. Deploy

---

## ✏️ How to Customize Content

| What to Change | File |
|---|---|
| School name, tagline, hero | components/sections/HeroSection.tsx |
| About & history | app/about/page.tsx |
| Principal name & photo | components/sections/PrincipalMessage.tsx |
| Phone number & email | components/layout/Navbar.tsx + Footer.tsx |
| School address | components/layout/Footer.tsx + app/contact/page.tsx |
| Achievements | components/sections/AchievementsSection.tsx |
| Testimonials | components/sections/TestimonialsSection.tsx |
| Gallery photos | app/gallery/page.tsx |
| Facilities | app/facilities/page.tsx |
| Colors & fonts | tailwind.config.js + globals.css |
| Google Maps embed | app/contact/page.tsx (iframe src) |

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/admissions | Submit admission inquiry |
| GET  | /api/admissions | Get all inquiries |
| POST | /api/contact | Submit contact message |
| GET  | /api/contact | Get all messages |
| GET  | /api/announcements | Get announcements |
| POST | /api/announcements | Create announcement |
| POST | /api/announcements/seed | Seed sample data |
| GET  | /api/health | Health check |

---

## 🎨 Pages

| Page | URL |
|---|---|
| Home | / |
| About | /about |
| Academics | /academics |
| Facilities | /facilities |
| Gallery | /gallery |
| Admissions | /admissions |
| Announcements | /announcements |
| Contact | /contact |

---

Krupa Nilaya School — Sandur, Ballari District, Karnataka — Est. 1993
