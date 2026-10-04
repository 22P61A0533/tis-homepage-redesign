# TIS Homepage Redesign

A modern, animated, responsive homepage redesign for **Tulas International School (TIS)**, built as a Frontend Developer recruitment assignment.

The goal was to preserve the core identity and messaging of TIS while creating a more polished, interactive, and high-converting web experience.

## Live Demo

**Live Website:**
https://tis-homepage-redesign-chi.vercel.app/

**GitHub Repository:**
https://github.com/22P61A0533/tis-homepage-redesign

---

## Overview

This project redesigns the Tulas International School homepage with a modern visual system, smooth animations, responsive layouts, and interactive UI elements.

The experience is designed to communicate:

* Academic excellence
* Sports and extracurricular activities
* Campus life
* Student development
* Admissions

The implementation focuses on clean component architecture, reusable animation patterns, responsive design, accessibility, and maintainable React code.

---

## Features

### Core Features

* Responsive homepage for desktop, tablet, and mobile
* Modern hero section with animated entrance effects
* Light and dark theme support
* Theme-specific imagery
* Smooth scrolling navigation
* Active navigation section detection
* Mobile navigation menu
* Scroll-triggered reveal animations
* Animated statistics counters
* Interactive hover effects
* Image zoom interactions
* Admissions call-to-action section
* Responsive cards and layouts
* Semantic HTML structure
* Descriptive image alt text

### Standout Interactive Features

* Custom cursor for desktop
* Scroll progress indicator
* Light/dark theme switcher
* Scroll-triggered animations
* Animated statistics
* Interactive navigation states
* Motion-based hover and tap interactions

---

## Tech Stack

* **React.js**
* **Vite**
* **Tailwind CSS**
* **Framer Motion**
* **Lucide React**
* **JavaScript (ES6+)**

---

## Project Structure

```text
tis-homepage-redesign/
│
├── public/
│
├── src/
│   ├── assets/
│   │   ├── hero-light.jpg
│   │   ├── hero-dark.jpg
│   │   ├── about-light.jpg
│   │   ├── about-dark.jpg
│   │   ├── academics-light.jpg
│   │   ├── academics-dark.jpg
│   │   ├── sports-light.jpg
│   │   ├── sports-dark.jpg
│   │   ├── campus-light.jpg
│   │   ├── campus-dark.jpg
│   │   ├── admissions-light.jpg
│   │   ├── admissions-dark.jpg
│   │   └── tis-campus.png
│   │
│   ├── components/
│   │   ├── animation/
│   │   │   └── Reveal.jsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Stats.jsx
│   │   │   ├── Academics.jsx
│   │   │   ├── Sports.jsx
│   │   │   ├── CampusLife.jsx
│   │   │   └── Admissions.jsx
│   │   │
│   │   └── ui/
│   │       ├── CustomCursor.jsx
│   │       └── ScrollProgress.jsx
│   │
│   ├── hooks/
│   │   └── useTheme.js
│   │
│   ├── data/
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## Main Sections

### 1. Hero

The hero section introduces Tulas International School with:

* Large headline
* Supporting description
* Admissions CTA
* Discover TIS CTA
* Animated background imagery
* Theme-specific hero images
* Animated scroll indicator

### 2. About TIS

Introduces the school and its approach to holistic education using an image-and-content layout.

### 3. TIS at a Glance

Highlights key campus information with animated counters:

* 22+ acres of campus
* 16+ Olympic sports
* 24×7 medical assistance
* 6:1 student-teacher ratio

### 4. Academics

Highlights academic excellence and future-ready learning through a responsive card layout.

### 5. Sports & Activities

Showcases the importance of sports and extracurricular development with interactive sport cards.

### 6. Campus Life

Presents the residential and campus experience with an image-driven layout and animated feature cards.

### 7. Admissions

Provides a strong conversion-focused section with:

* Admissions messaging
* Application journey
* CTA
* Official TIS website link

---

## Animation & Interaction

Animations are implemented using **Framer Motion**.

Examples include:

* Hero entrance animations
* Scroll-triggered section reveals
* Animated statistics
* Image zoom effects
* Card hover interactions
* Button hover and tap animations
* Mobile menu transitions
* Theme toggle animation
* Custom cursor interaction
* Scroll progress animation

Reusable animation behavior is implemented through the `Reveal` component.

---

## Theme System

The website supports both:

* Light mode
* Dark mode

The theme state is handled using the custom `useTheme` hook.

The selected theme is stored in `localStorage`, allowing the user's preference to persist between page visits.

Different images are displayed for light and dark themes across the main sections to maintain visual contrast and consistency.

---

## Responsive Design

The interface was designed and tested for:

* **Mobile:** 375px
* **Tablet:** 768px
* **Desktop:** 1280px

Responsive layouts use Tailwind CSS breakpoints and adapt navigation, typography, grids, spacing, and content presentation across screen sizes.

---

## Getting Started

### Prerequisites

Make sure you have:

* Node.js
* npm

installed on your system.

### Installation

Clone the repository:

```bash
git clone https://github.com/22P61A0533/tis-homepage-redesign.git
```

Navigate into the project:

```bash
cd tis-homepage-redesign
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at the local development URL shown in the terminal.

---

## Available Scripts

### Development

```bash
npm run dev
```

Starts the Vite development server.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Lint

```bash
npm run lint
```

Runs ESLint to check the project for code-quality issues.

### Preview

```bash
npm run preview
```

Previews the production build locally.

---

## Validation

Before deployment, the project was checked for:

* Responsive layout behavior
* Mobile navigation
* Light/dark theme switching
* Animation behavior
* Production build success
* ESLint issues
* Image rendering
* Navigation interactions

Production build:

```text
npm run build
✓ built successfully
```

Lint:

```text
npm run lint
✓ passed successfully
```

---

## Design Goals

The redesign focuses on:

* Clean visual hierarchy
* Strong typography
* Modern spacing and layouts
* Smooth interactions
* Clear calls to action
* Responsive behavior
* Accessibility-conscious markup
* Reusable React components
* Maintainable code structure
* Performance-conscious animations

---

## Credits

Content and brand references were based on the official Tulas International School website:

https://tis.edu.in/

This project is a **frontend redesign/recruitment assignment** and is not the official Tulas International School website.

---

## Author

**Brahmani Billa**

Frontend Developer Candidate

GitHub:
https://github.com/22P61A0533

Project Repository:
https://github.com/22P61A0533/tis-homepage-redesign
