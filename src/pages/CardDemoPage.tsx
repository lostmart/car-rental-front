import CardComp from "../components/ui-units/CardComp"
import styles from "./CardDemoPage.module.css"

export default function CardDemoPage() {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<h1>Card Component Demo</h1>
				<p>Responsive cards with smooth hover effects</p>
			</header>

			<section className={styles.section}>
				<h2>Basic Cards</h2>
				<div className={styles.grid}>
					<CardComp
						title="Economy Car"
						description="Perfect for city driving and daily commutes. Fuel-efficient and easy to park."
						onClick={() => alert("Economy car clicked!")}
					/>
					<CardComp
						title="Luxury Sedan"
						description="Premium comfort with advanced features. Ideal for business trips and special occasions."
						onClick={() => alert("Luxury sedan clicked!")}
					/>
					<CardComp
						title="SUV Adventure"
						description="Spacious and powerful. Great for family trips and outdoor adventures."
						onClick={() => alert("SUV clicked!")}
					/>
				</div>
			</section>

			<section className={styles.section}>
				<h2>Cards with Images</h2>
				<div className={styles.grid}>
					<CardComp
						title="Sports Car"
						description="High performance and sleek design. Experience the thrill of the road."
						image="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=300&fit=crop"
						imageAlt="Red sports car"
						onClick={() => console.log("Sports car selected")}
					/>
					<CardComp
						title="Electric Vehicle"
						description="Eco-friendly and cost-effective. Zero emissions, maximum efficiency."
						image="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400&h=300&fit=crop"
						imageAlt="Electric car"
						onClick={() => console.log("EV selected")}
					/>
					<CardComp
						title="Convertible"
						description="Feel the wind in your hair. Perfect for sunny days and coastal drives."
						image="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop"
						imageAlt="Convertible car"
						onClick={() => console.log("Convertible selected")}
					/>
				</div>
			</section>

			<section className={styles.section}>
				<h2>Custom Content Cards</h2>
				<div className={styles.grid}>
					<CardComp title="Special Offer">
						<div className={styles.customContent}>
							<div className={styles.priceTag}>
								<span className={styles.price}>$49</span>
								<span className={styles.period}>/day</span>
							</div>
							<ul className={styles.features}>
								<li>✓ Unlimited mileage</li>
								<li>✓ Full insurance</li>
								<li>✓ 24/7 support</li>
							</ul>
							<button className={styles.btn}>Book Now</button>
						</div>
					</CardComp>

					<CardComp title="Premium Package">
						<div className={styles.customContent}>
							<div className={styles.priceTag}>
								<span className={styles.price}>$89</span>
								<span className={styles.period}>/day</span>
							</div>
							<ul className={styles.features}>
								<li>✓ GPS Navigation</li>
								<li>✓ Child seat included</li>
								<li>✓ Priority pickup</li>
							</ul>
							<button className={styles.btn}>Book Now</button>
						</div>
					</CardComp>

					<CardComp title="Weekend Deal">
						<div className={styles.customContent}>
							<div className={styles.priceTag}>
								<span className={styles.price}>$129</span>
								<span className={styles.period}>/weekend</span>
							</div>
							<ul className={styles.features}>
								<li>✓ 3-day rental</li>
								<li>✓ Free upgrade</li>
								<li>✓ Roadside assistance</li>
							</ul>
							<button className={styles.btn}>Book Now</button>
						</div>
					</CardComp>
				</div>
			</section>

			<section className={styles.section}>
				<h2>Different Layouts</h2>
				<div className={styles.wideGrid}>
					<CardComp
						title="Road Trip Essentials"
						description="Everything you need for a perfect journey. Our cars come fully equipped with modern amenities and safety features to ensure your trip is comfortable and secure."
						image="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=300&fit=crop"
						imageAlt="Car on road"
					/>
					<CardComp
						title="Corporate Fleet"
						description="Professional vehicles for business needs. Reliable, presentable, and efficient options for your corporate transportation requirements."
						image="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=300&fit=crop"
						imageAlt="Business cars"
					/>
				</div>
			</section>
		</div>
	)
}
