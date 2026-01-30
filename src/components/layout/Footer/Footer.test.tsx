import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import { ChakraProvider } from "@chakra-ui/react"
import Footer from "./Footer"
import UrlLink from "../../../interfaces/UrlLink"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"
import theme from "../../../theme"

const renderWithChakra = (component: React.ReactElement) => {
	return render(<ChakraProvider theme={theme}>{component}</ChakraProvider>)
}

describe("Footer", () => {
	describe("Structure and Layout", () => {
		it("renders as a footer element with proper semantic HTML", () => {
			const { container } = renderWithChakra(<Footer socialList={[]} />)
			const footer = container.querySelector("footer")

			expect(footer).toBeInTheDocument()
		})

		it("renders with correct Chakra UI structure", () => {
			const { container } = renderWithChakra(<Footer socialList={[]} />)
			const footer = container.querySelector("footer")
			const chakraContainer = footer?.querySelector(".chakra-container")
			const vstack = chakraContainer?.querySelector(".chakra-stack")

			expect(chakraContainer).toBeInTheDocument()
			expect(vstack).toBeInTheDocument()
		})

		it("includes a divider between social buttons and copyright", () => {
			renderWithChakra(<Footer socialList={[]} />)
			const divider = screen.getByRole("separator")

			expect(divider).toBeInTheDocument()
			expect(divider).toHaveAttribute("aria-orientation", "horizontal")
		})
	})

	describe("Copyright Text", () => {
		it("displays copyright text with current year", () => {
			const currentYear = new Date().getFullYear()
			renderWithChakra(<Footer socialList={[]} />)

			const copyrightText = screen.getByText(
				`© ${currentYear} Car Rental. All rights reserved.`
			)
			expect(copyrightText).toBeInTheDocument()
		})

		it("updates copyright year dynamically", () => {
			const currentYear = new Date().getFullYear()
			renderWithChakra(<Footer socialList={[]} />)

			const copyrightText = screen.getByText(
				new RegExp(`© ${currentYear}`)
			)
			expect(copyrightText).toBeInTheDocument()
		})
	})

	describe("Social Links", () => {
		it("renders no social links when socialList is empty", () => {
			const { container } = renderWithChakra(<Footer socialList={[]} />)
			const anchors = container.querySelectorAll("a")

			expect(anchors).toHaveLength(0)
		})

		it("renders social buttons when socialList is provided", () => {
			const links: UrlLink[] = [
				{ urlLink: "https://www.facebook.com", icon: FaFacebook },
				{ urlLink: "https://www.twitter.com", icon: FaTwitter },
			]
			const { container } = renderWithChakra(<Footer socialList={links} />)
			const anchors = container.querySelectorAll("a")

			expect(anchors).toHaveLength(2)
		})

		it("renders multiple social links correctly", () => {
			const links: UrlLink[] = [
				{ urlLink: "https://www.facebook.com", icon: FaFacebook },
				{ urlLink: "https://www.twitter.com", icon: FaTwitter },
				{ urlLink: "https://www.instagram.com", icon: FaInstagram },
			]
			const { container } = renderWithChakra(<Footer socialList={links} />)
			const anchors = container.querySelectorAll("a")

			expect(anchors).toHaveLength(3)
			expect(anchors[0]).toHaveAttribute("href", "https://www.facebook.com")
			expect(anchors[1]).toHaveAttribute("href", "https://www.twitter.com")
			expect(anchors[2]).toHaveAttribute("href", "https://www.instagram.com")
		})

		it("passes social links to SocialButtons component", () => {
			const links: UrlLink[] = [
				{ urlLink: "https://www.facebook.com", icon: FaFacebook },
			]
			const { container } = renderWithChakra(<Footer socialList={links} />)
			const link = container.querySelector('a[href="https://www.facebook.com"]')

			expect(link).toBeInTheDocument()
		})
	})

	describe("Accessibility", () => {
		it("has proper ARIA attributes on social links", () => {
			const links: UrlLink[] = [
				{ urlLink: "https://www.facebook.com", icon: FaFacebook },
			]
			const { container } = renderWithChakra(<Footer socialList={links} />)
			const link = container.querySelector('a[href="https://www.facebook.com"]')

			expect(link).toHaveAttribute("aria-label")
			expect(link).toHaveAttribute("rel", "noopener noreferrer")
			expect(link).toHaveAttribute("target", "_blank")
		})

		it("has proper separator role for divider", () => {
			renderWithChakra(<Footer socialList={[]} />)
			const divider = screen.getByRole("separator")

			expect(divider).toBeInTheDocument()
		})
	})

	describe("Snapshot", () => {
		it("matches snapshot with empty social list", () => {
			const { container } = renderWithChakra(<Footer socialList={[]} />)
			expect(container).toMatchSnapshot()
		})

		it("matches snapshot with populated social list", () => {
			const links: UrlLink[] = [
				{ urlLink: "https://www.facebook.com", icon: FaFacebook },
				{ urlLink: "https://www.twitter.com", icon: FaTwitter },
			]
			const { container } = renderWithChakra(<Footer socialList={links} />)
			expect(container).toMatchSnapshot()
		})
	})
})
