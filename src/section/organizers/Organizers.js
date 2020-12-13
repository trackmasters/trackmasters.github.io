import React from "react";

import kovo from "../../content/organizers/kovo.svg";

import uac from "../../content/organizers/unie-amaterskych-cyklistu.svg";
import Section from "../../components/Section";

class Organizers extends React.Component {

	render() {
		return <Section id={this.props.id} feel={this.props.feel} label={this.props.label}>
			<div className="uk-container uk-section uk-padding-remove-top uk-padding-remove-bottom">
				<div className="uk-grid uk-grid-large uk-flex-center uk-text-center"
					 data-uk-scrollspy="target: > div; delay: 150; cls: uk-animation-slide-bottom-medium"
					 data-uk-grid="">
					<div className="uk-margin-large-right">
						<div className="uk-border-circle"
							 style={{'margin':'0 auto', 'height':'320px', 'width':'320px', 'backgroundColor': 'white', 'overflow':'hidden'}}>
							<img style={{'marginTop': '100px'}} src={kovo} width="200" height="200" alt={"kovo"} data-uk-svg />
						</div>
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
		</Section>
	}
}

export default Organizers;