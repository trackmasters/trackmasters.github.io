import React from "react";
import { Link } from "react-router-dom";

import "../Section.scss"
import "./News.scss"

import NewsContainer from "./NewsContainer";
import NewsCard from "./NewsCard";

import NewsJson from "../../content/news/news.json";
import SectionLabel from "../../common/SectionLabel";

class News extends React.Component {


	constructor(props) {
		super(props)

		const imageMap = new Map();
		for (const article of NewsJson) {
			const imageName = article.image;
			if (!imageMap.has(imageName)) {
				const image = require(`../../content/news/${article.image}.jpg`);
				imageMap.set(imageName, image);
			}
		}

		this.state = {
			json: NewsJson,
			imageMap: imageMap
		};
	}



	render() {

		return <React.Fragment>
			<section id={this.props.id} className="uk-section uk-section-default uk-height-viewport uk-width-viewport">
				<div className="uk-container uk-container-large uk-text-center uk-section uk-padding-remove-top">
				<SectionLabel>Novinky</SectionLabel>
					<NewsContainer>
						{
							this.state.json.map((article, index) => {
								const {author, image, label, text, date, url} = article;
								const imageComponent = this.state.imageMap.get(image);
								return (
									<Link style={{}} to={`/${url}`}>
										<NewsCard label={label} author={author} date={date} text={text} image={imageComponent}/>
									</Link>
								);
							})
						}
					</NewsContainer>
				</div>
			</section>
		</React.Fragment>
	}
}

export default News;
