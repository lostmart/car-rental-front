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

**Styling**: Global CSS in `src/css/` and `src/index.css`. Component-scoped styles use CSS Modules (e.g., `CarrouselComp.module.css`).
