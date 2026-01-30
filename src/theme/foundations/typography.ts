// Typography configuration with semantic text styles

// Font families - Two maximum for consistency
const fonts = {
	heading: "'Playfair Display', serif", // Display font for headlines
	body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", // Clean sans-serif with system fallbacks
}

// Font sizes scale
const fontSizes = {
	xs: "0.75rem", // 12px
	sm: "0.875rem", // 14px
	md: "1rem", // 16px
	lg: "1.125rem", // 18px
	xl: "1.25rem", // 20px
	"2xl": "1.5rem", // 24px
	"3xl": "1.875rem", // 30px
	"4xl": "2.25rem", // 36px
	"5xl": "3rem", // 48px
	"6xl": "3.75rem", // 60px
	"7xl": "4.5rem", // 72px
	"8xl": "6rem", // 96px
	"9xl": "8rem", // 128px
}

// Font weights
const fontWeights = {
	hairline: 100,
	thin: 200,
	light: 300,
	normal: 400,
	medium: 500,
	semibold: 600,
	bold: 700,
	extrabold: 800,
	black: 900,
}

// Line heights for comfortable reading
const lineHeights = {
	none: 1,
	tight: 1.25,
	snug: 1.375,
	normal: 1.5,
	relaxed: 1.625,
	loose: 2,
}

// Letter spacing
const letterSpacings = {
	tighter: "-0.05em",
	tight: "-0.025em",
	normal: "0",
	wide: "0.025em",
	wider: "0.05em",
	widest: "0.1em",
}

// Semantic text styles for consistent typography usage
const textStyles = {
	// Eyebrow text - Small uppercase labels above sections
	eyebrow: {
		fontFamily: "body",
		fontSize: "xs",
		fontWeight: "semibold",
		textTransform: "uppercase",
		letterSpacing: "widest",
		color: "text.accent",
		lineHeight: "tight",
	},

	// Section titles - Large bold headlines
	sectionTitle: {
		fontFamily: "heading",
		fontSize: { base: "3xl", md: "4xl", lg: "5xl" },
		fontWeight: "bold",
		lineHeight: "tight",
		color: "text.primary",
		letterSpacing: "tight",
	},

	// Section subtitles - Medium size supporting text
	sectionSubtitle: {
		fontFamily: "body",
		fontSize: { base: "lg", md: "xl" },
		fontWeight: "normal",
		lineHeight: "relaxed",
		color: "text.secondary",
	},

	// Hero title - Extra large display text
	heroTitle: {
		fontFamily: "heading",
		fontSize: { base: "4xl", md: "5xl", lg: "6xl", xl: "7xl" },
		fontWeight: "bold",
		lineHeight: "none",
		color: "text.primary",
		letterSpacing: "tighter",
	},

	// Hero subtitle
	heroSubtitle: {
		fontFamily: "body",
		fontSize: { base: "xl", md: "2xl", lg: "3xl" },
		fontWeight: "normal",
		lineHeight: "normal",
		color: "text.secondary",
	},

	// Body text - Comfortable reading for paragraphs
	body: {
		fontFamily: "body",
		fontSize: "md",
		fontWeight: "normal",
		lineHeight: "relaxed",
		color: "text.primary",
	},

	// Body large - Emphasized body text
	bodyLarge: {
		fontFamily: "body",
		fontSize: "lg",
		fontWeight: "normal",
		lineHeight: "relaxed",
		color: "text.primary",
	},

	// Body small - Fine print, captions
	bodySmall: {
		fontFamily: "body",
		fontSize: "sm",
		fontWeight: "normal",
		lineHeight: "normal",
		color: "text.secondary",
	},

	// Card title - Medium-large semi-bold for cards
	cardTitle: {
		fontFamily: "heading",
		fontSize: { base: "xl", md: "2xl" },
		fontWeight: "semibold",
		lineHeight: "snug",
		color: "text.primary",
	},

	// Card subtitle
	cardSubtitle: {
		fontFamily: "body",
		fontSize: "sm",
		fontWeight: "normal",
		lineHeight: "normal",
		color: "text.secondary",
	},

	// Feature title - Medium bold for feature sections
	featureTitle: {
		fontFamily: "heading",
		fontSize: "lg",
		fontWeight: "bold",
		lineHeight: "snug",
		color: "text.primary",
	},

	// Feature description
	featureDescription: {
		fontFamily: "body",
		fontSize: "md",
		fontWeight: "normal",
		lineHeight: "relaxed",
		color: "text.secondary",
	},

	// Price display - Bold and accent colored
	price: {
		fontFamily: "heading",
		fontSize: { base: "2xl", md: "3xl" },
		fontWeight: "bold",
		lineHeight: "none",
		color: "text.accent",
	},

	// Price small - For compact displays
	priceSmall: {
		fontFamily: "heading",
		fontSize: "xl",
		fontWeight: "semibold",
		lineHeight: "none",
		color: "text.accent",
	},

	// Link text
	link: {
		fontFamily: "body",
		fontSize: "md",
		fontWeight: "medium",
		textDecoration: "none",
		color: "text.link",
		_hover: {
			textDecoration: "underline",
			color: "text.linkHover",
		},
	},

	// Button text
	button: {
		fontFamily: "body",
		fontSize: "md",
		fontWeight: "semibold",
		letterSpacing: "wide",
		lineHeight: "none",
	},

	// Navigation link
	navLink: {
		fontFamily: "body",
		fontSize: "md",
		fontWeight: "medium",
		lineHeight: "normal",
		color: "text.primary",
		_hover: {
			color: "text.accent",
		},
	},

	// Caption - Small muted text
	caption: {
		fontFamily: "body",
		fontSize: "xs",
		fontWeight: "normal",
		lineHeight: "normal",
		color: "text.muted",
		fontStyle: "italic",
	},

	// Label - Form labels and input labels
	label: {
		fontFamily: "body",
		fontSize: "sm",
		fontWeight: "medium",
		lineHeight: "normal",
		color: "text.primary",
	},
}

const typography = {
	fonts,
	fontSizes,
	fontWeights,
	lineHeights,
	letterSpacings,
	textStyles,
}

export default typography
