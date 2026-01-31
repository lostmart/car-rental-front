# Classic Car Tour - SRS-Aligned Implementation Plan

## Project Overview

Build a fully functional luxury classic car booking platform for Paris tours, prioritizing core business requirements from the Software Requirements Specification (SRS) while maintaining portfolio-quality code and design.

**Timeline:** 21 days (3 weeks) + Optional Phase 2
**Target:** Production-ready booking platform meeting all SRS requirements
**Key Technologies:** React 18, TypeScript, Chakra UI, Framer Motion, React Router v6, Stripe API, Google Maps API, PHP REST API

**Philosophy:** **SRS compliance first, visual enhancements second.** All critical booking features must be functional before adding portfolio polish.

---

## PRIORITY MATRIX (SRS Requirement Criticality)

### 🔴 CRITICAL (Blockers - Cannot launch without)
| Requirement | SRS Reference | Timeline |
|------------|---------------|----------|
| Multi-step booking wizard | §6.4 | Week 1 Day 3-4 |
| Location input system (Paris validation) | §3.1 | Week 2 Day 5-6 |
| Detour customization with dynamic pricing | §3.3, §3.4 | Week 2 Day 7-9 |
| Payment integration (Stripe) | §5.1 | Week 3 Day 10-11 |
| Real-time fleet availability | §5.2 | Week 1 Day 1-2 |

### 🟠 HIGH (Revenue/UX impact)
- Tour selection interface (§3.2)
- Price breakdown component (§3.4)
- Booking confirmation flow
- Performance optimization < 1.8s (§4.1)

### 🟡 MEDIUM (Quality/Polish)
- Design system consistency
- Accessibility WCAG AA (§4.3)
- Mobile responsiveness (§5.1)
- Error handling and loading states

### 🟢 LOW (Nice-to-have - Phase 2)
- 3D car viewer (not in SRS)
- Advanced animations and particles
- Scroll effects beyond basic Framer Motion

---

## Week 1: Foundation & Booking Architecture

### Day 1-2: Design System + API Setup (✅ Design Done | 🔴 API Needed)

#### Task 1.1: Custom Chakra UI Theme ✅ COMPLETED
- [x] Create `src/theme/index.ts` with custom theme configuration
- [x] Define luxury color palette (gold, burgundy, cream, charcoal)
- [x] Configure typography scales with Playfair Display + Inter
- [x] Set spacing and sizing tokens
- [x] Export and apply theme in `main.tsx`

**Status:** ✅ Completed 2026-01-30

#### Task 1.2: API Service Layer (🔴 CRITICAL)

- [ ] Create `src/services/api.ts` with typed fetch wrapper
- [ ] Define TypeScript interfaces matching backend:
  - `CarResponse` - Car fleet data
  - `TourResponse` - Tour catalog data
  - `BookingRequest` - Booking submission payload
  - `DetourRequest` - Detour calculation request
  - `AvailabilityResponse` - Real-time car availability
- [ ] Implement error handling and retry logic
- [ ] Configure API base URL from environment variables
- [ ] Create development mock data in `src/mocks/` for offline testing
- [ ] Test API connectivity with backend endpoints

**Agent Instructions:**
```
Create src/services/api.ts with comprehensive fetch wrapper.
Add TypeScript interfaces matching PHP backend REST API structure.
Implement generic request<T>() function with error handling.
Add retry logic for transient failures (3 attempts with exponential backoff).
Create .env file with VITE_API_BASE_URL variable.
Generate mock data in src/mocks/ for development without backend dependency.
```

**SRS Alignment:** Required for §5.2 (Fleet Management System API), §6.1 (Backend Integration)

#### Task 1.3: Real-Time Fleet Availability System (🔴 CRITICAL)

- [ ] Implement `GET /api/v1/cars?date=YYYY-MM-DD&status=available` endpoint integration
- [ ] Create `useCarAvailability(carId, date)` custom hook
- [ ] Add availability status badges (Available, Reserved, Maintenance)
- [ ] Implement polling mechanism (refresh every 30s) or WebSocket connection
- [ ] Disable booking button when car unavailable
- [ ] Show alternative car suggestions when selected car unavailable
- [ ] Add date picker integration for availability checking

