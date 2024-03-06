import Button from "./components/Button"

export default function App() {
	const handleClick = () => {
		console.log("yes, wait !")
	}

	return (
		<>
			<h1>Car rental</h1>
			<Button
				onClick={handleClick}
				style={{
					backgroundColor: "red",
					fontSize: 20,
					padding: "10px 20px",
					cursor: "pointer",
				}}
			/>
		</>
	)
}
