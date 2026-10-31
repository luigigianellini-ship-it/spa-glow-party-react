# 🌸 Spa Glow Party — React + TypeScript + Vite

Modern, fully-responsive web application for **Spa Glow Party** developed with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS**.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```
The optimized bundle will be generated in `dist/`.

---

## 📁 Project Structure

```
spa-glow-party-react/
├── public/
│   └── assets/
│       ├── img/          # Processed images (team, workshops, founder)
│       └── videos/       # Lightweight MP4 videos and poster covers
├── src/
│   ├── components/
│   │   ├── Navbar.tsx        # Sticky header with navigation & action drawer
│   │   ├── Hero.tsx          # Main headline, video player trigger, CTAs
│   │   ├── About.tsx         # Foundation story (July 15, 2025), mission, team
│   │   ├── Projects.tsx      # Free beauty workshops, events, community hubs
│   │   ├── ImpactGallery.tsx # Student video testimonials & filterable photo gallery
│   │   ├── HowToHelp.tsx     # Pix instant copy & QR code, suggested donation kits, Pink Squad
│   │   ├── News.tsx          # Real graduations and social initiatives blog
│   │   ├── Contact.tsx       # Direct WhatsApp links, interactive form, Google Maps
│   │   ├── Footer.tsx        # Institutional links, brand signature, copyright
│   │   └── Modals.tsx        # Pix donation, Google Forms iframe, video player, lightbox
│   ├── data/
│   │   └── config.json       # Single source of truth for all content & live synchronization
│   ├── types/
│   │   └── config.ts         # TypeScript schema definitions
│   ├── App.tsx               # Main state controller & live KVDB cloud sync
│   ├── main.tsx              # React DOM bootstrap
│   └── index.css             # Tailwind CSS & global animations
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🌟 Key Features

- **Component-Driven Architecture**: Modular, clean, reusable components with full TypeScript typing.
- **Dynamic Cloud Synchronization**: Fetches and hydrates live data from the persistent KVDB cloud endpoint (`site_config`) with instant local fallback.
- **Interactive Multimedia**: In-app video modals for student testimonials and event highlights.
- **Instant Donation Tools**: Interactive Pix QR code, dynamic suggested donation values, and one-click key copying.
- **Volunteer Integration**: In-app Google Forms embedding and Pink Squad recruitment.
