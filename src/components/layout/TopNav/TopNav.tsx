import {
	Box,
	Container,
	HStack,
	Link,
	Icon,
	useColorModeValue,
} from "@chakra-ui/react"
import SocialButtons from "../SocialButtons/SocialButtons"
import ColorModeToggle from "../../common/ColorModeToggle/ColorModeToggle"
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

export default function TopNav({
	contactLinks,
	socialLinks,
	backgroundColor = useColorModeValue("accent.700", "gray.900"),
	textColor = useColorModeValue("white", "gray.100"),
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
					<HStack spacing={3}>
						<SocialButtons socialList={socialLinks} />
						<ColorModeToggle />
					</HStack>
				</HStack>
			</Container>
		</Box>
	)
}
