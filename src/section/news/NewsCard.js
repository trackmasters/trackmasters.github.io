import React from "react";
import {useMediaQuery} from "react-responsive";

export default function NewsCard(props) {

	const isM = useMediaQuery({query: '(max-width: 960px)'})
	const truncateLength = isM ? 100 : 180;

	return (
		<div className="uk-card uk-card-hover uk-card-default">
			<div className="news-body-image uk-card-media-top">
				<img className="news-image" src={props.image} alt=""/>
			</div>
			<div className="news-body-top uk-card-body">
				<h3 className="uk-card-title uk-margin-remove">{props.label}</h3>
				<p className="news-text">{truncate(props.text, truncateLength)}</p>
			</div>
			<div className="news-body-bottom uk-card-body">
				<hr/>
				<p className="news-info uk-align-left uk-margin-remove">{props.author}</p>
				<p className="news-info uk-align-right uk-margin-remove">{props.date}</p>
			</div>
		</div>
	);
}

function truncate(string, length) {
	let newLength;
	const append = " ...";

	if (string.indexOf(' ') + append.length > length) {
		return string;
	}

	string.length + append.length > length ?
		newLength = length - append.length :
		newLength = string.length;

	let tempString = string.substring(0, newLength);
	tempString = tempString.replace(/\s+\S*$/, "");

	if (append.length > 0) {
		tempString = tempString + append;
	}
	return tempString;
}