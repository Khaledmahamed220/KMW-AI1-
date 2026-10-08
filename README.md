# KMW AI — AI Engineering Command Center
> Official Portfolio for **Khaled MAHAMED Wafik** — AI Automation Engineer  
> *"Build smarter. Automate faster. Scale better."*

[![Vercel Ready](https://img.shields.io/badge/Vercel-Ready-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

---

## 1. Project Overview

**KMW AI** is an AI Engineering Command Center designed and built from scratch for **Khaled MAHAMED Wafik**, AI Automation Engineer.

The application reflects a dark, premium, minimal, cinematic, and intelligent technological interface centered around:
- **Real Human × Intelligent Systems Augmentation:** Khaled's official authentic portrait surrounded by dynamic neural connection nodes, holographic telemetry coordinates, orbital radar loops, and vertical AI scanning beams.
- **Production AI Systems:** Deep dives into **AI Agents** (LangGraph, Python), **Workflow Automation** (n8n, Webhooks), **RAG Systems** (pgvector, FastAPI), and **API Integrations** (REST APIs, PostgreSQL).
- **Interactive System Architecture Simulator:** Live step-by-step pipeline execution for autonomous agent reasoning loops, webhook data transformations, and vector retrieval.
- **KMW AI CORE Interactive Console:** An interactive AI assistant simulating system queries, knowledge base exploration, and real-time response generation.
- **Bilingual Experience (English / Arabic):** Comprehensive localization with instantaneous RTL/LTR layout mirroring, native Arabic typography (`Cairo`), and localized technical terminology.
- **Tactical Audio Feedback:** Subtle, toggleable Web Audio API UI sound feedback for interactions.
- **Command Palette (`Cmd+K` / `Ctrl+K`):** Keyboard-driven navigation across the command center.

---

## 2. Engineering Stack

### Frontend Architecture
- **Framework:** React 18 with Vite
- **Styling:** Tailwind CSS 3.4 with custom command center palette (`midnight-950`, `cyan-electric`, `electric-blue`)
- **Typography:** `Inter` (sans), `JetBrains Mono` (monospace code & metrics), `Cairo` (Arabic)
- **Icons:** `lucide-react`
- **Audio:** Web Audio API sound synthesizer
- **Motion & Canvas:** HTML5 Canvas particle/neural network engine with reduced-motion support

### Core AI Engineering Stack Highlighted
- **Languages & Frameworks:** Python, FastAPI
- **Agent Orchestration:** LangGraph, OpenAI Foundation Models
- **Pipelines & Workflows:** n8n, Event-Driven Webhooks, REST APIs
- **Data & Vector Stores:** PostgreSQL, pgvector, Semantic Embeddings

---

## 3. Project Structure

```
portflio30/
├── public/
│   └── assets/
│       ├── khaled-portrait.png      # Processed transparent authentic portrait
│       └── khaled-portrait-orig.jpg # Original image source
├── src/
│   ├── components/
│   │   ├── Navbar.jsx               # Sticky command center navigation & language switcher
│   │   ├── Hero.jsx                 # Asymmetric hero with headline & live capability modules
│   │   ├── HumanAiVisual.jsx        # Neural canvas, radar HUD, and augmented portrait
│   │   ├── SystemsSection.jsx       # 4 core capabilities with interactive pipeline simulator
│   │   ├── TechStackSection.jsx     # AI engineering stack with category filters
│   │   ├── ProjectsSection.jsx      # Selected AI systems (Problem, Architecture, Solution, Outcome)
│   │   ├── ProcessSection.jsx       # 5-step engineering pipeline (Analyze to Scale)
│   │   ├── AboutSection.jsx         # Engineering profile and core values
│   │   ├── WhyKmwSection.jsx        # 7 architectural engineering pillars
│   │   ├── AiAssistant.jsx          # KMW AI CORE interactive console
│   │   ├── ContactSection.jsx       # Contact protocol & API-ready form
│   │   ├── Footer.jsx               # Brand, statements, and technical channels
│   │   └── CommandPalette.jsx       # Cmd+K quick navigation modal
│   ├── translations/
│   │   └── i18n.js                  # Complete bilingual English & Arabic dictionaries
│   ├── utils/
│   │   └── sound.js                 # Synthesized Web Audio API sound controller
│   ├── App.jsx                      # Root application layout & state orchestration
│   ├── index.css                    # Tailwind setup, scrollbars, and command grid styles
│   └── main.jsx                     # Vite React entry point
├── index.html                       # Semantic HTML5, SEO Open Graph, JSON-LD schema
├── package.json                     # Dependencies & build scripts
├── postcss.config.js                # PostCSS configuration
├── tailwind.config.js               # Tailwind custom theme configuration
├── vercel.json                      # Vercel deployment configuration
├── .gitignore                       # Clean Git ignore rules
└── README.md                        # Documentation
```

---

## 4. Local Development

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18.0 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation
```bash
# Clone or navigate to the repository
cd portflio30

# Install dependencies
npm install
```

### Run Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000`.

---

## 5. Production Build & Preview

```bash
# Compile and optimize production bundle
npm run build

# Preview production build locally
npm run preview
```
Production assets are generated in the `dist/` directory with automated chunking and minification.

---

## 6. Deployment

### Deploy to Vercel (Recommended)

1. Push this repository to GitHub or GitLab.
2. Log into [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import the repository.
4. Framework preset will automatically detect **Vite**.
5. Build command: `npm run build`
6. Output directory: `dist`
7. Click **Deploy**.

The bundled `vercel.json` ensures that single-page routing and static asset caching work seamlessly out-of-the-box.

### Environment Variables
For future LLM API or Webhook/CRM integration, create a `.env` file in the project root:

```env
# Optional LLM API Endpoint (for production KMW AI CORE integration)
VITE_LLM_API_ENDPOINT=https://api.your-domain.com/v1/chat
VITE_LLM_API_KEY=your_production_key_here

# Optional Webhook Endpoint (for production contact form delivery)
VITE_CONTACT_WEBHOOK_URL=https://n8n.your-domain.com/webhook/contact
```
*(Never commit `.env` or production secrets to source control).*

---

## 7. Accessibility & Performance Standards

- **Semantic HTML:** Strict heading hierarchy (`h1` through `h6`), `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`.
- **Keyboard Navigation:** Full focus-visible rings on all interactive elements, keyboard-accessible command palette (`Cmd+K` / `Ctrl+K`), and escape handlers.
- **Motion Accessibility:** Automatically respects `prefers-reduced-motion: reduce` by disabling continuous animations.
- **Performance:** Clean CSS gradients and canvas animations that unload upon unmount, zero heavy external binary assets, and responsive SVG icons.

---

## 8. License

© 2026 **KMW AI** (Khaled MAHAMED Wafik). All rights reserved.
