import React from "react";
import "../Section.scss"
import image from "../../background/denis-thumb-up.jpg"
import NewsContainer from "./NewsContainer";
import NewsCard from "./NewsCard";

import NewsJson from "../../content/news/news.json";
import SectionLabel from "../../common/SectionLabel";

class RacingEvents extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			json: NewsJson
		};
	}

	render() {
		return <React.Fragment>
			<section id="News" className="uk-section uk-section-default uk-height-viewport uk-width-viewport">
				<div className="uk-container uk-text-center uk-section uk-padding-remove-top">
					<SectionLabel>Novinky</SectionLabel>
					<NewsContainer>
						{
							this.state.json.map(article => <NewsCard label={article.label} author={article.author} date={article.date} text={article.text} image={image} />)
						}
					</NewsContainer>
				</div>
			</section>
		</React.Fragment>
	}
}

export default RacingEvents;