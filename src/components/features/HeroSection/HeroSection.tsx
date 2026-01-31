import {
	Box,
	Heading,
	Text,
	Button,
	VStack,
	HStack,
	Icon,
	useColorMode,
} from "@chakra-ui/react"
import {
	motion,
	useScroll,
	useTransform,
	useReducedMotion,
} from "framer-motion"
import { FaChevronDown } from "react-icons/fa"
import { useRef } from "react"

/**
 * Props for the HeroSection component
 */
export interface HeroSectionProps {
	/** Main heading text */
	heading?: string
	/** Subheading/tagline text */
	subheading?: string
	/** Primary CTA button label */
	primaryButtonLabel?: string
	/** Secondary CTA button label */
	secondaryButtonLabel?: string
	/** Primary button click handler */
	onPrimaryClick?: () => void
	/** Secondary button click handler */
	onSecondaryClick?: () => void
	/** Background image URL */
	backgroundImage?: string
	/** Enable/disable parallax background effect (default: true) */
	enableParallax?: boolean
	/** Show scroll indicator */
	showScrollIndicator?: boolean
	/** Scroll indicator text */
	scrollIndicatorText?: string
	/** Custom height (defaults to 100vh) */
	height?: string
	/** Maximum width for content container */
	maxWidth?: string
}

