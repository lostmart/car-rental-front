// Text component theme with semantic variants
const Text = {
	baseStyle: {
		fontFamily: "body",
		color: "text.primary",
		lineHeight: "relaxed",
	},
	variants: {
		// Semantic text variants matching textStyles
		eyebrow: {
			fontFamily: "body",
			fontSize: "xs",
			fontWeight: "semibold",
			textTransform: "uppercase",
			letterSpacing: "widest",
			color: "text.accent",
			lineHeight: "tight",
		},
		body: {
			fontSize: "md",
			fontWeight: "normal",
			lineHeight: "relaxed",
			color: "text.primary",
		},
		bodyLarge: {
			fontSize: "lg",
			fontWeight: "normal",
			lineHeight: "relaxed",
			color: "text.primary",
		},
		bodySmall: {
			fontSize: "sm",
			fontWeight: "normal",
			lineHeight: "normal",
			color: "text.secondary",
		},
		muted: {
			color: "text.secondary",
		},
		accent: {
			color: "text.accent",
			fontWeight: "semibold",
		},
		inverse: {
			color: "text.inverse",
		},
		caption: {
			fontSize: "xs",
			fontWeight: "normal",
			color: "text.muted",
			fontStyle: "italic",
		},
		label: {
			fontSize: "sm",
			fontWeight: "medium",
			color: "text.primary",
		},
		price: {
			fontFamily: "heading",
			fontSize: { base: "2xl", md: "3xl" },
			fontWeight: "bold",
			color: "text.accent",
			lineHeight: "none",
		},
		priceSmall: {
			fontFamily: "heading",
			fontSize: "xl",
			fontWeight: "semibold",
			color: "text.accent",
			lineHeight: "none",
		},
	},
	defaultProps: {
		variant: "body",
	},
}

export default Text
