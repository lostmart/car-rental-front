import { useRouteError, NavLink } from "react-router-dom"

interface ErrorType {
	statusText?: string
	message?: string
	status: number
	data: string
	internal?: boolean
}

export default function ErrorPage() {
	const error = useRouteError() as ErrorType
	console.error(error)

	return (
		<div id="error-page">
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<pre>{error.statusText || error.message}</pre>
			<p>
				<pre>{error.data ? error.data : ""}</pre>
			</p>
			<p>
				<NavLink to="/">go back home</NavLink>
			</p>
		</div>
	)
}
