import { Button, ButtonProps as ChakraButtonProps } from "@chakra-ui/react"
import { ReactNode } from "react"

type ButtonProps = {
	onClick?: () => void
	children: ReactNode
} & ChakraButtonProps

export default function ButtonComp({
	children,
	onClick,
	...chakraProps
}: ButtonProps) {
	return (
		<Button onClick={onClick} {...chakraProps}>
			{children}
		</Button>
	)
}
