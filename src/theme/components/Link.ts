// Link component theme
const Link = {
	baseStyle: {
		fontFamily: "body",
		fontWeight: "medium",
		textDecoration: "none",
		color: "text.link",
		transition: "all 0.2s",
		_hover: {
			textDecoration: "underline",
			color: "text.linkHover",
		},
		_focus: {
			boxShadow: "outline",
			outline: "none",
		},
	},
	variants: {
		default: {
			color: "text.link",
			_hover: {
				color: "text.linkHover",
			},
		},
		primary: {
			color: "brand.primary",
			_hover: {
				color: "brand.accent",
			},
		},
		nav: {
			fontSize: "md",
			fontWeight: "medium",
			color: "text.primary",
			_hover: {
				color: "text.accent",
				textDecoration: "none",
			},
		},
		inverse: {
			color: "text.inverse",
			_hover: {
				color: "brand.accent",
			},
		},
		unstyled: {
			color: "inherit",
			_hover: {
				textDecoration: "none",
			},
		},
	},
	defaultProps: {
		variant: "default",
	},
}

export default Link
