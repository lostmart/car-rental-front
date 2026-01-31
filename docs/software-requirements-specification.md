# Software Requirements Specification (SRS): Luxury Classic Car Tour Platform

## 1. Introduction

Purpose: To define the functional and technical specifications for a high-end web-based booking engine tailored for a luxury classic car tour agency in Paris.

Scope: The system will manage fleet selection, real-time booking logistics (pick-up locations), tour customization, and dynamic pricing for detours.

Definitions: \* The Pentad: The architectural framework used for this specification.

Base Tour: One of the 6 pre-defined curated routes.

Detour: A custom add-on route modification with an associated surcharge.

## 2. System Description

High-Level Overview: A premium, mobile-responsive web application that allows clients to curate a bespoke Parisian experience by pairing specific classic car models with luxury tour routes.

User Characteristics: High-net-worth individuals, tourists, and corporate clients seeking a seamless, "white-glove" digital booking experience.

Dependencies: Integration with a Map API (e.g., Google Maps) for detour distance calculation and location validation within Paris.

## 3. Functional Requirements

Location Flexibility: The system shall allow users to input any valid address within the Paris metropolitan area for pick-up and drop-off.

Fleet Selection: Users shall be able to browse and select from a curated list of classic car models.

Tour Selection & Customization:

The system shall provide a selection of 6 standard luxury tours.

The system shall allow users to append "Extra Detours" to their booking.

Dynamic Pricing: The system shall automatically calculate and display the "Extra Charge" for detours in the final price breakdown before checkout.

## 4. Non-Functional Requirements

Performance: The booking flow and car selection gallery must load in under 1.8 seconds to maintain a premium user experience.

Security: All transactions must be processed via PCI-DSS compliant gateways; user data must be encrypted using AES-256.

Usability: The UI must reflect a "luxury" aesthetic, utilizing high-resolution imagery and a minimalist navigation flow.

## 5. External Interface Requirements

User Interface: A bespoke, responsive front-end (React or Vue.js) optimized for both desktop and mobile safari (common for high-end travelers).

Software Interfaces: \* Stripe/Adyen API: For secure luxury payment processing.

Fleet Management System: API sync to ensure car availability in real-time.

Communication Protocols: HTTPS for all data transmission; Webhooks for instant booking confirmation notifications (SMS/Email).

## 6. Technical Requirements

### BACKEND

- PHP 8.2
  - Readonly Classes: Perfect for your Car, Tour, and User entities to ensure data remains immutable once loaded from the database.
  - Typed Properties: Prevents type-mismatch bugs in your Booking logic (e.g., ensuring total_price is always a float).
  - Enums: Ideal for the status fields in your Booking and Car classes (e.g., Status::Confirmed, Status::Pending).
- Slim Framework 4.12
  - Role: It handles the HTTP Request/Response cycle. It maps a URL (like /book-tour) to a specific function in your code.
  - Performance: Extremely lightweight. It only loads what you tell it to, making it much faster than Symfony or Laravel for pure API work.
- Slim PSR-7
  - Role: PSR-7 is the PHP industry standard for HTTP messages.
  - It returns a new instance, preventing side effects in the code.
- PHP-DI 7.0 (The Brain)
  - Role: It manages how your classes are created
  - It allows you to inject dependencies into your classes
- PHP Dotenv
  - Role: Loads your .env file into PHP’s environment variables.
  - It keeps your database passwords and API keys out of GitHub repository.

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
