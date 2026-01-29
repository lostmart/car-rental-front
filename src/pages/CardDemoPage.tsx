import {
	Container,
	Heading,
	Text,
	VStack,
	SimpleGrid,
	Box,
	HStack,
	List,
	ListItem,
	Button,
} from "@chakra-ui/react"
import CardComp from "../components/ui-units/CardComp"

export default function CardDemoPage() {
	return (
		<Container maxW="container.xl" py={8}>
			<VStack spacing={6} align="center" mb={12}>
				<Heading as="h1" size="2xl" color="gray.800">
					Card Component Demo
				</Heading>
				<Text fontSize="lg" color="gray.600">
					Responsive cards with smooth hover effects
				</Text>
			</VStack>

			<Box as="section" mb={16}>
				<Heading
					as="h2"
					size="lg"
					color="gray.800"
					mb={6}
					pb={2}
					borderBottom="2px solid"
					borderColor="orange.500"
					display="inline-block"
				>
					Basic Cards
				</Heading>
				<SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
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
				</SimpleGrid>
			</Box>

			<Box as="section" mb={16}>
				<Heading
					as="h2"
					size="lg"
					color="gray.800"
					mb={6}
					pb={2}
					borderBottom="2px solid"
					borderColor="orange.500"
					display="inline-block"
				>
					Cards with Images
				</Heading>
				<SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
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
				</SimpleGrid>
			</Box>

			<Box as="section" mb={16}>
				<Heading
					as="h2"
					size="lg"
					color="gray.800"
					mb={6}
					pb={2}
					borderBottom="2px solid"
					borderColor="orange.500"
					display="inline-block"
				>
					Custom Content Cards
				</Heading>
				<SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
					<CardComp title="Special Offer">
						<VStack align="start" spacing={4}>
							<HStack align="baseline" spacing={1}>
								<Text fontSize="3xl" fontWeight="bold" color="orange.500">
									$49
								</Text>
								<Text fontSize="md" color="gray.600">
									/day
								</Text>
							</HStack>
							<List spacing={2}>
								<ListItem color="gray.700">✓ Unlimited mileage</ListItem>
								<ListItem color="gray.700">✓ Full insurance</ListItem>
								<ListItem color="gray.700">✓ 24/7 support</ListItem>
							</List>
							<Button
								colorScheme="orange"
								width="full"
								mt={2}
								_hover={{ transform: "translateY(-2px)", shadow: "lg" }}
							>
								Book Now
							</Button>
						</VStack>
					</CardComp>

					<CardComp title="Premium Package">
						<VStack align="start" spacing={4}>
							<HStack align="baseline" spacing={1}>
								<Text fontSize="3xl" fontWeight="bold" color="orange.500">
									$89
								</Text>
								<Text fontSize="md" color="gray.600">
									/day
								</Text>
							</HStack>
							<List spacing={2}>
								<ListItem color="gray.700">✓ GPS Navigation</ListItem>
								<ListItem color="gray.700">✓ Child seat included</ListItem>
								<ListItem color="gray.700">✓ Priority pickup</ListItem>
							</List>
							<Button
								colorScheme="orange"
								width="full"
								mt={2}
								_hover={{ transform: "translateY(-2px)", shadow: "lg" }}
							>
								Book Now
							</Button>
						</VStack>
					</CardComp>

					<CardComp title="Weekend Deal">
						<VStack align="start" spacing={4}>
							<HStack align="baseline" spacing={1}>
								<Text fontSize="3xl" fontWeight="bold" color="orange.500">
									$129
								</Text>
								<Text fontSize="md" color="gray.600">
									/weekend
								</Text>
							</HStack>
							<List spacing={2}>
								<ListItem color="gray.700">✓ 3-day rental</ListItem>
								<ListItem color="gray.700">✓ Free upgrade</ListItem>
								<ListItem color="gray.700">✓ Roadside assistance</ListItem>
							</List>
							<Button
								colorScheme="orange"
								width="full"
								mt={2}
								_hover={{ transform: "translateY(-2px)", shadow: "lg" }}
							>
								Book Now
							</Button>
						</VStack>
					</CardComp>
				</SimpleGrid>
			</Box>

			<Box as="section" mb={16}>
				<Heading
					as="h2"
					size="lg"
					color="gray.800"
					mb={6}
					pb={2}
					borderBottom="2px solid"
					borderColor="orange.500"
					display="inline-block"
				>
					Different Layouts
				</Heading>
				<SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
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
				</SimpleGrid>
			</Box>
		</Container>
	)
}
