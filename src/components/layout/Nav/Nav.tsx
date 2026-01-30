import { Box, BoxProps } from "@chakra-ui/react"

// Nav component using Chakra UI Box as nav element
const Nav: React.FC<BoxProps> = ({ children, ...rest }) => {
	return <Box as="nav" {...rest}>{children}</Box>
}

export default Nav
