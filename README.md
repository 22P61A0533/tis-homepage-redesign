# Tulas International School — Homepage Redesign

A modern, responsive homepage redesign for **Tulas International School (TIS)**, created as a Frontend Developer recruitment assignment.

The project focuses on creating a polished, high-converting school website experience with smooth animations, responsive layouts, interactive UI elements, and a light/dark theme.

## Live Demo

Live deployment: **Add your Vercel URL here**

## GitHub Repository

Repository: **Add your GitHub repository URL here**

---

## Features

* Responsive design for mobile, tablet, and desktop
* Light and dark theme switcher
* Custom animated cursor
* Scroll progress indicator from 0% to 100%
* Active navigation section detection
* Animated mobile navigation menu
* Scroll-triggered section reveal animations
* Animated statistics counters
* Interactive cards and hover effects
* Animated hero section
* Smooth image zoom and hover interactions
* Different imagery for light and dark themes
* Admissions-focused call-to-action section
* Back-to-top interaction
* Semantic HTML structure
* Accessible navigation labels and image alt text

---

## Tech Stack

* React.js
* Vite
* Tailwind CSS
* Framer Motion
* Lucide React
* JavaScript (ES6+)

---

## Project Structure

```text
tis-homepage-redesign/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── animation/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   ├── hooks/
│   ├── data/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## Main Sections

### Hero

Introduces Tulas International School with an animated campus image, entrance animations, primary call-to-action, and scroll indicator.

### About TIS

Highlights the school's approach to holistic education with a responsive image and animated content reveal.

### TIS at a Glance

Displays key campus statistics with animated number counters:

* 22+ acres of campus
* 16+ Olympic sports
* 24×7 medical assistance
* 6:1 student-teacher ratio

### Academics

Presents the academic experience through animated content cards and responsive layouts.

### Sports & Activities

Highlights the importance of sports and extracurricular activities with interactive sport cards.

### Campus Life

Showcases campus life using an image section and animated feature cards.

### Admissions

Provides a strong conversion-focused call-to-action encouraging visitors to explore the admissions process.

---

## Animation & Interaction

The project uses **Framer Motion** for:

* Entrance animations
* Scroll-triggered reveals
* Animated counters
* Hover interactions
* Button interactions
* Image zoom effects
* Mobile menu transitions
* Theme icon transitions

The project also includes a custom cursor and scroll progress indicator.

---

## Theme System

The website supports both:

* Light mode
* Dark mode

The selected theme is stored in `localStorage`, so the user's preference is preserved when the page is revisited.

Different images are displayed in light and dark mode for major visual sections.

---

## Responsive Design

The interface was designed and tested for:

* Mobile — 375px
* Tablet — 768px
* Desktop — 1280px

The layout adapts navigation, typography, spacing, grids, images, and interactive elements across screen sizes.

---

## Getting Started

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Enter the project directory

```bash
cd tis-homepage-redesign
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local Vite development URL shown in the terminal.

---

## Available Scripts

### Development

```bash
npm run dev
```

### Lint

```bash
npm run lint
```

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## Validation

The project currently passes:

```bash
npm run lint
```

with no ESLint errors or warnings.

The production build also completes successfully:

```bash
npm run build
```

---

## Design Goals

The redesign was created with the following goals:

* Create a premium first impression
* Improve visual hierarchy
* Make navigation easier
* Increase engagement through subtle motion
* Highlight important school information
* Create stronger calls to action
* Maintain usability across screen sizes
* Keep animations smooth and purposeful

---

## Credits

School information and visual inspiration are based on the official Tulas International School website.

Official website: https://tis.edu.in/

This project was created as a recruitment assignment and is not an official Tulas International School website.
