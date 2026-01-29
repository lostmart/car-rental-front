import { Box, Heading, Text, Button, Image } from "@chakra-ui/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { carouselImages } from "../assets/carouselImages"

type ImageSource = {
	src: string
	alt: string
}

const Carousel: React.FC = () => {
	return (
		<Box>
			<Swiper
				pagination={{
					type: "progressbar",
				}}
				navigation={true}
				loop={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				modules={[Pagination, Navigation]}
				style={{ width: "100%" }}
			>
				{carouselImages.map((img: ImageSource) => {
					return (
						<SwiperSlide key={img.src}>
							<Box position="relative" display="flex" alignItems="center">
								<Image
									src={img.src}
									alt={img.alt}
									width="100%"
									maxH="460px"
									objectFit="cover"
								/>
								<Box
									position="absolute"
									top="52%"
									left="50%"
									transform="translate(-50%, -50%)"
									bg="rgba(255, 255, 255, 0.12)"
									backdropFilter="blur(4px)"
									borderRadius="13px"
									width="92%"
									maxW="600px"
									p={8}
									boxShadow="0 4px 30px rgba(0, 0, 0, 0.5)"
									border="1px solid rgba(255, 255, 255, 0.23)"
									textAlign="center"
									color="white"
								>
									<Heading
										as="h2"
										size="xl"
										mb={4}
										textShadow="1px 1px 3px rgba(0, 0, 0, 0.76)"
									>
										La vida es deliciosa !
									</Heading>
									<Text
										fontSize="lg"
										mb={4}
										color="black"
										textShadow="1px 1px 2px rgba(233, 233, 233, 0.76)"
									>
										Nunca temas a volar!
									</Text>
									<Button
										bg="#192a30"
										color="white"
										_hover={{ bg: "#111c21", shadow: "lg" }}
										size="md"
									>
										Click me
									</Button>
								</Box>
							</Box>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</Box>
	)
}

export default Carousel
