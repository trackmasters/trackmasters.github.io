import React from "react";

export default class RacingEventsContainer extends React.Component {

	render() {
		return (
			<div className="uk-margin-xlarge-top" uk-slider="finite: true">
				<div className="uk-position-relative uk-dark uk-visible-toggle" tabIndex="-1">
					<div className="uk-slider-container" style={{'padding': '25px'}}>
						<ul className="uk-slider-items uk-child-width-1-3 uk-grid"
							data-uk-scrollspy="target: > li; delay: 150; cls: uk-animation-slide-bottom-medium"
							data-uk-grid="">
							{this.props.children.map(child => <li>{child}</li>)}
						</ul>
					</div>
					{/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
					<a className="uk-position-center-left-out uk-slidenav-large uk-position-large" href="/#" data-uk-slidenav-previous data-uk-slider-item="previous"/>
					{/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
					<a className="uk-position-center-right-out uk-slidenav-large uk-position-large" href="/#" data-uk-slidenav-next data-uk-slider-item="next"/>
				</div>
				<ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"/>
			</div>
		)
	}
}