// Semantic color palette for rental car application
// Following Chakra UI best practices with semantic tokens

// Base color scales
const colorScales = {
	gold: {
		50: "#FBF7EF",
		100: "#F5ECD7",
		200: "#EAD9AF",
		300: "#DFC687",
		400: "#D4B35F",
		500: "#D4AF37", // Main gold
		600: "#C5A572", // Lighter gold for hovers
		700: "#A88C2F",
		800: "#7D6823",
		900: "#534417",
	},
	navy: {
		50: "#E8E9F0",
		100: "#C5C8DB",
		200: "#9FA3C4",
		300: "#797EAD",
		400: "#5D629C",
		500: "#40468B",
		600: "#3A3F83",
		700: "#323778",
		800: "#2A2F6E",
		900: "#1A1A2E", // Dark navy
	},
	burgundy: {
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
		100: "#FAF9F6", // Cream/Off-white
		200: "#F5F5DC", // Beige
		300: "#E8E8D8",
		400: "#DCDCC4",
		500: "#CFCFB0",
		600: "#A5A58D",
		700: "#7B7B6A",
		800: "#525246",
		900: "#282823",
	},
	gray: {
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

// Semantic color tokens
const colors = {
	// Base scales available for direct use
	...colorScales,

	// Semantic brand colors
	brand: {
		primary: colorScales.gold[500], // #D4AF37 - Main gold accent
		secondary: colorScales.navy[900], // #1A1A2E - Dark navy
		accent: colorScales.gold[600], // #C5A572 - Lighter gold for hovers/interactions
		burgundy: colorScales.burgundy[600], // #800020 - Burgundy accent (legacy)
	},

	// Semantic surface colors for backgrounds
	surface: {
		light: colorScales.neutral[50], // #FFFFFF - White for main sections
		offWhite: colorScales.neutral[100], // #FAF9F6 - Off-white/cream
		muted: colorScales.neutral[200], // #F5F5DC - Light beige for alternating sections
		dark: colorScales.navy[900], // #1A1A2E - Navy for contrast sections
		darkAlt: colorScales.gray[700], // #2C2C2C - Alternative dark background
		overlay: "rgba(26, 26, 46, 0.8)", // Navy with transparency for overlays
	},

	// Semantic text colors
	text: {
		primary: colorScales.gray[800], // #1F1F1F - Near-black for body text
		secondary: colorScales.neutral[600], // #A5A58D - Gray for muted/secondary text
		muted: colorScales.gray[500], // #696969 - Lighter gray for less important text
		inverse: colorScales.neutral[50], // #FFFFFF - White for dark backgrounds
		accent: colorScales.gold[500], // #D4AF37 - Gold for highlights
		link: colorScales.gold[700], // #A88C2F - Darker gold for links
		linkHover: colorScales.gold[600], // #C5A572 - Lighter gold for link hover
	},

	// Semantic colors for UI states
	status: {
		success: "#10B981", // Green
		warning: "#F59E0B", // Amber
		error: "#EF4444", // Red
		info: "#3B82F6", // Blue
	},

	// Legacy support - maintaining backward compatibility
	primary: colorScales.gold,
	secondary: colorScales.burgundy,
	accent: colorScales.gray,
}

export default colors