**Agent Instructions:**
```
Create src/hooks/useCarAvailability.ts custom hook.
Fetch availability data based on selected date.
Use SWR or React Query for caching and auto-refresh (30s interval).
Display availability status with color-coded badges (green/red/yellow).
Disable "Select Car" button with tooltip when unavailable.
Show "View Similar Cars" button with alternative recommendations.
Integrate with BookingContext to track selected date.
```

**SRS Alignment:** Core requirement for §5.2 (Fleet Management System API sync)

---

### Day 3-4: Multi-Step Booking Wizard (🔴 CRITICAL)

**Replaces:** Original "Hero Section & Landing Page" - those tasks moved to Phase 2

**Rationale:** SRS §6.4 requires multi-step flow (Car → Tour → Detours → Checkout) as the architectural foundation for all booking features.

#### Task 2.1: Booking Wizard Shell & Routing (🔴 CRITICAL)

- [ ] Create `src/pages/BookingWizard/` folder structure
- [ ] Create `BookingWizard.tsx` parent component
- [ ] Configure React Router v6 nested routes:
  - `/book/car` - Car selection step
  - `/book/tour` - Tour selection step
  - `/book/detours` - Detour customization step
  - `/book/checkout` - Payment and confirmation step
- [ ] Implement step navigation with URL synchronization
- [ ] Add route guards to prevent skipping steps (e.g., cannot access `/book/tour` without selecting car)
- [ ] Create `BookingLayout.tsx` component with progress stepper
- [ ] Ensure mobile responsiveness

**Agent Instructions:**
```
Create src/pages/BookingWizard/BookingWizard.tsx with React Router v6 nested routes.
Use <Outlet> for step components.
Implement route guards with useBooking() validation:
  - canAccessTourStep() checks selectedCar exists
  - canAccessDetoursStep() checks selectedTour exists
  - canAccessCheckoutStep() checks all required data present
Use Chakra UI Stepper component for progress visualization (4 steps).
Add "Back" and "Next" buttons with smooth Framer Motion transitions.
Make stepper responsive: show labels on desktop, dots only on mobile.
```

**SRS Alignment:** Core requirement for §6.4 (React Router DOM v6 multi-step flow)

#### Task 2.2: Booking State Management (🔴 CRITICAL)

- [ ] Choose state management solution (Context API recommended for simplicity)
- [ ] Create `src/contexts/BookingContext.tsx` with comprehensive state:
  ```typescript
  interface BookingState {
    selectedCar: Car | null
    selectedTour: Tour | null
    detours: Detour[]
    pickupLocation: Location | null
    dropoffLocation: Location | null
    bookingDate: Date | null
    customerInfo: CustomerInfo | null
    totalPrice: number
    basePrice: number
    detourCharges: number
  }
  ```
- [ ] Implement reducer pattern for state updates (actions: SELECT_CAR, SELECT_TOUR, ADD_DETOUR, REMOVE_DETOUR, etc.)
- [ ] Add sessionStorage persistence to prevent data loss on page refresh
- [ ] Create validation helpers: `canProceedToTour()`, `canProceedToDetours()`, `canProceedToCheckout()`
- [ ] Export `useBooking()` hook for easy consumption in step components

**Agent Instructions:**
```
Create src/contexts/BookingContext.tsx with React Context API + useReducer.
Define BookingState interface with all fields from SRS requirements.
Implement actions for each state mutation (SELECT_CAR, UPDATE_LOCATION, etc.).
Add useEffect to sync state to sessionStorage on every change.
On mount, restore state from sessionStorage if exists.
Create validation functions that return boolean + error message.
Export useBooking() hook that throws error if used outside provider.
```

**SRS Alignment:** Enables §3 (Fleet selection, Tour selection, Detour customization) data flow

#### Task 2.3: Car Selection Step Component (🔴 CRITICAL)

- [ ] Create `src/pages/BookingWizard/steps/CarSelectionStep.tsx`
- [ ] Implement car grid layout with Chakra UI SimpleGrid
- [ ] Create `CarCard.tsx` component with:
  - High-resolution car image (lazy loaded)
  - Car model name and year
  - Passenger capacity and features
  - Availability badge (using `useCarAvailability` hook)
  - "Select This Car" button
- [ ] Add date picker at top of step for availability filtering
- [ ] Implement car filtering by capacity, type, availability
- [ ] Add selected car highlight state
- [ ] Include "Next: Choose Tour" button (disabled until car selected)
- [ ] Add Framer Motion entrance animations (stagger cards)

