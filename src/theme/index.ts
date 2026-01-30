import { extendTheme } from "@chakra-ui/react"

// Luxury color palette for rental car application
const colors = {
	primary: {
		50: "#FBF7EF",
		100: "#F5ECD7",
		200: "#EAD9AF",
		300: "#DFC687",
		400: "#D4B35F",
		500: "#D4AF37", // Main gold
		600: "#C5A572", // Lighter gold
		700: "#A88C2F",
		800: "#7D6823",
		900: "#534417",
	},
	secondary: {
		50: "#F9E5EA",
		100: "#EDB8C5",
		200: "#E08BA0",
		300: "#D45E7B",
		400: "#C73156",
		500: "#A0153E", // Lighter burgundy
		600: "#800020", // Main burgundy
		700: "#66001A",
		800: "#4D0013",
		900: "#33000D",
	},
	neutral: {
		50: "#FFFFFF",
		100: "#FAF9F6", // Cream
		200: "#F5F5DC", // Off-white/Beige
		300: "#E8E8D8",
		400: "#DCDCC4",
		500: "#CFCFB0",
		600: "#A5A58D",
		700: "#7B7B6A",
		800: "#525246",
		900: "#282823",
	},
	accent: {
		50: "#F5F5F5",
		100: "#D9D9D9",
		200: "#BDBDBD",
		300: "#A1A1A1",
		400: "#858585",
		500: "#696969",
		600: "#4D4D4D",
		700: "#2C2C2C", // Dark charcoal
		800: "#1F1F1F",
		900: "#121212",
	},
}

// Typography configuration
const fonts = {
	heading: "'Playfair Display', serif",
	body: "'Inter', sans-serif",
}

// Global styles
const styles = {
	global: {
		body: {
			bg: "neutral.100",
			color: "accent.700",
			fontFamily: "body",
		},
		"*::placeholder": {
			color: "neutral.500",
		},
		"*, *::before, *::after": {
			borderColor: "neutral.300",
		},
	},
}

// Component style overrides
const components = {
	Button: {
		baseStyle: {
			fontWeight: "semibold",
			borderRadius: "md",
		},
		variants: {
			solid: {
				bg: "primary.500",
				color: "white",
				_hover: {
					bg: "primary.600",
					_disabled: {
						bg: "primary.500",
					},
				},
			},
			outline: {
				borderColor: "primary.500",
				color: "primary.500",
				_hover: {
					bg: "primary.50",
				},
			},
			ghost: {
				color: "primary.500",
				_hover: {
					bg: "primary.50",
				},
			},
		},
		defaultProps: {
			variant: "solid",
		},
	},
	Heading: {
		baseStyle: {
			fontFamily: "heading",
			fontWeight: "bold",
			color: "accent.700",
		},
	},
	Text: {
		baseStyle: {
			fontFamily: "body",
			color: "accent.700",
		},
	},
}

// Create and export the custom theme
const theme = extendTheme({
	colors,
	fonts,
	styles,
	components,
})

export default theme
