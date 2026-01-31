/**
 * Usage Examples for HeroSection Component with Parallax Effect
 *
 * This file demonstrates various ways to use the HeroSection component
 * with the parallax background effect.
 *
 * NOTE: Import path is relative from examples folder.
 * In your actual code, adjust based on your file location:
 * - From src/pages/: "../components/features/HeroSection/HeroSection"
 * - From src/components/: "./features/HeroSection/HeroSection"
 */

import HeroSection from "../../src/components/features/HeroSection/HeroSection"
import { useNavigate } from "react-router-dom"

/**
 * Example 1: Basic Hero with Parallax Enabled (Default)
 *
 * The parallax effect is enabled by default, moving the background
 * at 50% of scroll speed for a depth effect.
 */
export function BasicHeroWithParallax() {
	const navigate = useNavigate()

	return (
		<HeroSection
			heading="Experience Classic Elegance"
			subheading="Tour Paris in authentic vintage automobiles"
			primaryButtonLabel="Browse Cars"
			secondaryButtonLabel="View Tours"
			onPrimaryClick={() => navigate('/cars')}
			onSecondaryClick={() => navigate('/tours')}
			backgroundImage="/images/hero-bg.jpg"
		/>
	)
}

/**
 * Example 2: Hero with Parallax Explicitly Enabled
 *
 * Same as above, but explicitly setting enableParallax to true.
 */
export function HeroWithParallaxExplicit() {
	const navigate = useNavigate()

	return (
		<HeroSection
			heading="Luxury Fleet Collection"
			subheading="From vintage classics to modern elegance"
			primaryButtonLabel="View Collection"
			secondaryButtonLabel="Learn More"
			onPrimaryClick={() => navigate('/fleet')}
			onSecondaryClick={() => navigate('/about')}
			backgroundImage="/images/luxury-cars.jpg"
			enableParallax={true}
		/>
	)
}

/**
 * Example 3: Hero with Parallax Disabled
 *
 * Useful for cases where you want a static background,
 * such as video backgrounds or when parallax might cause
 * performance issues on mobile devices.
 */
export function HeroWithoutParallax() {
	return (
		<HeroSection
			heading="Book Your Journey"
			subheading="Reserve your dream car today"
			primaryButtonLabel="Start Booking"
			secondaryButtonLabel="Contact Us"
			backgroundImage="/images/static-bg.jpg"
			enableParallax={false}
		/>
	)
}

/**
 * Example 4: Hero with Custom Styling and No Parallax
 *
 * Demonstrates using custom height and max-width props
 * with parallax disabled.
 */
export function CustomHeroNoParallax() {
	return (
		<HeroSection
			heading="Premium Car Rental Service"
			subheading="Experience the finest automobiles"
			primaryButtonLabel="Get Started"
			height="80vh"
			maxWidth="1000px"
			enableParallax={false}
			showScrollIndicator={false}
		/>
	)
}

/**
 * Example 5: Accessibility-First Hero
 *
 * Demonstrates how the component automatically respects
 * user's motion preferences. Users with prefers-reduced-motion
 * will see no parallax effect, regardless of the enableParallax prop.
 *
 * Note: The component handles this automatically via useReducedMotion hook.
 */
export function AccessibleHero() {
	const navigate = useNavigate()

	return (
		<HeroSection
			heading="Accessible Design"
			subheading="Beautiful for everyone, on every device"
			primaryButtonLabel="Learn About Accessibility"
			onPrimaryClick={() => navigate('/accessibility')}
			backgroundImage="/images/accessible-bg.jpg"
			enableParallax={true}
			// Even with enableParallax={true}, users with prefers-reduced-motion
			// will experience no parallax effect
		/>
	)
}

/**
 * Example 6: Conditional Parallax Based on Device
 *
 * Shows how to conditionally enable/disable parallax based on
 * device capabilities or screen size using Chakra UI's responsive hook.
 */
import { useBreakpointValue } from "@chakra-ui/react"

export function ResponsiveParallaxHero() {
	const navigate = useNavigate()

	// Disable parallax on mobile for better performance (SSR-safe)
	const enableParallax = useBreakpointValue(
		{ base: false, md: true },
		{ fallback: 'md', ssr: true }
	)

	return (
		<HeroSection
			heading="Performance Optimized"
			subheading="Smooth experience on all devices"
			primaryButtonLabel="Explore Features"
			onPrimaryClick={() => navigate('/features')}
			backgroundImage="/images/performance-bg.jpg"
			enableParallax={enableParallax}
		/>
	)
}

/**
 * Technical Notes:
 *
 * 1. Parallax Speed: The background moves at 50% of scroll speed
 *    - Scroll 1000px → Background moves 500px
 *    - Creates natural depth perception
 *
 * 2. Accessibility: Automatically respects prefers-reduced-motion
 *    - Users who prefer reduced motion see no parallax
 *    - No additional code needed - handled by useReducedMotion hook
 *
 * 3. Performance: Parallax uses framer-motion's hardware-accelerated
 *    - Uses CSS transform (GPU-accelerated)
 *    - Smooth 60fps animations
 *    - Consider disabling on low-end mobile devices
 *
 * 4. Browser Support: Works in all modern browsers
 *    - Requires CSS transform support
 *    - Fallback: Static background if transforms not supported
 *
 * 5. Testing: Component respects motion preferences
 *    - Test with prefers-reduced-motion: reduce in browser DevTools
 *    - Verify parallax disables for accessibility users
 */
