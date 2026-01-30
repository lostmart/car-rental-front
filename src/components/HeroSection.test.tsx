import { render, screen } from "@testing-library/react"
import { ChakraProvider } from "@chakra-ui/react"
import { describe, it, expect } from "vitest"
import HeroSection from "./HeroSection"
import theme from "../theme"

/**
 * Test suite for HeroSection component
 * Verifies rendering, accessibility, and content presence
 */
describe("HeroSection", () => {
	const renderComponent = () => {
		return render(
			<ChakraProvider theme={theme}>
				<HeroSection />
			</ChakraProvider>
		)
	}

	it("renders the main heading", () => {
		renderComponent()
		const heading = screen.getByRole("heading", {
			name: /experience classic elegance/i,
			level: 1,
		})
		expect(heading).toBeInTheDocument()
	})

	it("renders the subheading text", () => {
		renderComponent()
		const subheading = screen.getByText(/tour paris in authentic vintage automobiles/i)
		expect(subheading).toBeInTheDocument()
	})

	it("renders both CTA buttons with correct labels", () => {
		renderComponent()
		const browseCarsButton = screen.getByRole("button", {
			name: /browse cars button/i,
		})
		const viewToursButton = screen.getByRole("button", {
			name: /view tours button/i,
		})

		expect(browseCarsButton).toBeInTheDocument()
		expect(viewToursButton).toBeInTheDocument()
	})

	it("renders the scroll indicator with proper accessibility", () => {
		renderComponent()
		const scrollIndicator = screen.getByRole("button", {
			name: /scroll down to explore/i,
		})
		expect(scrollIndicator).toBeInTheDocument()
	})

	it("has proper semantic structure with banner role", () => {
		renderComponent()
		const banner = screen.getByRole("banner")
		expect(banner).toBeInTheDocument()
	})

	it("displays scroll to explore text", () => {
		renderComponent()
		const scrollText = screen.getByText(/scroll to explore/i)
		expect(scrollText).toBeInTheDocument()
	})
})
