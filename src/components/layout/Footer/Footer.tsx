import { Box, Container, Text, VStack, Divider } from "@chakra-ui/react"
import UrlLink from "../../../interfaces/UrlLink"
import SocialButtons from "../SocialButtons/SocialButtons"

type FooterProps = {
	socialList: UrlLink[]
}

const Footer: React.FC<FooterProps> = ({ socialList }) => {
	const currentYear = new Date().getFullYear()

	return (
		<Box as="footer" bg="accent.700" color="white" py={8}>
			<Container maxW="container.xl">
				<VStack spacing={6}>
					<SocialButtons socialList={socialList} />
					<Divider borderColor="neutral.600" />
					<Text fontSize="sm" color="neutral.400">
						© {currentYear} Car Rental. All rights reserved.
					</Text>
				</VStack>
			</Container>
		</Box>
	)
}

export default Footer
