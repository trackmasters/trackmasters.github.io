import React from "react";
import "../Section.scss"
import SectionLabel from "../../common/SectionLabel";

import denis from "../../content/contacts/denis.jpg"
import contacts from "../../content/contacts/contacts.json";

class Director extends React.Component {

	render() {
		return <React.Fragment>
			<section id="Director" className="uk-section uk-section-default uk-height-viewport uk-width-viewport">
				<div className="uk-container uk-section uk-padding-remove-top">
					<SectionLabel>Ředitel závodu</SectionLabel>
					<div className="uk-container uk-section uk-padding-remove-top uk-padding-remove-bottom">
						<div className="uk-grid uk-grid-large uk-margin-xlarge-top"
							 data-uk-scrollspy="target: > div; delay: 150; cls: uk-animation-slide-bottom-medium"
							 data-uk-grid="">

							<img className="uk-align-left" style={{'maxHeight': '50vh'}} src={denis} alt=""/>

							<div className="uk-width-1-2 uk-padding-small">
								<p className="uk-h1 uk-margin-small">{contacts.name}</p>
								<hr/>
								<p className="uk-h3 uk-margin-small uk-text-italic">
									&nbsp;&nbsp;&nbsp;&nbsp;"Je mi velkou ctí, že se nám společně s Ondřejem Seidlem podařilo po pěti letech prostřednictvím tohoto seriálu závodů znovuobnovení dráhového odvětví v rámci Unie amatérských cyklistů. Doufám, že i v dalších letech bude tato akce uspokojovat všechny účastníky, nehledě na jejich výkonnosti, a zároveň propojovala nadšence pro dráhovou cyklistiku."
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	}
}

export default Director;