**Agent Instructions:**
```
Create src/pages/BookingWizard/steps/CarSelectionStep.tsx.
Use useBooking() to access and update selectedCar state.
Display DatePicker at top: "When do you need the car?"
Fetch cars with useCarAvailability(selectedDate).
Render grid of CarCard components (3 columns on desktop, 1 on mobile).
Add hover effects: lift + shadow (Framer Motion whileHover).
Highlight selected card with gold border.
Disable "Next" button until car selected.
On "Next" click, navigate to /book/tour using useNavigate().
Add loading skeleton while fetching cars.
```

**SRS Alignment:** Implements §3.2 (Fleet Selection)

---

## Week 2: Location System + Detour Customization + Pricing

### Day 5-6: Location Input System (🔴 CRITICAL)

**New Critical Feature:** SRS §3.1 requires any valid Paris address for pick-up/drop-off

#### Task 3.1: Google Maps API Integration

- [ ] Create Google Cloud project and enable APIs:
  - Places API (for autocomplete)
  - Geocoding API (for address validation)
  - Maps JavaScript API (for map display)
  - Distance Matrix API (for detour distance calculation)
- [ ] Install dependencies: `@react-google-maps/api`
- [ ] Configure API key in `.env`: `VITE_GOOGLE_MAPS_API_KEY`
- [ ] Create `src/services/maps.ts` wrapper for Maps API calls
- [ ] Implement address validation for Paris metropolitan area (bounds checking)

**Agent Instructions:**
```
Install @react-google-maps/api library.
Create src/services/maps.ts with typed API wrappers:
  - geocodeAddress(address: string): Promise<Location>
  - validateParisAddress(lat: number, lng: number): boolean
  - calculateDistance(origin: Location, destination: Location): Promise<number>
Add environment variable for API key with security best practices.
Implement Paris bounds checking (48.8-49.0 lat, 2.2-2.5 lng approximately).
Add error handling for API quota limits and network failures.
```

**SRS Alignment:** Required for §3.1 (Location Flexibility - any Paris address)

#### Task 3.2: LocationPicker Component (🔴 CRITICAL)

- [ ] Create `src/components/LocationPicker/LocationPicker.tsx`
- [ ] Implement Google Places Autocomplete input with Chakra UI
- [ ] Add map preview showing selected location pin
- [ ] Validate address is within Paris metropolitan area
- [ ] Display validation errors (e.g., "Address must be in Paris")
- [ ] Store location data: { address: string, lat: number, lng: number, validated: boolean }
- [ ] Create separate inputs for pickup and dropoff locations
- [ ] Add "Use same location for dropoff" checkbox option

**Agent Instructions:**
```
Create src/components/LocationPicker/LocationPicker.tsx component.
Use Autocomplete component from @react-google-maps/api.
Restrict autocomplete results to Paris region using bounds and componentRestrictions.
On location select:
  1. Geocode address to get lat/lng
  2. Validate coordinates within Paris bounds
  3. Show validation success/error message
  4. Update map marker position
Display GoogleMap component below input showing selected pin.
Add props: value, onChange, label, required.
Style with Chakra UI FormControl for consistency.
```

**SRS Alignment:** Implements §3.1 (Location Flexibility)

#### Task 3.3: Tour Selection Step Component (🔴 CRITICAL)

- [ ] Create `src/pages/BookingWizard/steps/TourSelectionStep.tsx`
- [ ] Implement tour grid layout (2 columns on desktop, 1 on mobile)
- [ ] Create `TourCard.tsx` component with:
  - Tour name and description
  - Duration (hours)
  - Base price (EUR)
  - Route preview map (optional)
  - Key highlights (bullet points)
  - "Select This Tour" button
- [ ] Add selected tour highlight state
- [ ] Include pickup and dropoff LocationPicker components
- [ ] Display selected car summary at top (car model, date)
- [ ] Add "Back to Car Selection" and "Next: Add Detours" buttons
- [ ] Validate both locations selected before allowing proceed

**Agent Instructions:**
```
Create src/pages/BookingWizard/steps/TourSelectionStep.tsx.
Fetch tours from API: GET /api/v1/tours.
Display selected car info in summary card at top.
Render grid of TourCard components with hover effects.
Highlight selected tour with gold border.
Below tour grid, add LocationPicker for pickup and dropoff.
Validate both locations are in Paris before enabling "Next" button.
On "Next" click, update BookingContext and navigate to /book/detours.
Add loading states and error handling for API failures.
```

