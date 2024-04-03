import { ReactNode } from "react"

type ButtonProps = {
	className: string
	onClick: () => void
	children: ReactNode
}

export default function ButtonComp({
	children,
	className,
	onClick,
}: ButtonProps) {
	return (
		<button className={className} onClick={onClick}>
			{children}
		</button>
	)
}
