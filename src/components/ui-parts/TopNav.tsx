import { Box, Container, HStack, Link, Icon } from "@chakra-ui/react"
import {
	FaPhone,
	FaEnvelope,
	FaFacebookF,
	FaTwitter,
	FaInstagram,
} from "react-icons/fa"
import SocialButtons from "./SocialButtons"
import UrlLink from "../../interfaces/UrlLink"

export default function TopNav() {
	const urlList: UrlLink[] = [
		{
			urlLink: "tel:+1 987 654 3210",
			text: "+1 987 654 3210",
			icon: FaPhone,
		},
		{
			urlLink: "mailto:name@email.com",
			text: "contact@car-rental.com",
			icon: FaEnvelope,
		},
	]

	const socialList: UrlLink[] = [
		{
			urlLink: "https://www.facebook.com/",
			icon: FaFacebookF,
		},
		{
			urlLink: "https://twitter.com/",
			icon: FaTwitter,
		},
		{
			urlLink: "https://www.instagram.com/",
			icon: FaInstagram,
		},
	]

	return (
		<Box bg="gray.100" py={2}>
			<Container maxW="container.xl">
				<HStack justify="space-between" flexWrap="wrap">
					<HStack spacing={6} flexWrap="wrap">
						{urlList.map((item) => (
							<Link
								key={item.urlLink}
								href={item.urlLink}
								display="flex"
								alignItems="center"
								fontSize="sm"
								color="gray.700"
								_hover={{ color: "blue.600" }}
							>
								<Icon as={item.icon} mr={2} />
								{item.text}
							</Link>
						))}
					</HStack>
					<SocialButtons socialList={socialList} />
				</HStack>
			</Container>
		</Box>
	)
}
