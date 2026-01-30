import { Box, Text } from "@chakra-ui/react"
import Car from "../interfaces/Car"

const List = ({ year }: Car) => {
	return (
		<Box>
			<Text>the year is {year}</Text>
		</Box>
	)
}

export default List
