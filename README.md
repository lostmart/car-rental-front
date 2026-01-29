# Car Rental Platform

A modern, responsive car rental web application built with React, TypeScript, and Vite. Features an elegant UI with smooth animations, interactive carousels, and reusable component architecture.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Components](#components)
- [Contributing](#contributing)

## Features

- **Dynamic Image Carousel**: Interactive Swiper-powered carousel showcasing rental cars and promotions
- **Responsive Design**: Mobile-first approach with seamless adaptation across all device sizes
- **Modern UI Components**: Reusable card components with smooth hover effects and animations
- **Client-Side Routing**: Fast navigation powered by React Router DOM
- **Type-Safe**: Full TypeScript implementation for enhanced developer experience
- **CSS Modules**: Component-scoped styling preventing conflicts and ensuring maintainability
- **Icon Integration**: Comprehensive icon library with react-icons

## Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM v6
- **Carousel**: Swiper
- **Icons**: React Icons
- **Styling**: CSS Modules + Global CSS
- **Linting**: ESLint with TypeScript rules

## Getting Started

### Prerequisites

- Node.js (LTS version 18.x or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd rental-car
```

2. Install dependencies:
```bash
npm install
```

### Running the Development Server

Start the development server with hot-module reloading:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Create an optimized production build:

```bash
npm run build
```

The bundled application will be output to the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

Note: Zero warnings are enforced (`--max-warnings 0`).

## Project Structure

```
rental-car/
├── public/                    # Static assets
├── src/
│   ├── assets/               # Images and static data
│   │   └── carouselImages.ts
│   ├── components/
│   │   ├── ui-parts/         # Navigation components
│   │   │   ├── NavBar.tsx
│   │   │   ├── TopNav.tsx
│   │   │   └── SocialButtons.tsx
│   │   ├── ui-units/         # Small reusable components
│   │   │   ├── ButtonComp.tsx
│   │   │   └── CardComp.tsx
│   │   ├── CarrouselComp.tsx
│   │   ├── FooterComponent.tsx
│   │   └── List.tsx
│   ├── css/                  # Global CSS files
│   ├── interfaces/           # TypeScript type definitions
│   │   ├── Car.ts
│   │   └── UrlLink.ts
│   ├── layouts/              # Page layouts
│   │   └── Root.tsx          # Main layout wrapper
│   ├── pages/                # Application pages
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── CardDemoPage.tsx
│   │   └── ErrorPage.tsx
│   ├── main.tsx              # Application entry point
│   └── index.css             # Global styles
├── .eslintrc.cjs             # ESLint configuration
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite configuration
└── package.json              # Dependencies and scripts
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production (TypeScript + Vite) |
| `npm run lint` | Run ESLint with TypeScript rules |
| `npm run preview` | Preview production build locally |

## Components

### CardComp

A flexible, responsive card component with hover effects and animations.

**Location**: `src/components/ui-units/CardComp.tsx`

**Features**:
- Optional image with zoom effect on hover
- Title and description support
- Custom children for flexible content
- Smooth lift animation (translateY)
- Enhanced shadow effects
- Fully responsive with mobile optimization
- Click handler support

**Usage**:
```tsx
import CardComp from "./components/ui-units/CardComp"

// Basic card
<CardComp
  title="Economy Car"
  description="Perfect for city driving"
  onClick={() => console.log("Clicked")}
/>

// Card with image
<CardComp
  title="Luxury Sedan"
  description="Premium comfort"
  image="/path/to/image.jpg"
  imageAlt="Luxury car"
/>

// Card with custom content
<CardComp title="Special Offer">
  <div>Custom content here</div>
  <button>Book Now</button>
</CardComp>
```

**Props**:
- `title?: string` - Card title
- `description?: string` - Card description text
- `image?: string` - Image URL
- `imageAlt?: string` - Image alt text (default: "Card image")
- `children?: ReactNode` - Custom content
- `onClick?: () => void` - Click handler
- `className?: string` - Additional CSS classes

### CarrouselComp

Interactive image carousel component powered by Swiper.

**Location**: `src/components/CarrouselComp.tsx`

### Navigation Components

- **NavBar**: Main navigation with desktop and mobile views
- **TopNav**: Top navigation bar
- **SocialButtons**: Social media icon links

## Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | HomePage | Landing page with carousel |
| `/about` | AboutPage | About information |
| `/card-demo` | CardDemoPage | Card component showcase |

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style

- Follow existing TypeScript and React patterns
- Use CSS Modules for component-scoped styling
- Maintain component organization (ui-parts for navigation, ui-units for small components)
- Ensure zero ESLint warnings before committing
- Write descriptive commit messages

## License

This project is private and proprietary.

---

Built with React + TypeScript + Vite
