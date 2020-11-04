import React from "react";
import "../Section.scss"
import SectionLabel from "../../common/SectionLabel";

import './Contacts.scss';

import denis from "../../content/contacts/denis.jpg"
import contacts from "../../content/contacts/contacts.json";

class Contacts extends React.Component {

	render() {
		return <React.Fragment>
			<section id="Contacts" className="uk-section uk-section-default uk-height-viewport uk-width-viewport">
				<div className="uk-container uk-section uk-padding-remove-top">
					<SectionLabel>Kontakty</SectionLabel>
					<div className="uk-container uk-section uk-padding-remove-top uk-padding-remove-bottom">
						<div className="uk-grid uk-grid-large uk-margin-xlarge-top"
							 data-uk-scrollspy="target: > div; delay: 150; cls: uk-animation-slide-bottom-medium"
							 data-uk-grid="">

							<img className="uk-align-left" style={{'maxHeight': '50vh'}} src={denis} alt=""/>

							<div className="uk-width-1-2 uk-padding-small">
								<p className="uk-h1 uk-margin-small">{contacts.name}</p>
								<p className="uk-h5 uk-margin-small">- {contacts.label}</p>
								<hr/>
								<p className="uk-h3 uk-margin-small">{contacts.email}</p>
								<p className="uk-h3 uk-margin-small">{contacts.phone}</p>
								<p className="uk-h3 uk-margin-small">{contacts.addressLine1}</p>
								<p className="uk-h3 uk-margin-small">{contacts.addressLine2}</p>

								<ul className="uk-iconnav uk-margin-medium-top">
									<li className="uk-margin-medium-left contact-link uk-padding-remove-left">
										{/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
										<a href="/#" uk-icon="ratio: 4; icon: facebook"/>
									</li>
									<li className="uk-margin-medium-left contact-link uk-padding-remove-left">
										{/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
										<a href="/#" uk-icon="ratio: 4; icon: mail"/>
									</li>
									<li className="uk-margin-medium-left contact-link uk-padding-remove-left">
										{/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
										<a href="/#" uk-icon="ratio: 4; icon: instagram"/>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	}
}

export default Contacts;