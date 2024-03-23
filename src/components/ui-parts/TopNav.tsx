import {
	FaPhone,
	FaEnvelope,
	FaFacebookF,
	FaTwitter,
	FaInstagram,
} from "react-icons/fa"
import { IconType } from "react-icons"

type UrlLink = {
	urlLink: string
	text?: string
	icon: string | IconType
}

export default function Root() {
	const urlList: UrlLink[] = [
		{
			urlLink: "tel:+1 987 654 3210",
			text: "+1 987 654 3210",
			icon: FaPhone,
		},
		{
			urlLink: "mailto:name@email.com",
			text: "contact@car-rental.com",
			icon: FaEnvelope,
		},
	]

	const soclaList: UrlLink[] = [
		{
			urlLink: "https://www.facebook.com/",
			icon: FaFacebookF,
		},
		{
			urlLink: "https://twitter.com/",
			icon: FaTwitter,
		},
		{
			urlLink: "https://www.instagram.com/",
			icon: FaInstagram,
		},
	]
	return (
		<div className="top-header">
			<div className="container">
				<ul>
					{urlList.map((liItem) => {
						return (
							<li key={liItem.urlLink}>
								<a href={liItem.urlLink}>
									{<liItem.icon style={{ marginRight: "10px" }} />}
									{liItem.text}
								</a>
							</li>
						)
					})}
				</ul>
				<ul>
					{soclaList.map((liItem) => {
						return (
							<li key={liItem.urlLink}>
								<a href={liItem.urlLink}>
									{<liItem.icon style={{ marginRight: "10px" }} />}
								</a>
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}
