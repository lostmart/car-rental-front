# Rental Car Application

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build and Development Commands

- `npm run dev` - Start development server with Vite
- `npm run build` - TypeScript compile then Vite build
- `npm run lint` - ESLint with TypeScript rules (zero warnings allowed)
- `npm run preview` - Preview production build

## Tech Stack

- React 18 + TypeScript + Vite
- react-router-dom for client-side routing
- Swiper for carousel/slider components
- react-icons for icon components
- CSS Modules for component-scoped styling (`.module.css`)

## Architecture

**Routing**: Configured in [main.tsx](src/main.tsx) using react-router-dom's `createBrowserRouter`. All routes use the Root layout with page components as children.

**Layout**: [Root.tsx](src/layouts/Root.tsx) provides the shared layout (TopNav, NavBar, Footer) with `<Outlet />` for page content. Manages mobile menu state.

**Component Organization**:
- `src/components/ui-parts/` - Navigation elements (NavBar, TopNav, SocialButtons)
- `src/components/ui-units/` - Small reusable components (ButtonComp)
- `src/components/` - Feature components (CarrouselComp, FooterComponent, List)

**Interfaces**: TypeScript types in `src/interfaces/` - `Car` for car data, `UrlLink` for navigation links with icons.

**Styling**: Chakra UI with CSS Modules for component-scoped styling.

## Code Style

- Use strict TypeScript with interfaces in `src/interfaces/`
- Export interfaces as `export default interface Name`
- Component props should be typed with clear, descriptive interfaces
- Use `ReactNode` for children props
- Default props should use TypeScript default parameters, not defaultProps

- Use CSS Modules for component-scoped styles: `import styles from "./ComponentName.module.css"`
- Global styles go in `src/css/` or `src/index.css`
- Class names in JSX: `className={styles.container}`
- Combine styles dynamically: `const cardClasses = \`${styles.card} ${className}\`.trim()`

- Use error boundaries for route-level error handling (ErrorPage component exists)
- Implement proper TypeScript types to catch errors at compile time
- No try-catch patterns currently established - add as needed for async operations

- Use function components with React hooks
- Export components as `export default function ComponentName()`
- Component names should be PascalCase
- Props interface should be named `ComponentNameProps` or `ComponentProps`
- Destructure props in function parameters for cleaner code

- Always run `npm run lint` before committing - zero warnings policy
- Use TypeScript `strict` mode - zero warnings policy
- No unused variables or parameters allowed
- Prefer explicit return types for complex functions
- Use React.StrictMode in development

- Use functional components with hooks
- Implement proper key props for lists
- Use Link component from react-router-dom for navigation
- Prefer controlled components with proper state management
- Use children prop for composition patterns

## Important Notes

- This project has no testing framework - consider adding Vitest for modern React testing
- No build optimization configured - Vite handles most optimizations automatically
- ESLint is strict with zero warnings policy
- TypeScript strict mode enabled - all type errors must be resolved
- CSS Modules for styling - no global class pollution

## Development Workflow

1. Always run `npm run lint` before committing - zero warnings policy
2. Use `npm run dev` for development with hot reload
3. Build process includes TypeScript compilation - fix type errors first
4. No automated tests currently - manual testing required
5. CSS changes should be component-scoped using CSS Modules