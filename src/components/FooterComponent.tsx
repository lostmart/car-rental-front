import UrlLink from "../interfaces/UrlLink"

type SocialButtonsProps = {
	socialList: UrlLink[]
}

const FooterComponent: React.FC<SocialButtonsProps> = ({ socialList }) => {
	return (
		<footer>
			<ul>
				{socialList.map((liItem) => (
					<li key={liItem.urlLink}>
						<a href={liItem.urlLink}>
							<liItem.icon style={{ marginRight: "10px" }} />
						</a>
					</li>
				))}
			</ul>
		</footer>
	)
}

export default FooterComponent
