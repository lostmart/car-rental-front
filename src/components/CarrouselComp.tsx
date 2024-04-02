import styles from "./CarrouselComp.module.css"

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

const Carousel: React.FC = () => {
	return (
		<div>
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
				className={styles.mySwiper}
			>
				{carouselImages.map((img: ImageSource) => {
					return (
						<SwiperSlide key={img.src} className={styles.swiperSlide}>
							<figure>
								<img src={img.src} alt={img.alt} />
								<figcaption>
									<h2>La vida es deliciosa !</h2>
									<p>Nunca temas a volar!</p>
									<button>Click me</button>
								</figcaption>
							</figure>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</div>
	)
}

export default Carousel
