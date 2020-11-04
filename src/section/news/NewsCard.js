import React from "react";

export default class NewsCard extends React.Component {

	render() {
		return (
			<div className="uk-card uk-card-hover uk-card-default">
				<div className="uk-card-media-top">
					<img src={this.props.image} alt=""/>
				</div>
				<div className="uk-card-body" style={{'padding': '20px'}}>
					<h3 className="uk-card-title">{this.props.label}</h3>
					<p>{this.truncate(this.props.text, 20)}</p>
					<hr/>
					<p className="uk-align-left uk-margin-remove">{this.props.author}</p>
					<p className="uk-align-right uk-margin-remove">{this.props.date}</p>
				</div>
			</div>
		);
	}

	truncate(string, length) {
		var newLength;
		const append = " ...";

		if (string.indexOf(' ') + append.length > length) {
			return string;
		}

		string.length + append.length > length ?
			newLength = length - append.length :
			newLength = string.length;

		var tempString = string.substring(0, newLength);
		tempString = tempString.replace(/\s+\S*$/, "");

		if (append.length > 0) {
			tempString = tempString + append;
		}
		return tempString;
	}
}