**SRS Alignment:** Implements §3.2 (Tour Selection) + §3.1 (Location inputs)

---

### Day 7-9: Detour Customization & Dynamic Pricing (🔴 CRITICAL)

**New Critical Feature:** SRS §3.3 + §3.4 require detour customization with automatic price calculation

#### Task 3.4: Detour Customization Step (🔴 CRITICAL)

- [ ] Create `src/pages/BookingWizard/steps/DetourCustomizationStep.tsx`
- [ ] Display base tour route on Google Map
- [ ] Create "Add Detour" button that opens modal
- [ ] Implement detour input modal with:
  - LocationPicker for detour address (Paris only)
  - Detour name/description input
  - "Calculate Price" button
- [ ] Use Distance Matrix API to calculate extra kilometers
- [ ] Display calculated detour charge (EUR per km pricing model)
- [ ] Add detour to list with remove button
- [ ] Show total detours count and total extra charges
- [ ] Update BookingContext with detours array
- [ ] Add "Skip Detours" and "Next: Checkout" buttons

**Agent Instructions:**
```
Create src/pages/BookingWizard/steps/DetourCustomizationStep.tsx.
Display GoogleMap showing base tour route (use Polyline).
Add "Add Custom Detour" button opening Chakra UI Modal.
In modal:
  - LocationPicker for detour destination
  - Input for detour name
  - On "Calculate", call Distance Matrix API from tour end to detour point
  - Display: "Extra distance: X km | Charge: €Y" (use pricing from API)
  - "Add Detour" button updates BookingContext
Render list of added detours with remove (X) button for each.
Display running total of detour charges.
Show summary: "Base Tour: €X | Detours: €Y | Total: €Z"
Enable "Next" button always (detours optional).
```

**SRS Alignment:** Implements §3.3 (Detour Customization)

#### Task 3.5: Dynamic Pricing Engine (🔴 CRITICAL)

- [ ] Create `src/services/pricing.ts` with calculation logic
- [ ] Implement pricing formula:
  - Base: Tour base price
  - Car surcharge: Premium car models add % upcharge
  - Detour charges: Distance * rate per km (from API)
  - VAT: 20% (French legal requirement)
- [ ] Create `PriceBreakdown.tsx` component showing itemized costs
- [ ] Add real-time price updates on any selection change
- [ ] Display subtotal, VAT, and grand total
- [ ] Format currency properly (EUR with locale)
- [ ] Create `usePricing()` hook for centralized calculation

**Agent Instructions:**
```
Create src/services/pricing.ts with calculateTotalPrice() function.
Formula:
  baseTourPrice = selectedTour.basePrice
  carSurcharge = selectedCar.surchargePercent * baseTourPrice
  detourTotal = sum(detour.distance * detour.ratePerKm for each detour)
  subtotal = baseTourPrice + carSurcharge + detourTotal
  vat = subtotal * 0.20
  total = subtotal + vat

Create src/components/PriceBreakdown.tsx component.
Display table with rows: Base Tour, Car Premium, Detours (itemized), Subtotal, VAT (20%), Grand Total.
Use Chakra UI Table component styled for luxury aesthetic.
Create src/hooks/usePricing.ts that watches BookingContext and recalculates on changes.
Format all prices with Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).
```

**SRS Alignment:** Implements §3.4 (Dynamic Pricing)

---

## Week 3: Payment Integration + Testing + Deployment

### Day 10-11: Payment Integration (🔴 CRITICAL)

**New Critical Feature:** SRS §5.1 requires Stripe/Adyen for PCI-DSS compliant payments

#### Task 4.1: Stripe Payment Integration (🔴 CRITICAL)

- [ ] Create Stripe account and get API keys (test mode)
- [ ] Install dependencies: `@stripe/stripe-js`, `@stripe/react-stripe-js`
- [ ] Configure Stripe publishable key in `.env`
- [ ] Create backend endpoint: `POST /api/v1/create-payment-intent`
- [ ] Create `src/pages/BookingWizard/steps/CheckoutStep.tsx`
- [ ] Implement Stripe Elements form with:
  - Card number input
  - Expiry date input
  - CVC input
  - Billing address fields
- [ ] Add customer information form (name, email, phone)
- [ ] Display final PriceBreakdown component
- [ ] Implement 3D Secure (SCA) for European regulations
- [ ] Handle payment success/failure states
- [ ] Create confirmation screen with booking reference

