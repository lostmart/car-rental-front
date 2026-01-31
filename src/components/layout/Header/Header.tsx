import {
	Box,
	HStack,
	IconButton,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	useDisclosure,
	VStack,
	Link as ChakraLink,
	Collapse,
	useColorModeValue,
} from "@chakra-ui/react"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
import { Link as RouterLink } from "react-router-dom"
import { NavigationItem, HeaderProps } from "../../../interfaces/NavigationItem"

export default function Header({
	navigationItems,
	className = "",
	logo,
}: HeaderProps) {
	const { isOpen, onToggle, onClose } = useDisclosure()

	// Dark mode color values
	const navBg = useColorModeValue(
		"rgba(41, 42, 45, 0.32)",
		"rgba(26, 32, 44, 0.6)",
	)
	const navTextColor = useColorModeValue("white", "gray.100")
	const mobileMenuBg = useColorModeValue(
		"rgba(255, 255, 255, 0.85)",
		"rgba(26, 32, 44, 0.95)",
	)
	const mobileTextColor = useColorModeValue("accent.700", "gold.400")
	const toggleBtnBg = useColorModeValue(
		"rgba(41, 42, 45, 0.32)",
		"rgba(26, 32, 44, 0.6)",
	)
	const toggleBtnHoverBg = useColorModeValue(
		"rgba(41, 42, 45, 0.6)",
		"rgba(26, 32, 44, 0.8)",
	)

	// Flatten navigation items for mobile menu
	const flattenNavigationItems = (
		items: NavigationItem[],
	): NavigationItem[] => {
		return items.flatMap((item) =>
			item.children ? [item, ...item.children] : [item],
		)
	}

	const mobileNavItems = flattenNavigationItems(navigationItems)

	return (
		<Box as="header" position="relative" className={className}>
			<Box
				as="nav"
				position="absolute"
				zIndex={2}
				width="100%"
				bg={navBg}
				backdropFilter="blur(2px)"
				aria-label="Main navigation"
			>
				{/* Logo (optional) */}
				{logo && <Box p={4}>{logo}</Box>}

				{/* Desktop Navigation */}
				<HStack
					display={{ base: "none", md: "flex" }}
					spacing={10}
					maxW="900px"
					mx="auto"
					p={4}
				>
					{navigationItems.map((item) => (
						<Box key={item.path}>
							{item.children ? (
								<Menu>
									<MenuButton
										fontSize="lg"
										fontWeight="600"
										color={navTextColor}
										_hover={{ opacity: 0.8 }}
										cursor="pointer"
									>
										{item.label}
									</MenuButton>
									<MenuList>
										{item.children.map((child) => (
											<MenuItem
												key={child.path}
												as={RouterLink}
												to={child.path}
											>
												{child.label}
											</MenuItem>
										))}
									</MenuList>
								</Menu>
							) : (
								<ChakraLink
									as={RouterLink}
									to={item.path}
									fontSize="lg"
									fontWeight="600"
									color={navTextColor}
									_hover={{ opacity: 0.8 }}
								>
									{item.label}
								</ChakraLink>
							)}
						</Box>
					))}
				</HStack>

				{/* Mobile Menu Toggle Button */}
				<IconButton
					display={{ base: "block", md: "none" }}
					position="relative"
					float="right"
					m={2}
					zIndex={100}
					aria-label={isOpen ? "Close menu" : "Open menu"}
					icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
					onClick={onToggle}
					variant="ghost"
					color={navTextColor}
					bg={isOpen ? toggleBtnBg : "transparent"}
					_hover={{ bg: toggleBtnHoverBg }}
				/>

				{/* Mobile Navigation */}
				<Collapse in={isOpen} animateOpacity>
					<VStack
						display={{ base: "flex", md: "none" }}
						position="absolute"
						width="100%"
						bg={mobileMenuBg}
						backdropFilter="blur(10px)"
						spacing={5}
						py={16}
						px={4}
						zIndex={2}
					>
						{mobileNavItems.map((item) => (
							<ChakraLink
								key={item.path}
								as={RouterLink}
								to={item.path}
								fontSize="lg"
								fontWeight="600"
								color={mobileTextColor}
								onClick={onClose}
								_hover={{ opacity: 0.7 }}
							>
								{item.label}
							</ChakraLink>
						))}
					</VStack>
				</Collapse>
			</Box>
		</Box>
	)
}
