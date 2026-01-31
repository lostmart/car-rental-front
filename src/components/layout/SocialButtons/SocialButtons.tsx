import { HStack, IconButton } from "@chakra-ui/react"
import UrlLink from "../../../interfaces/UrlLink"

/**
 * Props for the SocialButtons component
 */
export interface SocialButtonsProps {
	/** Array of social media links with icons */
	socialList: UrlLink[]
	/** Button size */
	size?: "xs" | "sm" | "md" | "lg"
	/** Button variant */
	variant?: "ghost" | "solid" | "outline"
	/** Hover background color */
	hoverBg?: string
	/** Spacing between buttons */
	spacing?: number | string
	/** Prefix for aria-label text */
	ariaLabelPrefix?: string
}

const SocialButtons: React.FC<SocialButtonsProps> = ({
	socialList,
	size = "sm",
	variant = "ghost",
	hoverBg = "primary.100",
	spacing = 2,
	ariaLabelPrefix = "Visit our",
}) => {
	return (
		<HStack spacing={spacing}>
			{socialList.map((item) => {
				// Extract platform name from URL for better aria-label
				const urlObj = new URL(item.urlLink)
				const hostname = urlObj.hostname.replace("www.", "")
				const platformName = item.text || hostname

				return (
					<IconButton
						key={item.urlLink}
						as="a"
						href={item.urlLink}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`${ariaLabelPrefix} ${platformName} page`}
						icon={<item.icon />}
						size={size}
						variant={variant}
						_hover={{ bg: hoverBg }}
					/>
				)
			})}
		</HStack>
	)
}

export default SocialButtons
