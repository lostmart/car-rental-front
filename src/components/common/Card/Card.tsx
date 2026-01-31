import {
	Card as ChakraCard,
	CardBody,
	Image,
	Heading,
	Text,
	CardProps as ChakraCardProps,
	useColorModeValue,
} from "@chakra-ui/react"
import { ReactNode } from "react"

type CardProps = {
	title?: string
	description?: string
	image?: string
	imageAlt?: string
	children?: ReactNode
	onClick?: () => void
} & ChakraCardProps

export default function Card({
	title,
	description,
	image,
	imageAlt = "Card image",
	children,
	onClick,
	...chakraProps
}: CardProps) {
	const bgColor = useColorModeValue("white", "gray.800")
	const borderColor = useColorModeValue("gray.200", "gray.700")

	return (
		<ChakraCard
			onClick={onClick}
			cursor={onClick ? "pointer" : "default"}
			_hover={onClick ? { shadow: "lg", transform: "translateY(-2px)" } : {}}
			transition="all 0.2s"
			bg={bgColor}
			borderColor={borderColor}
			borderWidth="1px"
			{...chakraProps}
		>
			{image && <Image src={image} alt={imageAlt} objectFit="cover" />}
			<CardBody>
				{title && (
					<Heading size="md" mb={2}>
						{title}
					</Heading>
				)}
				{description && (
					<Text color="text.secondary" mb={4}>
						{description}
					</Text>
				)}
				{children}
			</CardBody>
		</ChakraCard>
	)
}
