import {
	Box,
	Container,
	HStack,
	Text,
	VStack,
	Divider,
} from "@chakra-ui/react"
import UrlLink from "../interfaces/UrlLink"
import SocialButtons from "./ui-parts/SocialButtons"

type FooterComponentProps = {
	socialList: UrlLink[]
}

const FooterComponent: React.FC<FooterComponentProps> = ({ socialList }) => {
	const currentYear = new Date().getFullYear()

	return (
		<Box as="footer" bg="gray.800" color="white" py={8}>
			<Container maxW="container.xl">
				<VStack spacing={6}>
					<SocialButtons socialList={socialList} />
					<Divider borderColor="gray.600" />
					<Text fontSize="sm" color="gray.400">
						© {currentYear} Car Rental. All rights reserved.
					</Text>
				</VStack>
			</Container>
		</Box>
	)
}

export default FooterComponent
