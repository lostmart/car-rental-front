import { Box, Container, Heading, Text, Link as ChakraLink, VStack, Code } from "@chakra-ui/react"
import { useRouteError, Link as RouterLink } from "react-router-dom"

interface ErrorType {
	statusText?: string
	message?: string
	status: number
	data: string
	internal?: boolean
}

export default function ErrorPage() {
	const error = useRouteError() as ErrorType
	console.error(error)

	return (
		<Container maxW="container.md" py={20}>
			<VStack spacing={6} align="start">
				<Heading as="h1" size="2xl" color="secondary.500">
					Oops!
				</Heading>
				<Text fontSize="lg">
					Sorry, an unexpected error has occurred.
				</Text>
				{(error.statusText || error.message) && (
					<Code p={4} borderRadius="md" width="100%">
						{error.statusText || error.message}
					</Code>
				)}
				{error.data && (
					<Code p={4} borderRadius="md" width="100%">
						{error.data}
					</Code>
				)}
				<ChakraLink
					as={RouterLink}
					to="/"
					color="primary.500"
					fontSize="lg"
					_hover={{ textDecoration: "underline" }}
				>
					go back home
				</ChakraLink>
			</VStack>
		</Container>
	)
}