export default function HeroSection({
	heading = "Experience Classic Elegance",
	subheading = "Tour Paris in authentic vintage automobiles",
	primaryButtonLabel = "Browse Cars",
	secondaryButtonLabel = "View Tours",
	onPrimaryClick,
	onSecondaryClick,
	backgroundImage,
	enableParallax = true,
	showScrollIndicator = true,
	scrollIndicatorText = "Scroll to explore",
	height = "100vh",
	maxWidth = "1200px",
}: HeroSectionProps = {}) {
	const containerRef = useRef<HTMLDivElement>(null)
	const { colorMode } = useColorMode()

	// Theme-based background images
	const darkModeImage = "/assets/imgs/car01.jpg"
	const lightModeImage = "/assets/imgs/car03.jpg"
	const currentBackgroundImage =
		backgroundImage || (colorMode === "dark" ? darkModeImage : lightModeImage)

	// Check user's motion preference for accessibility
	const prefersReducedMotion = useReducedMotion()

	// Parallax scroll effect
	const { scrollY } = useScroll({
		target: containerRef,
		offset: ["start start", "end start"],
	})

	// Transform scroll position to background position for parallax
	// Background moves slower (50% speed) than scroll for depth effect
	// Disabled if user prefers reduced motion or enableParallax is false
	const backgroundY = useTransform(
		scrollY,
		[0, 1000],
		prefersReducedMotion || !enableParallax ? [0, 0] : [0, 500],
	)

	// Animation variants for staggered children
	// Respects prefers-reduced-motion by removing animations
	const containerVariants = {
		hidden: { opacity: prefersReducedMotion ? 1 : 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: prefersReducedMotion ? 0 : 0.2,
				delayChildren: prefersReducedMotion ? 0 : 0.1,
			},
		},
	}

	const itemVariants = {
		hidden: {
			opacity: prefersReducedMotion ? 1 : 0,
			y: prefersReducedMotion ? 0 : 50,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: prefersReducedMotion ? 0 : 0.8,
				ease: "easeOut",
			},
		},
	}

	// Scroll indicator bounce animation
	// Disabled if user prefers reduced motion
	const scrollIndicatorVariants = {
		animate: {
			y: prefersReducedMotion ? [0] : [0, 10, 0],
			transition: {
				duration: prefersReducedMotion ? 0 : 1.5,
				repeat: prefersReducedMotion ? 0 : Infinity,
				ease: "easeInOut",
			},
		},
	}

	return (
		<Box
			as="section"
			ref={containerRef}
			position="relative"
			height={height}
			overflow="hidden"
			role="banner"
		>
			{/* Parallax Background with Gradient Overlay */}
			<Box
				as={motion.div}
				position="absolute"
				top={0}
				left={0}
				right={0}
				bottom={0}
				style={{ y: backgroundY }}
				backgroundImage={
					currentBackgroundImage ? `url(${currentBackgroundImage})` : undefined
				}
				backgroundSize="cover"
				backgroundPosition="center"
				background={
					currentBackgroundImage
						? undefined
						: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7))"
				}
			transition="background-image 0.5s ease-in-out"
				_before={{
					content: '""',
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					background: currentBackgroundImage
						? "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7))"
						: undefined,
				}}
			/>

			{/* Hero Content */}
			<Box
				as={motion.div}
				variants={containerVariants}
				initial="hidden"
				animate="visible"
				position="relative"
				zIndex={1}
				height="100%"
				display="flex"
				alignItems="center"
				justifyContent="center"
				px={{ base: 4, md: 6 }}
				py={{ base: 8, md: 12 }}
			>
				<VStack spacing={{ base: 6, md: 8 }} maxW={maxWidth} textAlign="center">
					{/* Main Heading */}
					<Heading
						as={motion.h1}
						variants={itemVariants}
						size={{ base: "4xl", md: "6xl" }}
						color="white"
						fontFamily="heading"
						fontWeight="bold"
						textShadow="2px 2px 4px rgba(0,0,0,0.8)"
						lineHeight="1.2"
						maxW="900px"
					>
						{heading}
					</Heading>

					{/* Subheading */}
					<Text
						as={motion.p}
						variants={itemVariants}
						fontSize={{ base: "xl", md: "2xl" }}
						color="neutral.100"
						fontWeight="normal"
						maxW="700px"
						lineHeight="1.6"
					>
						{subheading}
					</Text>

					{/* CTA Buttons */}
					<Box
						as={motion.div}
						variants={itemVariants}
						w={{ base: "100%", md: "auto" }}
					>
						<HStack
							spacing={4}
							flexDirection={{ base: "column", md: "row" }}
							w={{ base: "100%", md: "auto" }}
						>
							<Button
								size="lg"
								bg="primary.500"
								color="white"
								onClick={onPrimaryClick}
								_hover={{
									bg: "primary.600",
									transform: "scale(1.05)",
									shadow: "lg",
								}}
								transition="all 0.3s ease"
								w={{ base: "100%", md: "auto" }}
								px={8}
								py={6}
								fontSize="lg"
								aria-label={`${primaryButtonLabel} button`}
							>
								{primaryButtonLabel}
							</Button>

							<Button
								size="lg"
								variant="outline"
								borderColor="primary.500"
								color="white"
								onClick={onSecondaryClick}
								_hover={{
									bg: "rgba(212, 175, 55, 0.1)",
									transform: "scale(1.05)",
									shadow: "lg",
								}}
								transition="all 0.3s ease"
								w={{ base: "100%", md: "auto" }}
								px={8}
								py={6}
								fontSize="lg"
								aria-label={`${secondaryButtonLabel} button`}
							>
								{secondaryButtonLabel}
							</Button>
						</HStack>
					</Box>
				</VStack>
			</Box>

			{/* Scroll Indicator */}
			{showScrollIndicator && (
				<Box
					as={motion.div}
					variants={scrollIndicatorVariants}
					animate="animate"
					position="absolute"
					bottom={8}
					left="50%"
					transform="translateX(-50%)"
					zIndex={1}
					textAlign="center"
					cursor="pointer"
					onClick={() => {
						window.scrollTo({
							top: window.innerHeight,
							behavior: "smooth",
						})
					}}
					role="button"
					tabIndex={0}
					aria-label="Scroll down to explore"
					onKeyDown={(e) => {
						if (e.key === "Enter" || e.key === " ") {
							e.preventDefault()
							window.scrollTo({
								top: window.innerHeight,
								behavior: "smooth",
							})
						}
					}}
					_hover={{
						opacity: 0.8,
					}}
					_focus={{
						outline: "2px solid",
						outlineColor: "primary.500",
						outlineOffset: "4px",
					}}
				>
					<VStack spacing={2}>
						<Icon
							as={FaChevronDown}
							boxSize={6}
							color="white"
							filter="drop-shadow(0 2px 4px rgba(0,0,0,0.5))"
						/>
						<Text
							fontSize="sm"
							color="neutral.100"
							fontWeight="medium"
							textShadow="1px 1px 2px rgba(0,0,0,0.8)"
							letterSpacing="wider"
							textTransform="uppercase"
						>
							{scrollIndicatorText}
						</Text>
					</VStack>
				</Box>
			)}
		</Box>
	)
}
