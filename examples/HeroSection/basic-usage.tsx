/**
 * HeroSection Usage Examples
 *
 * This file demonstrates how to integrate the HeroSection component
 * into various page layouts and scenarios.
 */

import { Box } from "@chakra-ui/react"
import HeroSection from "./HeroSection"

/**
 * Example 1: Basic Usage - Landing Page
 *
 * The simplest integration - just render the HeroSection
 * at the top of your landing page.
 */
export function BasicLandingPage() {
	return (
		<Box>
			<HeroSection />
			{/* Rest of your page content goes here */}
			<Box py={20} px={4}>
				{/* Feature sections, testimonials, etc. */}
			</Box>
		</Box>
	)
}

/**
 * Example 2: With Background Image
 *
 * To add a background image, you'll need to modify the HeroSection component.
 * Replace the TODO comment in HeroSection.tsx with:
 *
 * backgroundImage="url('/assets/vintage-car-hero.jpg')"
 *
 * Or pass it as a prop if you make the component configurable:
 */
/*
export function HeroSectionWithImage() {
	return (
		<Box>
			<HeroSection backgroundImage="/assets/vintage-car-hero.jpg" />
		</Box>
	)
}
*/

/**
 * Example 3: Full Page Layout
 *
 * Integration with a complete page structure including
 * navigation, hero section, and footer.
 */
/*
import NavBar from "./ui-parts/NavBar"
import FooterComponent from "./FooterComponent"

export function CompleteHomePage() {
	return (
		<Box>
			<NavBar />
			<HeroSection />

			<Box as="main">
				{/* Featured Cars Section *\/}
				<Box py={20} px={4} bg="neutral.100">
					<List />
				</Box>

				{/* Testimonials Section *\/}
				<Box py={20} px={4} bg="white">
					{/* Testimonials content *\/}
				</Box>

				{/* About Section *\/}
				<Box py={20} px={4} bg="neutral.200">
					{/* About content *\/}
				</Box>
			</Box>

			<FooterComponent />
		</Box>
	)
}
*/

/**
 * Customization Tips:
 *
 * 1. Background Image:
 *    - Add a high-quality vintage car image (recommended: 1920x1080 or higher)
 *    - Ensure image is optimized for web (compressed, WebP format)
 *    - Consider using different images for mobile/desktop breakpoints
 *
 * 2. Button Actions:
 *    - Wire up the "Browse Cars" button to navigate to a cars listing page
 *    - Wire up the "View Tours" button to navigate to a tours page
 *    - Example with react-router:
 *      ```tsx
 *      import { useNavigate } from "react-router-dom"
 *
 *      const navigate = useNavigate()
 *      <Button onClick={() => navigate("/cars")}>Browse Cars</Button>
 *      ```
 *
 * 3. Content Customization:
 *    - Modify heading and subheading text to match your brand
 *    - Adjust colors using theme tokens
 *    - Change button text and styles
 *
 * 4. Animation Adjustments:
 *    - Modify staggerChildren delay in containerVariants
 *    - Adjust duration in itemVariants for faster/slower animations
 *    - Change scrollIndicatorVariants bounce distance
 *
 * 5. Responsive Behavior:
 *    - Current breakpoint: 768px (md)
 *    - Adjust using Chakra's responsive props
 *    - Test on various screen sizes
 *
 * 6. Performance:
 *    - Framer Motion animations are GPU-accelerated
 *    - Parallax effect uses transform (not scroll listener)
 *    - Consider lazy loading background image
 *
 * 7. Accessibility:
 *    - All buttons have aria-labels
 *    - Keyboard navigation fully supported
 *    - Scroll indicator is keyboard accessible
 *    - Screen reader friendly content structure
 */

/**
 * Example 4: Making the Component Configurable
 *
 * If you need to reuse this hero with different content,
 * consider adding props:
 */
/*
interface HeroSectionProps {
	heading?: string
	subheading?: string
	primaryButtonText?: string
	secondaryButtonText?: string
	onPrimaryClick?: () => void
	onSecondaryClick?: () => void
	backgroundImage?: string
}

// Then use it like:
<HeroSection
	heading="Discover Timeless Beauty"
	subheading="Classic cars for unforgettable journeys"
	primaryButtonText="Explore Fleet"
	secondaryButtonText="Contact Us"
	onPrimaryClick={() => navigate("/fleet")}
	onSecondaryClick={() => navigate("/contact")}
	backgroundImage="/assets/hero-bg.jpg"
/>
*/

export default BasicLandingPage
