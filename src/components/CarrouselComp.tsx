import { Box, Heading, Text, Button, Image } from "@chakra-ui/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, Autoplay, A11y } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { type ImageSource } from "../assets/carouselImages"

/**
 * Props for the Carousel component
 */
export interface CarouselProps {
	/** Array of images to display in the carousel */
	images: ImageSource[]
	/** Overlay heading text */
	overlayHeading?: string
	/** Overlay subtext */
	overlayText?: string
	/** Overlay button label */
	overlayButtonLabel?: string
	/** Overlay button click handler */
	onOverlayButtonClick?: () => void
	/** Show overlay content */
	showOverlay?: boolean
	/** Autoplay delay in milliseconds */
	autoplayDelay?: number
	/** Enable autoplay */
	enableAutoplay?: boolean
	/** Enable navigation arrows */
	enableNavigation?: boolean
	/** Enable pagination */
	enablePagination?: boolean
	/** Pagination type */
	paginationType?: "bullets" | "progressbar" | "fraction"
	/** Enable loop */
	enableLoop?: boolean
	/** Maximum image height */
	maxImageHeight?: string
	/** Accessibility label for carousel section */
	ariaLabel?: string
}

/**
 * Carousel Component
 *
 * A fully accessible, responsive carousel component built with Swiper.
 * Supports autoplay, navigation, pagination, and customizable overlay content.
 *
 * Accessibility:
 * - Semantic section element with aria-label
 * - A11y module for screen reader support
 * - Keyboard navigation support
 * - Descriptive alt text for images
 *
 * @example
 * ```tsx
 * <Carousel
 *   images={carouselImages}
 *   overlayHeading="Classic Cars"
 *   overlayText="Discover our collection"
 *   overlayButtonLabel="View Details"
 *   onOverlayButtonClick={() => navigate('/cars')}
 * />
 * ```
 */
const Carousel: React.FC<CarouselProps> = ({
	images,
	overlayHeading,
	overlayText,
	overlayButtonLabel = "View Details",
	onOverlayButtonClick,
	showOverlay = true,
	autoplayDelay = 2500,
	enableAutoplay = true,
	enableNavigation = true,
	enablePagination = true,
	paginationType = "progressbar",
	enableLoop = true,
	maxImageHeight = "460px",
	ariaLabel = "Featured carousel",
}) => {
	return (
		<Box as="section" aria-label={ariaLabel} w="100%">
			<Swiper
				pagination={enablePagination ? { type: paginationType } : false}
				navigation={enableNavigation}
				loop={enableLoop}
				autoplay={enableAutoplay ? {
					delay: autoplayDelay,
					disableOnInteraction: false,
				} : false}
				a11y={{
					prevSlideMessage: "Previous slide",
					nextSlideMessage: "Next slide",
					paginationBulletMessage: "Go to slide {{index}}",
				}}
				modules={[Pagination, Navigation, Autoplay, A11y]}
			>
				{images.map((img: ImageSource) => {
					return (
						<SwiperSlide key={img.src}>
							<Box position="relative" display="flex" alignItems="center">
								<Image
									src={img.src}
									alt={img.alt}
									width="100%"
									maxH={maxImageHeight}
									objectFit="cover"
									loading="lazy"
								/>
								{showOverlay && (overlayHeading || overlayText || overlayButtonLabel) && (
									<Box
										position="absolute"
										top="52%"
										left="50%"
										transform="translate(-50%, -50%)"
										bg="rgba(255, 255, 255, 0.12)"
										backdropFilter="blur(4px)"
										borderRadius="13px"
										width="92%"
										maxW="600px"
										p={8}
										boxShadow="0 4px 30px rgba(0, 0, 0, 0.5)"
										border="1px solid rgba(255, 255, 255, 0.23)"
										textAlign="center"
										color="white"
									>
										{overlayHeading && (
											<Heading
												as="h2"
												size="xl"
												mb={4}
												textShadow="1px 1px 3px rgba(0, 0, 0, 0.76)"
											>
												{overlayHeading}
											</Heading>
										)}
										{overlayText && (
											<Text
												fontSize="lg"
												mb={4}
												color="accent.700"
												textShadow="1px 1px 2px rgba(233, 233, 233, 0.76)"
											>
												{overlayText}
											</Text>
										)}
										{overlayButtonLabel && (
											<Button
												bg="accent.700"
												color="white"
												onClick={onOverlayButtonClick}
												_hover={{ bg: "accent.800", shadow: "lg" }}
												size="md"
												aria-label={`${overlayButtonLabel} button`}
											>
												{overlayButtonLabel}
											</Button>
										)}
									</Box>
								)}
							</Box>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</Box>
	)
}

export default Carousel
