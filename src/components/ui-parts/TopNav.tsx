import {
	FaPhone,
	FaEnvelope,
	FaFacebookF,
	FaTwitter,
	FaInstagram,
} from "react-icons/fa"
import SocialButtons from "./SocialButtons"
import UrlLink from "../../interfaces/UrlLink"

export default function TopNav() {
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

	const socialList: UrlLink[] = [
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
					{urlList.map((liItem) => (
						<li key={liItem.urlLink}>
							<a href={liItem.urlLink}>
								<liItem.icon style={{ marginRight: "10px" }} />
								{liItem.text}
							</a>
						</li>
					))}
				</ul>
				<SocialButtons socialList={socialList} />
			</div>
		</div>
	)
}
