import { Outlet, Link } from "react-router-dom"
import Nav from "../components/ui-parts/NavBar"
import TopNav from "../components/ui-parts/TopNav"
import FooterComponent from "../components/FooterComponent"

import ButtonComp from "../components/ui-units/ButtonComp"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"

import { RxHamburgerMenu } from "react-icons/rx"

import UrlLink from "../interfaces/UrlLink"

export default function Root() {
	const handleClick = () => {
		console.log("clicked !!")
	}
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
		<>
			<TopNav />

			<header>
				<Nav className="navbar" role="navigation">
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<span>Pages</span>
							<div className="links-container">
								<Link to="/about">About</Link>
								<Link to="/about">Drivers</Link>
								<Link to="/about">Pricing Plans</Link>
								<Link to="/about">Booking Form</Link>
							</div>
						</li>
					</ul>
					<ButtonComp
						className="navBtn"
						children={<RxHamburgerMenu />}
						onClick={handleClick}
					/>
				</Nav>
			</header>
			<main>
				<Outlet />
			</main>
			<FooterComponent socialList={socialList} />
		</>
	)
}
