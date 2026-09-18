# ProjectOne Website Replica

An exact, high-fidelity replica of the [ProjectOne](https://www.projectone.website/) landing page, built with modern semantic HTML5, Tailwind CSS, custom animations, official typography, and interactive components.

## 🚀 Key Features

- **Pixel-Perfect Aesthetic & Color Tokens**:
  - Dark Obsidian theme: `#131311`
  - Deep card surfaces: `#1c1c1a`, `#232320`, `#2a2a27`
  - Electric Lime highlight: `#c6fd50`
- **Official Typography**:
  - Headings & Body: **Satoshi** (via Fontshare)
  - Handwritten Accents: **Sedgwick Ave** (via Google Fonts)
- **Interactive Components**:
  - Infinite running tickers (50-task launch checklist, guarantee ribbon, client testimonials)
  - Interactive portfolio showcase with project switcher tabs and live site links
  - Expandable 13-question FAQ accordion with smooth animations
  - Pain points speech bubbles grid
  - 4-way service comparison matrix (DIY vs Freelancer vs Agency vs ProjectOne)
  - 6-step sprint process tracker
  - Responsive floating navbar with mobile slide-down drawer
  - Working contact/booking form with validation and success toast

## 📂 Project Structure

```
projectone-replica/
├── index.html            # Complete landing page markup
├── assets/
│   ├── css/
│   │   └── style.css     # Custom animations, keyframes, typography & scrollbar
│   └── js/
│       └── app.js        # Interactive logic (FAQ accordion, tabs, form, menu)
└── README.md             # Documentation
```

## 💻 How to Run & View

### Option 1: Direct in Browser
Simply double-click `index.html` or open it with your browser of choice:
```bash
open index.html
```

### Option 2: Local HTTP Server (Python)
```bash
cd projectone-replica
python3 -m http.server 3000
```
Then visit [http://localhost:3000](http://localhost:3000).
