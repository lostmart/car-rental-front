### FRONTEND

#### Core Framework & Tooling

- React 18 & TypeScript: The architecture utilizes React 18 for concurrent rendering and TypeScript for strict type safety across all car models, tour objects, and booking states.
- Vite 6: Replaces traditional Webpack for "instant" dev starts and highly optimized production builds via Rollup, ensuring the luxury site feels fast and responsive.
- Vitest: A native-Vite test runner used for Unit and Integration testing (TDD approach), ensuring the pricing logic for detours is verified before deployment.

#### UI/UX Strategy (The "Luxury" Layer)

- Chakra UI: A modular component library used to build a consistent, accessible design system. It allows for rapid styling of complex layouts like the "Paris Pick-up" address inputs.
- Framer Motion: Integrated for high-end micro-interactions (e.g., smooth transitions when a user selects a car or opens a detour menu), elevating the site from a "form" to an "experience."
- Swiper.js: Used to create the Car Gallery. It supports touch-friendly, hardware-accelerated car carousels, allowing users to swipe through high-resolution images of the classic fleet.

#### AI Context Integration (MCP)

- Model Context Protocol (MCP) SDK: A unique addition to your stack. This enables the frontend to act as a "client" that can securely share real-time booking context (like car availability or tour details) with an AI agent.

- Use Case: A "Concierge AI" could help a user decide which classic car best fits their planned detour based on the data shared via this protocol.

#### State & Routing

- React Router DOM v6: Manages the multi-step booking flow (Select Car → Choose Tour → Add Detours → Checkout) with a clean, declarative URL structure.

- Emotion (React/Styled): Powers the underlying styling engine for Chakra UI, allowing for high-performance CSS-in-JS that prevents "style flash" during navigation.

### Implementation Checklist

- Strict Linting: ESLint is configured with typescript-eslint to block any "any" types or unsafe code that could break the booking flow.
- Mocking for Reliability: Use jsdom within Vitest to simulate the browser environment for testing the "Book Now" button logic without needing a real browser.
- Performance Budgets: Vite’s build tool must be configured to code-split the "Tour Gallery" and "Booking Form" to keep initial load times under 1.5s.

## Deployment & Quality Assurance (CI/CD)

- The GitHub Actions Pipeline:
  - Every time code is pushed to the repository (Main/Master), the system triggers an automated workflow to validate the build
  - Job 1: Linting (Code Quality): \* Action: Runs eslint.
  - Job 2: Unit Testing (Logic Validation): \* Action: Runs vitest with coverage reports.
  - Job 3: Production Build: \* Action: Runs vite build.

### Netlify Deployment (The Hosting Layer)

Once the GitHub Actions pass, Netlify handles the "Continuous Deployment" aspect:

- Atomic Deploys: Netlify takes the dist/ folder created by Vite and deploys it. The site is never "down" during an update; it simply swaps to the new version instantly.

- Preview Deployments: For every Pull Request, Netlify generates a unique temporary URL. This allows stakeholders to "test drive" the new classic car booking features in a live environment before merging to the main site.

- SSL & Global CDN: Ensures the luxury site is secure (HTTPS) and loads instantly for customers, whether they are booking from Paris, London, or New York.

## Strategic Benefit

This setup ensures Zero Downtime. If a developer introduces a bug that breaks the booking form, the GitHub Action will fail, and Netlify will refuse to deploy the broken code, protecting the agency's revenue.
