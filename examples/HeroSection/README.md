# HeroSection Component

A production-ready, visually stunning hero section component for the luxury car rental application. Features parallax scrolling, staggered animations, and full accessibility support.

> **📋 SRS Context:** This is a **marketing/landing page component** and is not part of the core SRS booking engine requirements. The SRS focuses on booking functionality (wizard, tours, detours, payment). HeroSection is categorized as **Phase 2 visual enhancement** in `docs/PLAN.md` but is currently used in `HomePage.tsx`.

## Features

### Visual Design
- **Full viewport height** with centered content layout
- **Dark gradient overlay** over background for text readability
- **Responsive typography** that scales from mobile to desktop
- **Luxury aesthetic** using Playfair Display and Inter fonts from theme
- **Smooth animations** with Framer Motion for professional polish

### Animations
- **Parallax background effect** - background moves at 50% scroll speed for depth
- **Staggered content reveal** - heading, subheading, buttons, and scroll indicator appear sequentially
- **Bounce scroll indicator** - infinite subtle animation to encourage scrolling
- **Hover effects** on buttons with scale and shadow transitions
- **GPU-accelerated** for 60fps performance

### Accessibility (WCAG AA Compliant)
- ✅ Semantic HTML with `<section>` and proper heading hierarchy
- ✅ Keyboard navigation for all interactive elements
- ✅ ARIA labels on buttons for screen readers
- ✅ Focus indicators on scroll indicator
- ✅ High color contrast (white text on dark overlay)
- ✅ Respects `prefers-reduced-motion` via explicit `useReducedMotion()` hook implementation

### Responsive Design
- **Mobile (<768px):**
  - Heading: 4xl size
  - Subheading: xl size
  - Buttons: Stacked vertically, full width
  - Padding: py={8}, px={4}

- **Desktop (≥768px):**
  - Heading: 6xl size
  - Subheading: 2xl size
  - Buttons: Side by side (horizontal)
  - Padding: py={12}, px={6}

## Usage

### Basic Integration

```tsx
import HeroSection from "./components/HeroSection"

function HomePage() {
  return (
    <>
      <HeroSection />
      {/* Rest of page content */}
    </>
  )
}
```

### With React Router Navigation

```tsx
import HeroSection from "./components/HeroSection"
import { useNavigate } from "react-router-dom"

function LandingPage() {
  const navigate = useNavigate()

  // To add navigation, modify the component to accept onPrimaryClick/onSecondaryClick props
  // Or wire up navigation in the component directly

  return (
    <>
      <HeroSection />
      <main>{/* Page content */}</main>
    </>
  )
}
```

## Adding a Background Image

The component accepts a `backgroundImage` prop for easy customization:

```tsx
<HeroSection
  backgroundImage="/assets/vintage-car-hero.jpg"
  heading="Experience Classic Elegance"
  subheading="Tour Paris in authentic vintage automobiles"
/>
```

**Recommended image specifications**:
- Resolution: 1920x1080 minimum (2K for high-DPI displays, 4K for luxury aesthetic)
- Format: WebP with JPEG fallback for older browsers
- Subject: Vintage car in elegant setting
- Composition: Ensure center/right space for text overlay
- File size: < 500KB after compression (use tools like Squoosh or ImageOptim)

## Customization

### Changing Content

Use component props to customize all text content:

```tsx
<HeroSection
  heading="Your Custom Heading"
  subheading="Your custom subheading text"
  primaryButtonLabel="Your Primary CTA"
  secondaryButtonLabel="Your Secondary CTA"
  onPrimaryClick={() => navigate('/primary-action')}
  onSecondaryClick={() => navigate('/secondary-action')}
/>
```

### Adjusting Colors

All colors use theme tokens from `src/theme/index.ts`:

