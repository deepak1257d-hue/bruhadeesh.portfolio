# Bruhadeesh Narayana R — Engineering Portfolio

A bespoke, production-grade personal engineering portfolio website designed and built for **Bruhadeesh Narayana R** (`AI & Software Developer`).

Built with **React**, **Vite**, **Tailwind CSS v4**, and **Lucide Icons** following an editorial design system:
- **Primary Background:** Warm ivory (`#F6F5F0`)
- **Primary Text:** Deep ink (`#182B35`)
- **Secondary Text:** Muted slate (`#65747A`)
- **Primary Accent:** Forest green (`#316B5D`)
- **Secondary Accent:** Soft sage (`#DFE9E1`)
- **Dark Section:** (`#152A30`) with ivory text (`#F6F5F0`)
- **Border:** (`#E1E3DC`)

---

## 📸 Profile Photograph

The hero section expects your professional portrait photo at:
```
public/images/profile.jpg
```
- When you drop your portrait photograph into `public/images/profile.jpg`, the website immediately displays it with a 4:5 portrait crop, subtle border, soft shadow, and zero filters or distortions.
- If the file is not yet placed, a polished monogram placeholder ("BR") is shown with an indicator to place `profile.jpg`.

---

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ (tested with Node 24)

### Development
```bash
npm run dev
# or
npx vite
```
The application will launch at `http://localhost:3000`.

### Production Build
```bash
npm run build
# or
npx vite build
```
Compiled static assets will be output to `/dist`, ready to deploy directly to Vercel, Netlify, Cloudflare Pages, or GitHub Pages.

---

## 📂 Project Structure

```
bruhadeesh-portfolio/
├── dist/                     # Optimized production bundle
├── public/
│   └── images/
│       └── profile.jpg       # <-- Drop your actual portrait photo here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Sticky navigation with mobile menu
│   │   ├── Hero.jsx          # Two-column hero with availability badge
│   │   ├── HeroImage.jsx     # Responsive portrait frame with graceful fallback
│   │   ├── About.jsx         # Engineering philosophy & core pillars
│   │   ├── Projects.jsx      # 4 featured projects showcase
│   │   ├── ProjectCard.jsx   # Project cards with metrics & deep dive triggers
│   │   ├── ProjectModal.jsx  # In-depth architectural case study modal
│   │   ├── RagPipelineVisualizer.jsx    # Interactive 7-stage hybrid RAG flow
│   │   ├── FinSaathiAgentVisualizer.jsx # 5-agent state collaboration diagram
│   │   ├── RepresentAiFlowVisualizer.jsx# Dispute investigation triage flow
│   │   ├── FineTuningVisualizer.jsx     # LoRA Qwen2.5 tool-calling benchmark
│   │   ├── Skills.jsx        # Categorized proficiencies & technical depths
│   │   ├── Achievements.jsx  # Buildathons, hackathons & empirical milestones
│   │   ├── Contact.jsx       # Dark contrast section with 1-click email copy
│   │   ├── Footer.jsx        # Minimal footer & scroll-to-top
│   │   └── Icons.jsx         # Custom SVG brand icons (GitHub, LinkedIn)
│   ├── data/
│   │   ├── projects.js       # Complete project metadata & architecture specs
│   │   ├── skills.js         # Technical competencies & proficiencies
│   │   └── achievements.js   # Verifiable milestones & competition builds
│   ├── App.jsx               # Main application wrapper
│   ├── index.css             # Tailwind v4 theme & typography
│   └── main.jsx              # React entry point
├── package.json
└── vite.config.js
```

---

## 🛡️ Adherence to Personalization Rules
- **No Education section:** Zero mention of college name, degree, academic year, CGPA, class XII marks, or academic percentages.
- **Natural, authentic developer voice:** No corporate buzzwords or inflated claims. Focused entirely on engineering decisions, deterministic schemas, retrieval mechanics, and benchmarked metrics.