**Agent Instructions:**
```
Install Stripe packages: npm install @stripe/stripe-js @stripe/react-stripe-js.
Create src/components/PaymentForm.tsx wrapping Stripe Elements.
Use Elements components: CardNumberElement, CardExpiryElement, CardCvcElement.
On "Pay Now" button click:
  1. Call backend POST /api/v1/create-payment-intent with booking data
  2. Backend returns clientSecret
  3. Use stripe.confirmCardPayment(clientSecret) to process payment
  4. Handle 3D Secure redirects automatically
  5. On success, call POST /api/v1/bookings to save booking
  6. Navigate to /booking/confirmation/{bookingId}
Add loading state during payment processing.
Display error messages for declined cards.
Create BookingConfirmation.tsx page showing booking details and receipt.
```

**SRS Alignment:** Implements §5.1 (Stripe API for secure payment processing)

#### Task 4.2: Booking Confirmation & Receipt (🟠 HIGH)

- [ ] Create `src/pages/BookingConfirmation.tsx`
- [ ] Display booking confirmation message
- [ ] Show booking reference number
- [ ] Display complete booking summary (car, tour, detours, locations, date, price)
- [ ] Add "Download Receipt" button (generate PDF)
- [ ] Send confirmation email via backend webhook
- [ ] Add "Book Another Tour" button
- [ ] Clear booking state from sessionStorage

**Agent Instructions:**
```
Create src/pages/BookingConfirmation.tsx receiving bookingId from URL params.
Fetch booking details: GET /api/v1/bookings/{bookingId}.
Display success message with booking reference prominently.
Show complete summary: car details, tour route, detours, locations, date, itemized price.
Add "Download Receipt" button calling backend PDF generation endpoint.
Add "Back to Home" and "Book Another Tour" buttons.
Clear sessionStorage booking data.
Add print styles for easy printing.
```

**SRS Alignment:** Completes booking flow (§3), enables webhooks (§5.3)

---

### Day 12-13: Testing & Performance Optimization (🟠 HIGH)

**SRS Performance Requirements:** < 1.8s booking flow load, < 1.5s initial page load

#### Task 5.1: Performance Optimization (🟠 HIGH)

- [ ] Run Lighthouse audit on all pages
- [ ] Implement route-based code splitting with React.lazy()
- [ ] Lazy load heavy components:
  - Google Maps (only load on location step)
  - Stripe Elements (only load on checkout step)
  - Car images (implement blur-up placeholder)
- [ ] Configure Vite bundle size limits:
  - Initial JS bundle < 150KB gzipped
  - Total page weight < 500KB
- [ ] Optimize images: convert to WebP, add responsive srcset
- [ ] Add performance budgets to Vite config (warn on violations)
- [ ] Test on 3G network throttling
- [ ] Measure Core Web Vitals (LCP, FID, CLS)

**Agent Instructions:**
```
Run npm run build and analyze bundle size with vite-bundle-visualizer.
Implement React.lazy() for route components:
  import CarSelectionStep = lazy(() => import('./steps/CarSelectionStep'))
Wrap with Suspense showing loading skeleton.
Add vite-plugin-compression for gzip/brotli compression.
Configure Vite rollupOptions to code-split large dependencies (Google Maps, Stripe).
Convert all PNG/JPG images to WebP format.
Add loading="lazy" to all images below the fold.
Create blur placeholder using base64 encoded tiny version.
Run Lighthouse: aim for Performance 90+, Accessibility 100, Best Practices 100.
```

**SRS Alignment:** Meets §4.1 (Performance - booking flow < 1.8s)

#### Task 5.2: Unit & Integration Testing (🟠 HIGH)

- [ ] Write Vitest tests for:
  - Pricing calculation logic (all edge cases)
  - Booking state reducer (all actions)
  - Validation functions (step progression guards)
  - API service layer (mock responses)
- [ ] Write React Testing Library tests for:
  - BookingWizard navigation flow
  - Car selection and state update
  - Location picker validation
  - Detour addition/removal
  - Payment form validation
- [ ] Achieve 80%+ code coverage on business logic
- [ ] Add Playwright E2E test for complete booking flow
- [ ] Test error scenarios (API failures, payment declines)

