import React from "react";

export default class RacingEventCard extends React.Component {

	render() {

		//<div className="racing-button-panel uk-overlay uk-overlay-default uk-position-bottom uk-text-center uk-padding-remove">
		//	<button className="racing-button uk-button uk-button-default uk-width-1-3 uk-margin-remove">
		//		<span className="racing-button-icon" uk-icon="icon: world; ratio: 2"></span>
		//	</button>
		//	<button className="racing-button uk-button uk-button-default uk-width-1-3 uk-margin-remove">
		//		<span className="racing-button-icon" uk-icon="icon: info; ratio: 2"></span>
		//	</button>
		//	<button className="racing-button uk-button uk-button-default uk-width-1-3 uk-margin-remove">
		//		<span className="racing-button-icon" uk-icon="icon: users; ratio: 2"></span>
		//	</button>
		//</div>

		return (
			<React.Fragment>
				<div className="uk-card uk-card-body">
					<div className="uk-card-media-top">
						<p className="uk-h1">#1</p>
					</div>
					<div className="uk-card-body" style={{'padding': '20px'}}>
						<h3 className="uk-card-title">A</h3>
						<hr/>
						<p className="uk-align-left uk-margin-remove">{this.props.date}</p>
						<p className="uk-align-right uk-margin-remove">{this.props.place}</p>
					</div>
					<div className="uk-card-media-bottom uk-card-hover" style={{'padding': '20px'}}>
						<h3 className="uk-card-title">A</h3>
						<hr/>
						<p className="uk-align-left uk-margin-remove">{this.props.date}</p>
						<p className="uk-align-right uk-margin-remove">{this.props.place}</p>
					</div>
				</div>
			</React.Fragment>
		);
	}
}