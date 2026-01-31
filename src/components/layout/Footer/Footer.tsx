import { Box, Container, Text, VStack, Divider, useColorModeValue } from "@chakra-ui/react"
import UrlLink from "../../../interfaces/UrlLink"
import SocialButtons from "../SocialButtons/SocialButtons"

type FooterProps = {
	socialList: UrlLink[]
}

const Footer: React.FC<FooterProps> = ({ socialList }) => {
	const currentYear = new Date().getFullYear()
	const bgColor = useColorModeValue("accent.700", "gray.900")
	const textColor = useColorModeValue("white", "gray.100")
	const dividerColor = useColorModeValue("neutral.600", "gray.700")
	const copyrightColor = useColorModeValue("neutral.400", "gray.500")

	return (
		<Box as="footer" bg={bgColor} color={textColor} py={8}>
			<Container maxW="container.xl">
				<VStack spacing={6}>
					<SocialButtons socialList={socialList} />
					<Divider borderColor={dividerColor} />
					<Text fontSize="sm" color={copyrightColor}>
						© {currentYear} Car Rental. All rights reserved.
					</Text>
				</VStack>
			</Container>
		</Box>
	)
}

export default Footer
