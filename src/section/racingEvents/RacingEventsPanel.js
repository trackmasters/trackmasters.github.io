import React from "react";

export default class RacingEventsPanel extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="uk-grid uk-grid-large uk-child-width-1-3 uk-margin-xlarge-top"
				 data-uk-scrollspy="target: > div; delay: 150; cls: uk-animation-slide-bottom-medium"
				 data-uk-grid="">
				{this.props.children}
			</div>
		)
	}
}