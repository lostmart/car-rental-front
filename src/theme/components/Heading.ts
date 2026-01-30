// Heading component theme using semantic colors
const Heading = {
	baseStyle: {
		fontFamily: "heading",
		fontWeight: "bold",
		color: "text.primary",
		lineHeight: "shorter",
	},
	variants: {
		default: {
			color: "text.primary",
		},
		accent: {
			color: "text.accent",
		},
		inverse: {
			color: "text.inverse",
		},
		gradient: {
			bgGradient: "linear(to-r, brand.primary, brand.accent)",
			bgClip: "text",
			color: "transparent",
		},
	},
	sizes: {
		xs: {
			fontSize: "xl",
			lineHeight: "shorter",
		},
		sm: {
			fontSize: "2xl",
			lineHeight: "shorter",
		},
		md: {
			fontSize: "3xl",
			lineHeight: "shorter",
		},
		lg: {
			fontSize: "4xl",
			lineHeight: "shorter",
		},
		xl: {
			fontSize: "5xl",
			lineHeight: "shorter",
		},
		"2xl": {
			fontSize: "6xl",
			lineHeight: "none",
		},
		"3xl": {
			fontSize: "7xl",
			lineHeight: "none",
			letterSpacing: "tight",
		},
	},
	defaultProps: {
		size: "md",
		variant: "default",
	},
}

export default Heading
