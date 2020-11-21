import React from "react";

export default class RacingEventsContainer extends React.Component {

	render() {
		return (
			<div className="uk-margin-xlarge-top" uk-slider="finite: true">
				<div className="uk-position-relative uk-dark uk-visible-toggle" tabIndex="-1">
					<div className="uk-slider-container" style={{'padding': '0px 25px 50px 25px'}}>
						<ul className="uk-slider-items uk-child-width-1-4 uk-grid"
							data-uk-scrollspy="target: > li; delay: 150; cls: uk-animation-slide-bottom-medium"
							data-uk-grid="">
							{this.props.children.map((child, index) => <li key={index}>{child}</li>)}
						</ul>
					</div>
				</div>
				<ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"/>
			</div>
		)
	}
}