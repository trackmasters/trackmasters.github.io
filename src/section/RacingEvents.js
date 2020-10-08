import React from "react";
import "./Section.scss"

class RacingEvents extends React.Component {

	render() {
		return <React.Fragment>
			<section id="RacingEvents" className="uk-section uk-section-default uk-height-viewport uk-width-viewport">
				<div className="uk-container uk-text-center uk-section uk-padding-remove-top">
					<h2 className="uk-heading-medium uk-width-1-2@m uk-text-center uk-text-top uk-position-small uk-margin-auto"
						data-uk-parallax="opacity: 0,1; y: -30,0; scale: 1,1; viewport: 0.3;">Termíny závodu</h2>
					<div className="uk-grid uk-grid-large uk-child-width-1-3@m"
						 data-uk-grid="" data-uk-scrollspy="target: > div; delay: 150; cls: uk-animation-slide-bottom-medium">
						<div className="uk-text-center" >
							<h3 className="uk-heading-medium uk-margin-small-bottom uk-margin-top uk-margin-remove-adjacent" data-uk-parallax="opacity: 0,1; y: -30,0; scale: 1,1; viewport: 0.3;">Prague</h3>
							<h4>1.4.2020</h4>
						</div>
						<div className="uk-text-center">
							<h3 className="uk-heading-medium uk-margin-small-bottom uk-margin-top uk-margin-remove-adjacent" data-uk-parallax="opacity: 0,1; y: -30,0; scale: 1,1; viewport: 0.3;">Wien</h3>
							<h4>15.6.2020</h4>
						</div>
						<div className="uk-text-center">
							<h3 className="uk-heading-medium uk-margin-small-bottom uk-margin-top uk-margin-remove-adjacent" data-uk-parallax="opacity: 0,1; y: -30,0; scale: 1,1; viewport: 0.3;">Berlin</h3>
							<h4>31.7.2020</h4>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	}
}

export default RacingEvents;