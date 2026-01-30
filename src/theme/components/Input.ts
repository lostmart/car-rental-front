// Input component theme using semantic colors
const Input = {
	baseStyle: {
		field: {
			borderRadius: "md",
			borderColor: "neutral.300",
			color: "text.primary",
			_hover: {
				borderColor: "neutral.400",
			},
			_focus: {
				borderColor: "brand.primary",
				boxShadow: "0 0 0 1px var(--chakra-colors-brand-primary)",
			},
			_placeholder: {
				color: "text.muted",
			},
			_disabled: {
				opacity: 0.6,
				cursor: "not-allowed",
			},
		},
	},
	variants: {
		outline: {
			field: {
				bg: "surface.light",
				borderWidth: "1px",
				borderColor: "neutral.300",
				_hover: {
					borderColor: "neutral.500",
				},
			},
		},
		filled: {
			field: {
				bg: "surface.muted",
				borderWidth: "1px",
				borderColor: "transparent",
				_hover: {
					bg: "neutral.300",
				},
				_focus: {
					bg: "surface.light",
					borderColor: "brand.primary",
				},
			},
		},
		flushed: {
			field: {
				borderBottom: "2px solid",
				borderColor: "neutral.300",
				borderRadius: "0",
				px: "0",
				bg: "transparent",
				_focus: {
					borderColor: "brand.primary",
					boxShadow: "0 1px 0 0 var(--chakra-colors-brand-primary)",
				},
			},
		},
	},
	sizes: {
		sm: {
			field: {
				fontSize: "sm",
				px: "3",
				h: "8",
			},
		},
		md: {
			field: {
				fontSize: "md",
				px: "4",
				h: "10",
			},
		},
		lg: {
			field: {
				fontSize: "lg",
				px: "4",
				h: "12",
			},
		},
	},
	defaultProps: {
		size: "md",
		variant: "outline",
	},
}

export default Input
