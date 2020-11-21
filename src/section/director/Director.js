import React from "react";
import "../Section.scss"
import SectionLabel from "../../common/SectionLabel";

import denis from "../../content/director/denis.jpg"
import contacts from "../../content/contacts/contacts.json";

import data from "../../content/director/director.json";

function Director(props) {

	return <React.Fragment>
		<section id={props.id} className="uk-section uk-section-default uk-height-viewport uk-width-viewport">
			<div className="uk-container uk-container-large uk-section uk-padding-remove-top">
				<SectionLabel>Ředitel závodu</SectionLabel>
				<div className="uk-container uk-section uk-padding-remove-top uk-padding-remove-bottom">
					<div className="uk-grid uk-grid-large uk-margin-xlarge-top"
						 data-uk-scrollspy="target: > div; delay: 150; cls: uk-animation-slide-bottom-medium"
						 data-uk-grid="">

						<img className="uk-align-left" style={{'maxHeight': '50vh'}} src={denis} alt=""/>

						<div className="uk-width-1-2 uk-padding-small">
							<p className="uk-h1 uk-margin-small">{data.label}</p>
							<hr/>
							<p className="uk-h3 uk-margin-small uk-text-italic">"{data.text}"</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	</React.Fragment>
}

export default Director;