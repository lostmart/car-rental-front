import { extendTheme, type ThemeConfig } from "@chakra-ui/react"

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

// Color mode configuration
const config: ThemeConfig = {
	initialColorMode: "light",
	useSystemColorMode: true,
}

// Global styles using semantic tokens that auto-adapt to color mode
const styles = {
	global: {
		body: {
			bg: "bg.canvas",
			color: "text.primary",
			fontFamily: "body",
			transition: "background-color 0.2s, color 0.2s",
		},
		"*::placeholder": {
			color: "text.muted",
		},
		"*, *::before, *::after": {
			borderColor: "border.default",
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
	config,
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
	// Semantic tokens for easier theme usage and dark mode support
	semanticTokens: {
		colors: {
			// Background colors
			"bg.canvas": {
				default: "surface.offWhite",
				_dark: "gray.900",
			},
			"bg.surface": {
				default: "surface.light",
				_dark: "gray.800",
			},
			"bg.muted": {
				default: "surface.muted",
				_dark: "gray.700",
			},
			"bg.accent": {
				default: "gold.50",
				_dark: "gold.900",
			},
			"bg.subtle": {
				default: "neutral.100",
				_dark: "gray.800",
			},

			// Text colors
			"text.primary": {
				default: "gray.800",
				_dark: "neutral.50",
			},
			"text.secondary": {
				default: "neutral.600",
				_dark: "gray.400",
			},
			"text.muted": {
				default: "gray.500",
				_dark: "gray.500",
			},
			"text.inverse": {
				default: "neutral.50",
				_dark: "gray.800",
			},
			"text.link": {
				default: "gold.700",
				_dark: "gold.400",
			},
			"text.linkHover": {
				default: "gold.600",
				_dark: "gold.300",
			},

			// Border colors
			"border.default": {
				default: "neutral.300",
				_dark: "gray.700",
			},
			"border.muted": {
				default: "neutral.200",
				_dark: "gray.600",
			},
			"border.accent": {
				default: "gold.500",
				_dark: "gold.600",
			},

			// Brand colors (adjust slightly for dark mode)
			"brand.primary": {
				default: "gold.500",
				_dark: "gold.400",
			},
			"brand.secondary": {
				default: "navy.900",
				_dark: "navy.600",
			},
			"brand.accent": {
				default: "gold.600",
				_dark: "gold.500",
			},

			// Legacy semantic tokens (backward compatibility)
			"bg-surface": {
				default: "surface.light",
				_dark: "gray.800",
			},
			"bg-muted": {
				default: "surface.muted",
				_dark: "gray.700",
			},
			"text-body": {
				default: "gray.800",
				_dark: "neutral.50",
			},
			"text-subtle": {
				default: "neutral.600",
				_dark: "gray.400",
			},
		},
	},
})

export default theme
