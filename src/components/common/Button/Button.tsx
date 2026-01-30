import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from "@chakra-ui/react"
import { ReactNode } from "react"

type ButtonProps = {
	onClick?: () => void
	children: ReactNode
} & ChakraButtonProps

export default function Button({
	children,
	onClick,
	...chakraProps
}: ButtonProps) {
	return (
		<ChakraButton onClick={onClick} {...chakraProps}>
			{children}
		</ChakraButton>
	)
}
