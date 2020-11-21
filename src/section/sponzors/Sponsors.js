import React from "react";
import "../Section.scss"
import SectionLabel from "../../common/SectionLabel";
import nikolas from "../../content/sponzors/nikolas.jpg";

class Sponsors extends React.Component {

	render() {
		return <React.Fragment>
			<section id="Sponsors" className="uk-section uk-section-default uk-height-viewport uk-width-viewport">
				<div className="uk-container uk-container-large uk-text-center uk-section uk-padding-remove-top">
					<SectionLabel>Sponzoři</SectionLabel>
					<div className="uk-container uk-section uk-padding-remove-top uk-padding-remove-bottom">
						<div className="uk-grid uk-flex-center uk-grid-large uk-margin-xlarge-top"
							 data-uk-scrollspy="target: > div; delay: 150; cls: uk-animation-slide-bottom-medium"
							 data-uk-grid="">
							<div>
								<img className="uk-border-circle" src={nikolas} width="320" height="320" alt=""/>
								<p className="uk-h2">Nikolas Charalambidis</p>
								<p className="uk-h4 uk-margin-remove-top">Tvůrce webu</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	}
}

export default Sponsors;