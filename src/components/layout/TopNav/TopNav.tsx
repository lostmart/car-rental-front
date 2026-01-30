import { Box, Container, HStack, Link, Icon } from "@chakra-ui/react"
import SocialButtons from "../SocialButtons/SocialButtons"
import UrlLink from "../../../interfaces/UrlLink"

/**
 * Props for the TopNav component
 */
export interface TopNavProps {
	/** Array of contact links (phone, email, etc.) */
	contactLinks: UrlLink[]
	/** Array of social media links */
	socialLinks: UrlLink[]
	/** Background color */
	backgroundColor?: string
	/** Text color for links */
	textColor?: string
	/** Hover color for links */
	hoverColor?: string
}

/**
 * TopNav Component
 *
 * A compact top navigation bar displaying contact information and social media links.
 * Provides quick access to contact methods and social profiles.
 *
 * Accessibility:
 * - Semantic links with proper href attributes
 * - Icons paired with text for contact links
 * - Descriptive aria-labels for social buttons
 *
 * @example
 * ```tsx
 * const contactLinks = [
 *   { urlLink: "tel:+1234567890", text: "+1 234 567 890", icon: FaPhone },
 *   { urlLink: "mailto:info@example.com", text: "info@example.com", icon: FaEnvelope }
 * ];
 * const socialLinks = [
 *   { urlLink: "https://facebook.com", icon: FaFacebookF },
 *   { urlLink: "https://twitter.com", icon: FaTwitter }
 * ];
 * <TopNav contactLinks={contactLinks} socialLinks={socialLinks} />
 * ```
 */
export default function TopNav({
	contactLinks,
	socialLinks,
	backgroundColor = "neutral.100",
	textColor = "accent.700",
	hoverColor = "primary.600",
}: TopNavProps) {

	return (
		<Box bg={backgroundColor} py={2}>
			<Container maxW="container.xl">
				<HStack justify="space-between" flexWrap="wrap">
					<HStack spacing={6} flexWrap="wrap">
						{contactLinks.map((item) => (
							<Link
								key={item.urlLink}
								href={item.urlLink}
								display="flex"
								alignItems="center"
								fontSize="sm"
								color={textColor}
								_hover={{ color: hoverColor }}
							>
								<Icon as={item.icon} mr={2} />
								{item.text}
							</Link>
						))}
					</HStack>
					<SocialButtons socialList={socialLinks} />
				</HStack>
			</Container>
		</Box>
	)
}
