import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./layouts/Root"
// import App from './App.tsx'
import "./index.css"

// pages
import ErrorPage from "./pages/ErrorPage"
import AboutPage from "./pages/AboutPage"
import HomePage from "./pages/HomePage"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/about",
				element: <AboutPage />,
			},
		],
	},
])

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
