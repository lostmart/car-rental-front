import { Outlet, Link } from "react-router-dom"
import Nav from "../components/ui-parts/NavBar"
import TopNav from "../components/ui-parts/TopNav"

export default function Root() {
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
							<Link to="/about">About</Link>
						</li>
					</ul>
				</Nav>
			</header>
			<main>
				<Outlet />
			</main>
		</>
	)
}
