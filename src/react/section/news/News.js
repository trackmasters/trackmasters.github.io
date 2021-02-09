import React from "react";
import { Link } from "react-router-dom";

import "./News.scss"

import NewsContainer from "./NewsContainer";
import NewsCard from "./NewsCard";

import articles from "../../../content/articles.json";
import Section from "../../common/Section";
import { useImageMap } from "../../hooks/useImageMap";

export default function News(props) {

	const imageMap = useImageMap(articles);
	console.log("imageMap", imageMap)

		return <Section id="News" feel={props.feel} label={props.label}>
			<NewsContainer>
				{
					articles.map((article, index) => {
						const {author, image, label, text, date, url} = article;
						const imageComponent = imageMap.get(image);
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
