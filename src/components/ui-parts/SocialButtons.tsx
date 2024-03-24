import React from "react"
import UrlLink from "../../interfaces/UrlLink"



type SocialButtonsProps = {
	socialList: UrlLink[]
}

const SocialButtons: React.FC<SocialButtonsProps> = ({ socialList }) => {
	return (
		<ul>
			{socialList.map((liItem) => (
				<li key={liItem.urlLink}>
					<a href={liItem.urlLink}>
						<liItem.icon style={{ marginRight: "10px" }} />
					</a>
				</li>
			))}
		</ul>
	)
}

export default SocialButtons
