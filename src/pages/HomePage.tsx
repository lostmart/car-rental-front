import { Box } from "@chakra-ui/react"
import HeroSection from "../components/features/HeroSection/HeroSection"
import Carousel from "../components/features/Carousel/Carousel"
import { carouselImages } from "../assets/carouselImages"

export default function HomePage() {
	return (
		<Box>
			<HeroSection
				heading="Experience Classic Elegance"
				subheading="Tour Paris in authentic vintage automobiles"
				primaryButtonLabel="Browse Cars"
				secondaryButtonLabel="View Tours"
			/>
			<Carousel
				images={carouselImages}
				overlayHeading="La vida es deliciosa !"
				overlayText="Nunca temas a volar!"
				overlayButtonLabel="View Details"
			/>
		</Box>
	)
}
