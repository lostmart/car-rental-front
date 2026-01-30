// Button component theme using semantic colors
const Button = {
	baseStyle: {
		fontWeight: "semibold",
		borderRadius: "md",
		transition: "all 0.2s",
		_focus: {
			boxShadow: "outline",
		},
		_disabled: {
			opacity: 0.6,
			cursor: "not-allowed",
			pointerEvents: "none",
		},
		_loading: {
			opacity: 0.8,
		},
	},
	variants: {
		solid: {
			bg: "brand.primary",
			color: "text.inverse",
			_hover: {
				bg: "brand.accent",
				transform: "translateY(-2px)",
				boxShadow: "lg",
				_disabled: {
					bg: "brand.primary",
					transform: "none",
					boxShadow: "none",
				},
				_loading: {
					bg: "brand.primary",
					transform: "none",
				},
			},
			_active: {
				transform: "translateY(0)",
				bg: "gold.700",
			},
			_disabled: {
				bg: "brand.primary",
				opacity: 0.5,
			},
			_loading: {
				bg: "brand.primary",
			},
		},
		outline: {
			borderColor: "brand.primary",
			borderWidth: "2px",
			color: "brand.primary",
			bg: "transparent",
			_hover: {
				bg: "gold.50",
				borderColor: "brand.accent",
				transform: "translateY(-2px)",
				boxShadow: "md",
			},
			_active: {
				transform: "translateY(0)",
				bg: "gold.100",
			},
			_disabled: {
				borderColor: "gray.300",
				color: "gray.400",
			},
		},
		ghost: {
			color: "brand.primary",
			bg: "transparent",
			_hover: {
				bg: "gold.50",
			},
			_active: {
				bg: "gold.100",
			},
		},
		navy: {
			bg: "brand.secondary",
			color: "text.inverse",
			_hover: {
				bg: "navy.800",
				transform: "translateY(-2px)",
				boxShadow: "lg",
				_disabled: {
					bg: "brand.secondary",
					transform: "none",
					boxShadow: "none",
				},
			},
			_active: {
				transform: "translateY(0)",
				bg: "navy.700",
			},
			_disabled: {
				bg: "brand.secondary",
				opacity: 0.5,
			},
		},
		link: {
			color: "text.link",
			bg: "transparent",
			px: 0,
			_hover: {
				color: "text.linkHover",
				textDecoration: "underline",
			},
		},
		// Submit button variant - optimized for forms
		submit: {
			bg: "brand.primary",
			color: "text.inverse",
			fontWeight: "bold",
			w: { base: "full", md: "auto" },
			_hover: {
				bg: "brand.accent",
				transform: "translateY(-2px)",
				boxShadow: "lg",
				_disabled: {
					bg: "brand.primary",
					transform: "none",
					boxShadow: "none",
				},
				_loading: {
					bg: "brand.primary",
					transform: "none",
				},
			},
			_active: {
				transform: "translateY(0)",
				bg: "gold.700",
			},
			_disabled: {
				bg: "brand.primary",
				opacity: 0.5,
				cursor: "not-allowed",
			},
			_loading: {
				bg: "brand.primary",
				_hover: {
					bg: "brand.primary",
				},
			},
		},
	},
	sizes: {
		xs: {
			fontSize: "xs",
			px: 3,
			py: 1,
			h: "6",
		},
		sm: {
			fontSize: "sm",
			px: 4,
			py: 2,
			h: "8",
		},
		md: {
			fontSize: "md",
			px: 6,
			py: 3,
			h: "10",
		},
		lg: {
			fontSize: "lg",
			px: 8,
			py: 4,
			h: "12",
		},
		xl: {
			fontSize: "xl",
			px: 10,
			py: 5,
			h: "14",
		},
	},
	defaultProps: {
		variant: "solid",
		size: "md",
	},
}

export default Button
