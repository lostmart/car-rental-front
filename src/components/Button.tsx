import { ComponentPropsWithRef } from "react"

type ButtonProps = {
	style: React.CSSProperties
	onClick: () => void
	componentsProps: ComponentPropsWithRef<"button">
}

export default function Button({ style, onClick }: ButtonProps) {
	return (
		<button style={style} onClick={onClick}>
			hello !
		</button>
	)
}
