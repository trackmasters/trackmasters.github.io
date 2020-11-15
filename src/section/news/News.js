import React from "react";
import "../Section.scss"

import NewsContainer from "./NewsContainer";
import NewsCard from "./NewsCard";

import NewsJson from "../../content/news/news.json";
import SectionLabel from "../../common/SectionLabel";

class RacingEvents extends React.Component {

	constructor(props) {
		super(props)

		const imageMap = new Map();
		NewsJson.forEach(article => {
			const imageName = article.image;
			if (!imageMap.has(imageName)) {
				const image = require(`../../content/news/${article.image}.jpg`);
				imageMap.set(imageName, image);
			}
		})
		console.log(imageMap);

		this.state = {
			json: NewsJson,
			imageMap: imageMap
		};
	}

	render() {
		//const imageSrc = "denis-thumb-up";
		//const image = require(`../../background/${imageSrc}.jpg`);
		return <React.Fragment>
			<section id="News" className="uk-section uk-section-default uk-height-viewport uk-width-viewport">
				<div className="uk-container uk-text-center uk-section uk-padding-remove-top">
					<SectionLabel>Novinky</SectionLabel>
					<NewsContainer>
						{
							this.state.json.map(article => {
								const image = this.state.imageMap.get(article.image);
								return (<NewsCard label={article.label} author={article.author} date={article.date} text={article.text} image={image}/>);
							})
						}
					</NewsContainer>
				</div>
			</section>
		</React.Fragment>
	}
}

export default RacingEvents;