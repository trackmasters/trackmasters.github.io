import React from "react";
import "../Section.scss"
import SectionLabel from "../../common/SectionLabel";
import kovo from "../../content/organizers/kovo.png";

import uac from "../../content/organizers/unie-amaterskych-cyklistu.svg";

class Organizers extends React.Component {

	render() {
		return <React.Fragment>
			<section  id={this.props.id} className="uk-section uk-section-default uk-height-viewport uk-width-viewport">
				<div className="uk-container uk-container-large uk-text-center uk-section uk-padding-remove-top">
					<SectionLabel>Pořadatelé</SectionLabel>
					<div className="uk-container uk-section uk-padding-remove-top uk-padding-remove-bottom">
						<div className="uk-grid uk-grid-large uk-flex-center uk-margin-xlarge-top uk-text-center"
							 data-uk-scrollspy="target: > div; delay: 150; cls: uk-animation-slide-bottom-medium"
							 data-uk-grid="">
							<div className="uk-margin-large-right">
								<img className="uk-border-circle" src={kovo} width="320" height="320" alt=""/>
								<p className="uk-h2">TJ Kovo Praha</p>
							</div>
							<div className="uk-margin-large-right">
								<div className="uk-border-circle"
									 style={{'margin':'0 auto', 'height':'320px', 'width':'320px', 'backgroundColor': 'white', 'overflow':'hidden'}}>
									<img style={{'marginTop': '70px'}} src={uac} width="200" height="200" alt={"uac"} data-uk-svg />
								</div>
								<p className="uk-h2">Unie amatérských cyklistů</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	}
}

export default Organizers;