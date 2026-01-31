import { IconButton, useColorMode, useColorModeValue, Tooltip } from "@chakra-ui/react"
import { FiSun, FiMoon } from "react-icons/fi"

export default function ColorModeToggle() {
	const { toggleColorMode } = useColorMode()
	const icon = useColorModeValue(<FiMoon />, <FiSun />)
	const label = useColorModeValue("Switch to dark mode", "Switch to light mode")
	const tooltipLabel = useColorModeValue("Dark mode", "Light mode")

	return (
		<Tooltip label={tooltipLabel} placement="bottom">
			<IconButton
				aria-label={label}
				icon={icon}
				onClick={toggleColorMode}
				variant="ghost"
				size="md"
				fontSize="20px"
				color="text.primary"
				_hover={{
					bg: useColorModeValue("gold.100", "gray.700"),
					color: useColorModeValue("gold.700", "gold.400"),
				}}
				_active={{
					bg: useColorModeValue("gold.200", "gray.600"),
				}}
				transition="all 0.2s"
			/>
		</Tooltip>
	)
}
