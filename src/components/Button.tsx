type ButtonProps = {
	style: React.CSSProperties
	onClick: () => void
}

export default function Button({ style, onClick }: ButtonProps) {
	return (
		<button style={style} onClick={onClick}>
			hello !
		</button>
	)
}
