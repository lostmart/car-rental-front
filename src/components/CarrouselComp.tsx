// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { carouselImages } from "../assets/carouselImages"

// import required modules
import { Pagination, Navigation } from "swiper/modules"

type ImageSource = {
	src: string
	alt: string
}

export default function App() {
	return (
		<div>
			<Swiper
				pagination={{
					type: "progressbar",
				}}
				navigation={true}
				loop={true}
				autoplay={true}
				modules={[Pagination, Navigation]}
				className="mySwiper"
			>
				{carouselImages.map((img: ImageSource, i: number) => {
					return (
						<SwiperSlide key={i}>
							<img src={img.src} alt={img.alt} style={{ width: "100%" }} />
						</SwiperSlide>
					)
				})}
			</Swiper>
		</div>
	)
}
