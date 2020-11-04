import React from "react";
import "./Section.scss"
import SectionLabel from "../common/SectionLabel";
import kovo from "../content/organizers/kovo.png";

class Organizers extends React.Component {

	render() {
		return <React.Fragment>
			<section id="Organizers" className="uk-section uk-section-default uk-height-viewport uk-width-viewport">
				<div className="uk-container uk-text-center uk-section uk-padding-remove-top">
					<SectionLabel>Pořadatelé</SectionLabel>
					<div className="uk-container uk-section uk-padding-remove-top uk-padding-remove-bottom">
						<div className="uk-grid uk-grid-large uk-flex-center uk-margin-xlarge-top"
							 data-uk-scrollspy="target: > div; delay: 150; cls: uk-animation-slide-bottom-medium"
							 data-uk-grid="">
							<div>
								<img className="uk-border-circle" style={{'border': '15px solid #08234a'}} src={kovo} width="320" height="320" alt=""/>
								<p className="uk-h2">TJ Kovo Praha</p>
							</div>
							<div>
								<img className="uk-border-circle" style={{'border': '15px solid #08234a'}} src={kovo} width="320" height="320" alt=""/>
								<p className="uk-h2">TJ Kovo Praha</p>
							</div>
							<div>
								<img className="uk-border-circle" style={{'border': '15px solid #08234a'}} src={kovo} width="320" height="320" alt=""/>
								<p className="uk-h2">TJ Kovo Praha</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	}
}

export default Organizers;