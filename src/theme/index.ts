import { extendTheme } from "@chakra-ui/react"

// Import foundations
import colors from "./foundations/colors"
import typography from "./foundations/typography"
import spacing from "./foundations/spacing"

// Import component themes
import Button from "./components/Button"
import Heading from "./components/Heading"
import Input from "./components/Input"
import Text from "./components/Text"
import Link from "./components/Link"

// Global styles using semantic colors
const styles = {
	global: {
		body: {
			bg: "surface.offWhite",
			color: "text.primary",
			fontFamily: "body",
		},
		"*::placeholder": {
			color: "text.muted",
		},
		"*, *::before, *::after": {
			borderColor: "neutral.300",
		},
		// Link styles
		a: {
			color: "text.link",
			_hover: {
				color: "text.linkHover",
				textDecoration: "underline",
			},
		},
	},
}

// Component style overrides
const components = {
	Button,
	Heading,
	Input,
	Text,
	Link,
	Container: {
		baseStyle: {
			maxW: "container.xl",
			px: { base: 4, md: 6, lg: 8 },
		},
	},
	Box: {
		baseStyle: {
			// Enable textStyle prop on Box components
		},
	},
}

// Create and export the custom theme
const theme = extendTheme({
	colors,
	fonts: typography.fonts,
	fontSizes: typography.fontSizes,
	fontWeights: typography.fontWeights,
	lineHeights: typography.lineHeights,
	letterSpacings: typography.letterSpacings,
	textStyles: typography.textStyles,
	...spacing,
	styles,
	components,
	// Semantic tokens for easier theme usage
	semanticTokens: {
		colors: {
			"bg-surface": {
				default: "surface.light",
				_dark: "surface.dark",
			},
			"bg-muted": {
				default: "surface.muted",
				_dark: "gray.800",
			},
			"text-body": {
				default: "text.primary",
				_dark: "text.inverse",
			},
			"text-subtle": {
				default: "text.secondary",
				_dark: "gray.400",
			},
		},
	},
})

export default theme
