import React from "react";
import "./Section.scss"

class AboutRacing extends React.Component {

	render() {
		return <React.Fragment>
			<section id="AboutRacing" className="uk-section uk-section-default uk-height-viewport uk-width-viewport">
				<div className="uk-container uk-text-center uk-section uk-padding-remove-top">
					<h2 className="uk-heading-medium uk-width-1-2@m uk-text-center uk-text-top uk-position-small uk-margin-auto"
						data-uk-parallax="opacity: 0,1; y: -30,0; scale: 1,1; viewport: 0.3;">O závodu</h2>
				</div>
			</section>
		</React.Fragment>
	}
}

export default AboutRacing;