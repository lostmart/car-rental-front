# AGENTS.md

This file provides guidance to agentic coding agents working with this rental car React application.

## Build and Development Commands

### Core Commands
- `npm run dev` - Start development server with Vite
- `npm run build` - TypeScript compile then Vite build
- `npm run lint` - ESLint with TypeScript rules (zero warnings allowed)
- `npm run preview` - Preview production build

### Testing Commands
⚠️ **No testing framework currently configured**
- No test files exist in the codebase
- Consider adding Vitest or Jest for testing setup
- When implementing tests, configure test runner and add test files alongside components

## Tech Stack and Architecture

**Core Technologies**: React 18 + TypeScript + Vite
**Routing**: react-router-dom with createBrowserRouter
**Styling**: CSS Modules for component-scoped styling (`.module.css`)
**UI Libraries**: Swiper (carousels), react-icons (icons)

**Project Structure**:
- `src/layouts/` - Layout components (Root.tsx with shared navigation)
- `src/pages/` - Route-level page components
- `src/components/ui-parts/` - Navigation and structural components
- `src/components/ui-units/` - Small reusable components (buttons, cards)
- `src/interfaces/` - TypeScript type definitions
- `src/css/` - Global CSS files

## Code Style Guidelines

### TypeScript and Types
- Use strict TypeScript with interfaces in `src/interfaces/`
- Export interfaces as `export default interface Name`
- Component props should be typed with clear, descriptive interfaces
- Use `ReactNode` for children props
- Default props should use TypeScript default parameters, not defaultProps

### Component Conventions
- Use function components with React hooks
- Export components as `export default function ComponentName()`
- Component names should be PascalCase
- Props interface should be named `ComponentNameProps` or `ComponentProps`
- Destructure props in function parameters for cleaner code

### Import Organization
```typescript
// 1. React and core libraries
import React, { useState } from "react"
import { Link, Outlet } from "react-router-dom"

// 2. Third-party libraries
import { FaFacebookF } from "react-icons/fa"

// 3. Internal imports (use relative paths)
import UrlLink from "../interfaces/UrlLink"
import ButtonComp from "../components/ui-units/ButtonComp"
import styles from "./ComponentName.module.css"
```

### CSS and Styling
- Use CSS Modules for component-scoped styles: `import styles from "./ComponentName.module.css"`
- Global styles go in `src/css/` or `src/index.css`
- Class names in JSX: `className={styles.container}`
- Combine styles dynamically: `const cardClasses = \`${styles.card} ${className}\`.trim()`

### Error Handling
- Use error boundaries for route-level error handling (ErrorPage component exists)
- Implement proper TypeScript types to catch errors at compile time
- No try-catch patterns currently established - add as needed for async operations

### Naming Conventions
- Files: PascalCase for components (ComponentName.tsx), camelCase for utilities
- Variables: camelCase
- Constants: UPPER_SNAKE_CASE
- CSS classes: kebab-case in CSS files, referenced via styles object
- Interfaces: PascalCase, exported as default

### Code Quality Standards
- ESLint configuration enforces zero warnings policy
- Use TypeScript strict mode features
- No unused variables or parameters allowed
- Prefer explicit return types for complex functions
- Use React.StrictMode in development

### React Best Practices
- Use functional components with hooks
- Implement proper key props for lists
- Use Link component from react-router-dom for navigation
- Prefer controlled components with proper state management
- Use children prop for composition patterns

## Development Workflow

1. Always run `npm run lint` before committing - zero warnings policy
2. Use `npm run dev` for development with hot reload
3. Build process includes TypeScript compilation - fix type errors first
4. No automated tests currently - manual testing required
5. CSS changes should be component-scoped using CSS Modules

## Adding New Features

When adding new components:
1. Create component in appropriate directory (ui-units for small components, pages for routes)
2. Create corresponding `.module.css` file for styling
3. Define TypeScript interface for props
4. Export as default with proper naming conventions
5. Import and use in parent components following import organization rules

When adding new routes:
1. Create page component in `src/pages/`
2. Add route configuration in `src/main.tsx`
3. Update navigation in `src/layouts/Root.tsx` if needed

## Important Notes

- This project has no testing framework - consider adding Vitest for modern React testing
- No build optimization configured - Vite handles most optimizations automatically
- ESLint is strict with zero warnings policy
- TypeScript strict mode enabled - all type errors must be resolved
- CSS Modules for styling - no global class pollution