- `primary.500` - Main gold (#D4AF37)
- `primary.600` - Lighter gold (#C5A572)
- `neutral.100` - Cream (#FAF9F6)
- `accent.700` - Dark charcoal (#2C2C2C)

To change colors, modify the theme file or override in the component:

```tsx
<Button bg="secondary.500" color="white">
  Custom Color Button
</Button>
```

### Animation Timing

Modify animation parameters in the component:

```tsx
// Stagger delay between elements (line 46)
staggerChildren: 0.2,  // Increase for slower reveal

// Fade-in duration (line 56)
duration: 0.8,  // Decrease for faster animation

// Scroll indicator bounce (line 65)
duration: 1.5,  // Speed of bounce cycle
```

### Parallax Intensity

Adjust the parallax effect strength (line 37):

```tsx
// Current: background moves 500px over 1000px scroll
const backgroundY = useTransform(scrollY, [0, 1000], [0, 500])

// More intense: increase second value
const backgroundY = useTransform(scrollY, [0, 1000], [0, 800])

// More subtle: decrease second value
const backgroundY = useTransform(scrollY, [0, 1000], [0, 300])
```

## Component Props

The component is fully configurable via TypeScript props:

```tsx
interface HeroSectionProps {
  /** Main heading text (default: "Experience Classic Elegance") */
  heading?: string

  /** Subheading text (default: "Tour Paris in authentic vintage automobiles") */
  subheading?: string

  /** Primary CTA button label (default: "Browse Cars") */
  primaryButtonLabel?: string

  /** Secondary CTA button label (default: "View Tours") */
  secondaryButtonLabel?: string

  /** Primary button click handler */
  onPrimaryClick?: () => void

  /** Secondary button click handler */
  onSecondaryClick?: () => void

  /** Background image URL */
  backgroundImage?: string

  /** Enable/disable parallax effect (default: true) */
  enableParallax?: boolean

  /** Show/hide scroll indicator (default: true) */
  showScrollIndicator?: boolean

  /** Custom scroll indicator text (default: "Scroll down to explore") */
  scrollIndicatorText?: string

  /** Custom section height (default: "100vh") */
  height?: string

  /** Maximum content width (default: "1200px") */
  maxWidth?: string
}
```

**All props are optional** and have sensible defaults matching the luxury car rental theme.

## Technical Details

### Dependencies
- `@chakra-ui/react` - UI components and theming
- `framer-motion` - Animation library
- `react-icons/fa` - Chevron down icon

### Performance Considerations
- **GPU acceleration** - Framer Motion uses CSS transforms
- **No scroll listeners** - `useScroll` hook is optimized
- **Lazy loading** - Consider for background image (add `loading="lazy"`)
- **Bundle size** - ~3KB gzipped (excluding dependencies)

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE11 not supported (uses CSS Grid and modern JavaScript)

## Testing

Run the test suite:

```bash
npm run test HeroSection.test.tsx
```

Tests cover:
- Component rendering
- Content presence (heading, subheading, buttons)
- Accessibility (ARIA labels, semantic structure)
- Interactive elements (scroll indicator)

## Accessibility Checklist

- [x] Keyboard navigation (Tab, Enter, Space for scroll indicator)
- [x] Focus management (visible focus rings)
- [x] ARIA labels on buttons
- [x] Semantic HTML (section, h1, button elements)
- [x] Color contrast (white on dark overlay = AAA)
- [x] Screen reader compatibility
- [x] Loading states (N/A - static content)
- [x] Reduced motion support (Framer Motion handles automatically)

## Common Issues & Solutions

### Issue: Animations not playing
**Solution:** Ensure Framer Motion is installed: `npm install framer-motion`

### Issue: Theme colors not applying
**Solution:** Verify ChakraProvider wraps your app with custom theme:
```tsx
<ChakraProvider theme={theme}>
  <App />
</ChakraProvider>
```

### Issue: Background image not showing
**Solution:**
1. Check file path is correct and accessible
2. Ensure image is in public folder or imported
3. Verify CSS property syntax: `backgroundImage="url('/path')"`

### Issue: Parallax not working
**Solution:**
1. Check scroll container setup
2. Ensure component has room to scroll
3. Verify Framer Motion version (11.15.0+)

### Issue: Buttons not clickable
**Solution:** Add onClick handlers or navigation logic to buttons

## Future Enhancements

Potential improvements to consider:

1. **Video background** support with fallback image
2. **Dynamic content** via CMS integration
3. **A/B testing** different headlines/CTAs
4. **Analytics tracking** on button clicks
5. **Internationalization** (i18n) for multi-language support
6. **Dark mode** variant
7. **Multiple hero variants** (carousel of different messages)

## File Structure

```
src/components/
├── HeroSection.tsx           # Main component
├── HeroSection.test.tsx      # Unit tests
├── HeroSection.example.tsx   # Usage examples
└── HeroSection.md           # This documentation
```

## Credits

- Design: Luxury car rental aesthetic
- Fonts: Playfair Display (Google Fonts), Inter (Google Fonts)
- Icons: React Icons (FontAwesome)
- Animation: Framer Motion
- UI Framework: Chakra UI

---

**Component Status:** Production-ready ✅
**Last Updated:** 2026-01-30
**Version:** 1.0.0
