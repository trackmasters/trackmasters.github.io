import React from "react";

export default class NewsCard extends React.Component {

	render() {
		return (
			<div className="uk-card uk-card-hover uk-card-default">
				<div className="uk-card-media-top" style={{'overflow':'hidden', 'height':'200px'}}>
					<img src={this.props.image} style={{'object-fit': 'cover', 'height':'100%', 'width':'100%'}} alt=""/>
				</div>
				<div className="uk-card-body" style={{'height':'128px','padding': '20px'}}>
					<h3 className="uk-card-title">{this.props.label}</h3>
					<p>{this.truncate(this.props.text, 200)}</p>
				</div>
				<div className="uk-card-body" style={{'height':'50px', 'margin-top':'50px', 'padding': '20px'}}>
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