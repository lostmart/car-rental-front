import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import { ChakraProvider } from "@chakra-ui/react"
import Footer from "./Footer"
import UrlLink from "../../../interfaces/UrlLink"
import { FaFacebook, FaTwitter } from "react-icons/fa"
import theme from "../../../theme"

const renderWithChakra = (component: React.ReactElement) => {
	return render(<ChakraProvider theme={theme}>{component}</ChakraProvider>)
}

describe("Footer", () => {
	it("renders correctly with empty social list", () => {
		const { container } = renderWithChakra(<Footer socialList={[]} />)
		expect(container).toMatchSnapshot()
	})

	it("renders correctly with populated social list", () => {
		const links: UrlLink[] = [
			{ urlLink: "https://www.facebook.com", icon: FaFacebook },
			{ urlLink: "https://www.twitter.com", icon: FaTwitter },
		]
		const { container } = renderWithChakra(
			<Footer socialList={links} />
		)
		expect(container).toMatchSnapshot()
	})

	it("displays copyright text with current year", () => {
		const currentYear = new Date().getFullYear()
		renderWithChakra(<Footer socialList={[]} />)

		const copyrightText = screen.getByText(
			`© ${currentYear} Car Rental. All rights reserved.`
		)
		expect(copyrightText).toBeInTheDocument()
	})

	it("renders footer element", () => {
		const { container } = renderWithChakra(<Footer socialList={[]} />)
		const footer = container.querySelector("footer")
		expect(footer).toBeInTheDocument()
	})

	it("renders social buttons when socialList is provided", () => {
		const links: UrlLink[] = [
			{ urlLink: "https://www.facebook.com", icon: FaFacebook },
			{ urlLink: "https://www.twitter.com", icon: FaTwitter },
		]
		const { container } = renderWithChakra(
			<Footer socialList={links} />
		)

		const anchors = container.querySelectorAll("a")
		expect(anchors).toHaveLength(2)
	})

	it("renders no social links when socialList is empty", () => {
		const { container } = renderWithChakra(<Footer socialList={[]} />)

		const anchors = container.querySelectorAll("a")
		expect(anchors).toHaveLength(0)
	})
})
