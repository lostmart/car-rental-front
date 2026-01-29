import { ReactNode } from "react"
import styles from "./CardComp.module.css"

type CardProps = {
	title?: string
	description?: string
	image?: string
	imageAlt?: string
	children?: ReactNode
	onClick?: () => void
	className?: string
}

export default function CardComp({
	title,
	description,
	image,
	imageAlt = "Card image",
	children,
	onClick,
	className = "",
}: CardProps) {
	const cardClasses = `${styles.card} ${className}`.trim()

	return (
		<div className={cardClasses} onClick={onClick}>
			{image && (
				<div className={styles.imageWrapper}>
					<img src={image} alt={imageAlt} className={styles.image} />
				</div>
			)}
			<div className={styles.content}>
				{title && <h3 className={styles.title}>{title}</h3>}
				{description && <p className={styles.description}>{description}</p>}
				{children}
			</div>
		</div>
	)
}
