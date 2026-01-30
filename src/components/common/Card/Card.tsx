import {
	Card as ChakraCard,
	CardBody,
	Image,
	Heading,
	Text,
	CardProps as ChakraCardProps,
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
	return (
		<ChakraCard
			onClick={onClick}
			cursor={onClick ? "pointer" : "default"}
			_hover={onClick ? { shadow: "lg", transform: "translateY(-2px)" } : {}}
			transition="all 0.2s"
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
					<Text color="neutral.600" mb={4}>
						{description}
					</Text>
				)}
				{children}
			</CardBody>
		</ChakraCard>
	)
}
