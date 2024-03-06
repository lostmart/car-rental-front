import Car from "../interfaces/Car"

const List = ({ name, year, available, price, imgUrl }: Car ) => {
	// const { name, year, available, price, imgUrl } = props.car

	return <div>the year is {year}</div>
}

export default List
