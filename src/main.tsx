import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ChakraProvider } from "@chakra-ui/react"
import Root from "./layouts/Root"

import "./index.css"

// pages
import ErrorPage from "./pages/ErrorPage"
import AboutPage from "./pages/AboutPage"
import HomePage from "./pages/HomePage"
import CardDemoPage from "./pages/CardDemoPage"

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
			{
				path: "/card-demo",
				element: <CardDemoPage />,
			},
		],
	},
])

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ChakraProvider>
			<RouterProvider router={router} />
		</ChakraProvider>
	</React.StrictMode>
)