**Agent Instructions:**
```
Create tests in src/**/*.test.tsx files matching component structure.
Test pricing.ts:
  - Test base tour + car surcharge calculation
  - Test detour charges calculation
  - Test VAT calculation (20%)
  - Test edge case: zero detours, premium car
Test BookingContext reducer:
  - Test SELECT_CAR action updates selectedCar
  - Test ADD_DETOUR appends to detours array
  - Test state persistence to sessionStorage
Test validation functions:
  - canProceedToTour() returns false when no car selected
  - canProceedToCheckout() requires all fields present
Create E2E test: tests/booking-flow.spec.ts
  - Navigate through all 4 wizard steps
  - Fill in car, tour, locations, detours
  - Complete payment (use Stripe test card)
  - Verify confirmation page displays
Run: npm run test:coverage and ensure 80%+ coverage.
```

**SRS Alignment:** Quality assurance (§7) - ensures booking logic is bulletproof

#### Task 5.3: Accessibility Audit (🟡 MEDIUM)

- [ ] Install @axe-core/react for automated testing
- [ ] Run axe DevTools audit on all pages
- [ ] Fix color contrast issues (gold may fail WCAG AA - test and adjust)
- [ ] Add skip navigation link to main content
- [ ] Test screen reader compatibility (NVDA/JAWS)
- [ ] Ensure all form inputs have associated labels
- [ ] Test keyboard-only navigation through booking wizard
- [ ] Verify focus indicators visible on all interactive elements
- [ ] Add ARIA labels to icon buttons
- [ ] Test with browser zoom 200%

**Agent Instructions:**
```
Install @axe-core/react: npm install -D @axe-core/react.
Add axe to development mode in main.tsx (if not production).
Run axe DevTools extension on each page, fix all violations.
Check color contrast with WebAIM contrast checker:
  - Gold (#D4AF37) on white background must be 4.5:1 minimum
  - Adjust shades if needed for WCAG AA compliance
Add skip link: <a href="#main-content" className="visually-hidden-focusable">Skip to main</a>
Test keyboard navigation:
  - Tab through all form fields in logical order
  - Enter key activates buttons
  - Escape key closes modals
Add aria-label to icon-only buttons (e.g., close modal, remove detour).
Test with NVDA screen reader: all content should be announced correctly.
```

**SRS Alignment:** Meets §4.3 (Usability - WCAG AA compliance)

---

### Day 14: Deployment & Documentation (🟠 HIGH)

#### Task 6.1: Netlify Deployment (🟠 HIGH)

- [ ] Create production build: `npm run build`
- [ ] Test production build locally: `npm run preview`
- [ ] Fix any build errors or warnings
- [ ] Create Netlify account (if not exists)
- [ ] Connect GitHub repository to Netlify
- [ ] Configure build settings:
  - Build command: `npm run build`
  - Publish directory: `dist`
  - Node version: 18
- [ ] Add environment variables in Netlify dashboard:
  - `VITE_API_BASE_URL` (production backend URL)
  - `VITE_GOOGLE_MAPS_API_KEY`
  - `VITE_STRIPE_PUBLISHABLE_KEY`
