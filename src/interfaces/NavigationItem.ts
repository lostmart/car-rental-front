import { ReactNode } from "react"

/**
 * Represents a navigation item in the header menu
 */
export interface NavigationItem {
	/** Display label for the navigation item */
	label: string
	/** URL path for navigation (used with react-router Link) */
	path: string
	/** Optional child navigation items for dropdown menus */
	children?: NavigationItem[]
}

/**
 * Props for the Header component
 */
export interface HeaderProps {
	/** Array of navigation items to display in the header */
	navigationItems: NavigationItem[]
	/** Optional CSS class name for custom styling */
	className?: string
	/** Optional logo element to display in the header */
	logo?: ReactNode
}
