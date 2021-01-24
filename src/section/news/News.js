import React from "react";
import { Link } from "react-router-dom";

import "./News.scss"

import NewsContainer from "./NewsContainer";
import NewsCard from "./NewsCard";

import NewsJson from "../../content/news/news.json";
import Section from "../../components/Section";

class News extends React.Component {

	constructor(props) {
		super(props)

		const imageMap = new Map();
		for (const article of NewsJson) {
			const imageName = article.image;
			if (!imageMap.has(imageName)) {
				console.log("now", require('path').dirname(require.main.filename));
				console.log(`../../content/news/images/${article.image}`)
				const image = require(`../../content/news/images/${article.image}`);
				imageMap.set(imageName, image);
			}
		}

		this.state = {
			json: NewsJson,
			imageMap: imageMap
		};
	}

	render() {
		return <Section id="News" feel={this.props.feel} label={this.props.label}>
			<NewsContainer>
				{
					this.state.json.map((article, index) => {
						const {author, image, label, text, date, url} = article;
						const imageComponent = this.state.imageMap.get(image);
						return (
							<Link key={index} style={{}} to={`/${url}`}>
								<NewsCard label={label} author={author} date={date} text={text} image={imageComponent}/>
							</Link>
						);
					})
				}
			</NewsContainer>
		</Section>
	}
}

export default News;