- [ ] Set up redirects for SPA (301 /* /index.html 200)
- [ ] Enable HTTPS and configure custom domain (optional)
- [ ] Test deployed site on mobile and desktop devices

**Agent Instructions:**
```
Run npm run build and fix any TypeScript/ESLint errors.
Run npm run preview and test locally at http://localhost:4173.
Push code to GitHub repository main branch.
In Netlify:
  1. Import project from GitHub
  2. Configure build settings as specified above
  3. Add environment variables (use production values)
  4. Create netlify.toml file:
     [[redirects]]
       from = "/*"
       to = "/index.html"
       status = 200
  5. Deploy and verify site loads
Test booking flow on production URL.
Verify API calls reach production backend.
Test Stripe payment with test card (4242 4242 4242 4242).
Check mobile responsiveness on real devices.
```

**SRS Alignment:** Implements §7 (Netlify deployment with atomic deploys and preview)

#### Task 6.2: Documentation & README (🟡 MEDIUM)

- [ ] Update README.md with:
  - Project description and key features
  - Screenshots of booking flow steps
  - Tech stack list
  - Installation instructions
  - Environment variables setup
  - Development commands (dev, build, test, lint)
  - API endpoint documentation
  - Deployment instructions
  - Live demo URL
- [ ] Create ARCHITECTURE.md documenting:
  - Folder structure
  - State management approach
  - Routing strategy
  - API integration patterns
- [ ] Add inline code comments for complex logic (pricing, validation)
- [ ] Create API documentation (if backend is yours)

**Agent Instructions:**
```
Update README.md with professional documentation:
  # Classic Car Tour - Luxury Booking Platform

  [Screenshots of booking flow]

  ## Features
  - 🚗 Real-time fleet availability
  - 🗺️ Custom Paris detours with dynamic pricing
  - 💳 Secure Stripe payments with 3D Secure
  - 📍 Google Maps location selection
  - 📱 Fully responsive mobile design
  - ♿ WCAG AA accessible

  ## Tech Stack
  - React 18, TypeScript, Vite 6
  - Chakra UI, Framer Motion
  - React Router v6, Context API
  - Google Maps API, Stripe API
  - Vitest, Playwright

  ## Setup
  [Installation steps with .env template]

  ## Development
  [Commands: npm run dev, build, test, lint]

Create src/ARCHITECTURE.md explaining folder structure and patterns.
Add JSDoc comments to complex functions.
```

**SRS Alignment:** Professional documentation for portfolio presentation

---

## Success Metrics (SRS Compliance Checklist)

### 🔴 Critical SRS Requirements

- [ ] **§3.1 Location Flexibility**: Users can input any valid Paris address for pick-up/drop-off ✅
- [ ] **§3.2 Fleet Selection**: Users can browse and select classic car models ✅
- [ ] **§3.3 Tour Customization**: Users can append "Extra Detours" to bookings ✅
- [ ] **§3.4 Dynamic Pricing**: System calculates detour charges automatically before checkout ✅
- [ ] **§4.1 Performance**: Booking flow loads in < 1.8 seconds ✅
- [ ] **§5.1 Payment Security**: Stripe integration with PCI-DSS compliance ✅
- [ ] **§5.2 Fleet Availability**: Real-time API sync for car availability ✅
- [ ] **§6.4 Multi-Step Flow**: React Router v6 with clean URL structure ✅

### 🟠 High Priority

- [ ] **§4.3 Luxury UX**: High-resolution imagery, minimalist navigation, WCAG AA ✅
- [ ] **§5.1 Mobile Responsive**: Optimized for Safari on iOS (luxury travelers) ✅
- [ ] **§5.3 Webhooks**: Booking confirmation via SMS/Email ✅
- [ ] **§7 CI/CD**: GitHub Actions + Netlify deployment with zero downtime ✅

### 🟡 Quality Assurance

- [ ] TypeScript strict mode with zero errors ✅
- [ ] ESLint zero warnings policy ✅
- [ ] 80%+ test coverage on business logic ✅
- [ ] Lighthouse Performance 90+ ✅
- [ ] Cross-browser compatibility (Chrome, Firefox, Safari) ✅

---

## Phase 2: Visual Enhancements (Optional - Post-Launch)

**Timeline:** 7-10 additional days
**Priority:** Low - Only after all SRS requirements met

### Enhancement 1: 3D Car Viewer (Not in SRS)

- [ ] Install Three.js, @react-three/fiber, @react-three/drei
- [ ] Find or create 3D car models (GLB format)
- [ ] Implement interactive 3D viewer on car detail page
- [ ] Add orbit controls and lighting
- [ ] Optimize performance (lazy load, code split)

**Rationale:** Portfolio showcase feature - impressive but not business-critical

### Enhancement 2: Advanced Animations (Not in SRS)

- [ ] Scroll-triggered reveal animations for marketing pages
- [ ] Parallax effects on hero section background
- [ ] Floating particle effects (subtle, luxury aesthetic)
- [ ] Page transition animations
- [ ] Counter animations for statistics

**Rationale:** Visual polish for portfolio appeal

### Enhancement 3: Additional Features

- [ ] Blog/news section for tours and cars
- [ ] Customer testimonials carousel
- [ ] Tour photo gallery with lightbox
- [ ] Social media integration
- [ ] Newsletter signup
- [ ] Chat widget for customer support

**Rationale:** Marketing enhancements - valuable but not in SRS scope

---

## Risk Management

### Critical Path Dependencies

| Task | Blocks | Mitigation |
|------|--------|------------|
| API Service Layer (1.2) | All data-dependent features | Use mock data for parallel development |
| Booking Wizard Shell (2.1) | All wizard steps | Build first, integrate steps incrementally |
| Google Maps API (3.1) | Location picker, detour system | Set up API keys early, test quota limits |
| Stripe Integration (4.1) | Payment processing | Use Stripe test mode, have fallback payment method |

### Performance Risks

| Risk | Impact | Mitigation |
|------|--------|------------|
| Google Maps bundle size | Violates < 150KB budget | Lazy load, use lite mode where possible |
| High-res car images | Slow page load | WebP format, responsive images, lazy loading |
| Real-time availability polling | High API usage | Use SWR caching, increase interval to 60s |

### Timeline Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Backend API delays | Medium | Develop with mocks, integrate when ready |
| Stripe setup complexity | Low | Follow official docs, use test mode early |
| Scope creep (Phase 2 features) | High | Strict prioritization, defer enhancements |

---

## Agent Workflow Instructions

### Daily Execution Pattern

1. **Morning:** Review PLAN-SRS.md and identify next unchecked task in current week
2. **Execute:** Use appropriate tools (Read, Write, Edit, Bash) to implement task
3. **Verify:** Run tests, lint, build to ensure quality
4. **Update:** Mark task as complete [x] and add implementation notes
5. **Commit:** Create git commit with descriptive message

### Quality Gates (Before marking task complete)

- [ ] Code runs without errors
- [ ] TypeScript types are correct (no `any`)
- [ ] Component is responsive (test mobile viewport)
- [ ] Follows design system (uses theme tokens)
- [ ] ESLint passes with zero warnings
- [ ] Unit tests written (if applicable)
- [ ] Matches SRS requirement (verify alignment)

### Agent Collaboration

- **react-code-reviewer agent**: Review completed features for best practices
- **react-component-builder agent**: Generate components from specifications
- **Explore agent**: Investigate codebase structure before making changes

### Progress Tracking

- Update task checkboxes [x] as completed
- Add **Implementation Notes** under tasks with key decisions
- Update section **Status** (Not Started → In Progress → Completed)
- Log blockers in **Notes & Blockers** section below

---

## Notes & Blockers

### Backend API Status

- [ ] Confirm PHP backend endpoints exist:
  - GET /api/v1/cars?date=YYYY-MM-DD
  - GET /api/v1/tours
  - POST /api/v1/bookings
  - POST /api/v1/create-payment-intent
  - GET /api/v1/calculate-detour (distance + price)
- [ ] Get API documentation from backend team
- [ ] Confirm CORS headers configured for frontend domain

### Design Assets Needed

- [ ] High-quality car images (at least 6 classic car models)
- [ ] Logo/brand mark for navbar
- [ ] Favicon and app icons
- [ ] Tour route maps or preview images
- [ ] Placeholder images for empty states

### Third-Party Service Setup

- [ ] Google Maps API key with required APIs enabled
- [ ] Stripe account with test and production keys
- [ ] Domain name for production deployment (optional)
- [ ] Email service for booking confirmations (SendGrid, Mailgun)

### Open Questions

- [ ] What is the pricing model for detours? (per km rate)
- [ ] How many standard tours exist? (SRS says 6)
- [ ] Is there a maximum number of detours per booking?
- [ ] What car models are in the fleet? (need for mock data)
- [ ] Should cancellation/refund flow be included in v1?

---

## Timeline Summary

| Week | Focus | SRS Criticality |
|------|-------|-----------------|
| **Week 1** | Foundation + Booking Wizard | 🔴 CRITICAL |
| **Week 2** | Location System + Detours + Pricing | 🔴 CRITICAL |
| **Week 3** | Payment + Testing + Deployment | 🔴 CRITICAL |
| **Phase 2** | Visual Enhancements | 🟢 LOW (Optional) |

**Estimated Total:** 21 days for SRS compliance + 7-10 days optional enhancements

---

## Contact & Repository

**Developer:** Mart (Full-Stack Web Developer & Instructor)
**Repository:** https://github.com/lostmart/car-rental-front
**SRS Document:** `docs/software-requirements-specification.md`
**Timeline:** January 31 - February 21, 2026 (SRS compliance)
**Target Role:** Permanent CDI Full-Stack Developer Position

---

_This plan prioritizes Software Requirements Specification (SRS) compliance to deliver a functional booking platform. Visual enhancements from the original PLAN.md are moved to Phase 2. All tasks are executable by Claude Code and MCP agents with clear success criteria._
