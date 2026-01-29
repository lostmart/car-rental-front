import { Box } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import TopNav from "../components/ui-parts/TopNav"
import Header from "../components/ui-parts/Header"
import FooterComponent from "../components/FooterComponent"

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"

import UrlLink from "../interfaces/UrlLink"
import { NavigationItem } from "../interfaces/NavigationItem"

export default function Root() {
	const navigationItems: NavigationItem[] = [
		{
			label: "Home",
			path: "/",
		},
		{
			label: "Pages",
			path: "/pages",
			children: [
				{ label: "About", path: "/about" },
				{ label: "Drivers", path: "/about" },
				{ label: "Pricing Plans", path: "/about" },
				{ label: "Booking Form", path: "/about" },
				{ label: "Card Demo", path: "/card-demo" },
			],
		},
	]

	const socialList: UrlLink[] = [
		{
			urlLink: "https://www.facebook.com/",
			icon: FaFacebookF,
		},
		{
			urlLink: "https://twitter.com/",
			icon: FaTwitter,
		},
		{
			urlLink: "https://www.instagram.com/",
			icon: FaInstagram,
		},
	]
	return (
		<Box minH="100vh" display="flex" flexDirection="column">
			<TopNav />
			<Header navigationItems={navigationItems} />
			<Box as="main" flex="1">
				<Outlet />
			</Box>
			<FooterComponent socialList={socialList} />
		</Box>
	)
}
