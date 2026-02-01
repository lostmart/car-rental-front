# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build and Development Commands

- `npm run dev` - Start development server with Vite
- `npm run build` - TypeScript compile then Vite build
- `npm run lint` - ESLint with TypeScript rules (zero warnings allowed)
- `npm run test` - Run Vitest test suite
- `npm run test:coverage` - Run tests with coverage reports
- `npm run preview` - Preview production build

## Tech Stack

- React 18 + TypeScript + Vite 6
- react-router-dom for client-side routing
- Chakra UI for component library and design system
- Swiper for carousel/slider components
- react-icons for icon components
- Framer Motion for animations and transitions
- Vitest for unit and integration testing
- CSS Modules for component-scoped styling (`.module.css`)

## Architecture

**Routing**: Configured in [main.tsx](src/main.tsx) using react-router-dom's `createBrowserRouter`. All routes use the Root layout with page components as children.

**Layout**: [Root.tsx](src/layouts/Root.tsx) provides the shared layout (TopNav, NavBar, Footer) with `<Outlet />` for page content. Manages mobile menu state.

**Component Organization**:
- `src/components/ui-parts/` - Navigation elements (NavBar, TopNav, SocialButtons)
- `src/components/ui-units/` - Small reusable components (ButtonComp)
- `src/components/` - Feature components (CarrouselComp, FooterComponent, List)

**Interfaces**: TypeScript types in `src/interfaces/` - `Car` for car data, `UrlLink` for navigation links with icons.

**Styling**: Chakra UI as primary styling solution, CSS Modules only when Chakra is insufficient.

**Styling Hierarchy:**
1. **First choice:** Use Chakra UI components and style props (`Box`, `Flex`, `Stack`, `Button`, etc.)
2. **Responsive design:** Use Chakra responsive syntax: `fontSize={{ base: "sm", md: "md", lg: "lg" }}`
3. **Theme integration:** Use `useColorMode()`, `useTheme()`, and theme tokens (`colors.brand.500`)
4. **Custom styling:** CSS Modules only when Chakra styling is insufficient
5. **Avoid:** Global CSS classes, recreating Chakra components with custom CSS

## Code Style

- Use strict TypeScript with interfaces in `src/interfaces/`
- Export interfaces as `export default interface Name`
- Component props should be typed with clear, descriptive interfaces
- Use `ReactNode` for children props
- Default props should use TypeScript default parameters, not defaultProps

**Styling:**
- **Prefer Chakra UI:** Use Chakra components and style props first (`<Box px={4} bg="brand.500">`)
- **Responsive design:** Use Chakra syntax: `<Text fontSize={{ base: "sm", md: "lg" }}>`
- **CSS Modules:** Only when Chakra is insufficient: `import styles from "./ComponentName.module.css"`
- Global styles go in `src/css/` or `src/index.css`
- Class names in JSX: `className={styles.container}`
- Combine styles dynamically: `const cardClasses = \`${styles.card} ${className}\`.trim()`

**Error Handling:**
- Use error boundaries for route-level errors (ErrorPage component exists)
- Implement proper TypeScript types to catch errors at compile time
- Use try-catch for async operations (API calls, data fetching)
- Handle API failures gracefully with user-friendly error messages
- Validate user inputs before API submission

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

**React Best Practices:**
- Use functional components with hooks
- Implement proper key props for lists (stable, unique identifiers)
- Use Link component from react-router-dom for navigation
- Prefer controlled components with proper state management
- Use children prop for composition patterns
- Clean up effects: remove event listeners, cancel subscriptions
- Memoize expensive computations with `useMemo`, `useCallback`, `React.memo`
- Use `useTransition` for non-urgent updates (React 18)
- Use `useDeferredValue` for debouncing derived state (React 18)
- Implement lazy loading with `React.lazy()` and `Suspense` for code splitting

## Testing & Quality Assurance

- **Vitest** configured for unit and integration testing with jsdom environment
- **GitHub Actions CI/CD** pipeline runs on every push to main/master and PRs:
  - Lint job: Runs ESLint (zero warnings policy)
  - Build job: TypeScript compilation and Vite build
  - Unit tests job: Runs Vitest with coverage reports
- **Coverage reports** uploaded as artifacts (30-day retention)
- All CI jobs must pass before merge - failed checks block deployment

## Important Notes

- ESLint is strict with zero warnings policy - `npm run lint` before committing
- TypeScript strict mode enabled - all type errors must be resolved
- Vite handles most build optimizations automatically
- CSS Modules for component-scoped styling - no global class pollution
- Chakra UI provides WCAG AA accessibility baseline

## Development Workflow

1. Use `npm run dev` for development with hot reload
2. Write tests as you code - `npm run test` to run test suite
3. Always run `npm run lint` before committing - zero warnings policy
4. Run `npm run test:coverage` to check test coverage
5. Build process includes TypeScript compilation - fix type errors first
6. CSS changes should be component-scoped using CSS Modules (or use Chakra UI styling)
7. **Pre-commit checklist:**
   - ✅ All tests pass (`npm run test`)
   - ✅ No lint warnings (`npm run lint`)
   - ✅ Production build succeeds (`npm run build`)
   - ✅ TypeScript has no errors
8. **CI/CD:** GitHub Actions automatically runs lint, tests, and build on push
   - Failed CI checks block deployment
   - Coverage reports available in workflow artifacts


