// Button component theme using semantic colors
const Button = {
	baseStyle: {
		fontWeight: "semibold",
		borderRadius: "md",
		transition: "all 0.2s",
	},
	variants: {
		solid: {
			bg: "brand.primary",
			color: "text.inverse",
			_hover: {
				bg: "brand.accent",
				transform: "translateY(-2px)",
				boxShadow: "md",
				_disabled: {
					bg: "brand.primary",
					transform: "none",
					boxShadow: "none",
				},
			},
			_active: {
				transform: "translateY(0)",
			},
		},
		outline: {
			borderColor: "brand.primary",
			borderWidth: "2px",
			color: "brand.primary",
			_hover: {
				bg: "gold.50",
				borderColor: "brand.accent",
			},
		},
		ghost: {
			color: "brand.primary",
			_hover: {
				bg: "gold.50",
			},
		},
		navy: {
			bg: "brand.secondary",
			color: "text.inverse",
			_hover: {
				bg: "navy.800",
				transform: "translateY(-2px)",
				boxShadow: "md",
				_disabled: {
					bg: "brand.secondary",
					transform: "none",
					boxShadow: "none",
				},
			},
			_active: {
				transform: "translateY(0)",
			},
		},
		link: {
			color: "text.link",
			_hover: {
				color: "text.linkHover",
				textDecoration: "underline",
			},
		},
	},
	sizes: {
		sm: {
			fontSize: "sm",
			px: 4,
			py: 2,
		},
		md: {
			fontSize: "md",
			px: 6,
			py: 3,
		},
		lg: {
			fontSize: "lg",
			px: 8,
			py: 4,
		},
	},
	defaultProps: {
		variant: "solid",
		size: "md",
	},
}

export default Button
