import React, { ComponentPropsWithRef } from "react"


// props for your Nav component
type NavProps = ComponentPropsWithRef<"nav">

// Nav component
const Nav: React.FC<NavProps> = ({ children, ...rest }) => {
	return <nav {...rest}>{children}</nav>
}

export default Nav
