import { HStack, IconButton } from "@chakra-ui/react"
import UrlLink from "../../interfaces/UrlLink"

type SocialButtonsProps = {
	socialList: UrlLink[]
}

const SocialButtons: React.FC<SocialButtonsProps> = ({ socialList }) => {
	return (
		<HStack spacing={2}>
			{socialList.map((item) => (
				<IconButton
					key={item.urlLink}
					as="a"
					href={item.urlLink}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={`Visit our ${item.urlLink} page`}
					icon={<item.icon />}
					size="sm"
					variant="ghost"
					colorScheme="gray"
					_hover={{ bg: "gray.200" }}
				/>
			))}
		</HStack>
	)
}

export default SocialButtons
