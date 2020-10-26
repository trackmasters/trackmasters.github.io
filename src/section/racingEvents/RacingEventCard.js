import React from "react";

export default class RacingEventCard extends React.Component {

	render() {
		return (
			<div className="uk-text-center">
				<div className="uk-inline-clip uk-card uk-card-small uk-transition-toggle" tabIndex="0">
					<img src={this.props.image} alt="" className="uk-height-medium" width="100%" uk-img/>
					<div className="uk-overlay-primary uk-position-cover">
						<div className="uk-overlay uk-position-top uk-text-center">
							<p className="racing-label-date uk-text-large">{this.props.date}</p>
							<p className="racing-label-date uk-text-large">{this.props.place}</p>
						</div>
						<div className="racing-button-panel uk-overlay uk-overlay-default uk-position-bottom uk-text-center uk-padding-remove">
							<button className="racing-button uk-button uk-button-default uk-width-1-3 uk-margin-remove">
								<span className="racing-button-icon" uk-icon="icon: world; ratio: 2"></span>
							</button>
							<button className="racing-button uk-button uk-button-default uk-width-1-3 uk-margin-remove">
								<span className="racing-button-icon" uk-icon="icon: info; ratio: 2"></span>
							</button>
							<button className="racing-button uk-button uk-button-default uk-width-1-3 uk-margin-remove">
								<span className="racing-button-icon" uk-icon="icon: users; ratio: 2"></span>
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}