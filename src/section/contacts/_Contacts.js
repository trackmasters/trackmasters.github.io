import React from "react";
import "../Section.scss"
import SectionLabel from "../../common/SectionLabel";

import './_Contacts.scss';

import contacts from "../../content/contacts/contacts.json";


function _Contacts(props) {



	// AIzaSyBFLYKkucVK3ZITy5hVOSB-e_mxwnRaH0w

	return <React.Fragment>
		<section id={props.id} className="uk-section uk-section-default uk-height-viewport uk-width-viewport">
			<div className="uk-container uk-container-large uk-section uk-padding-remove-top">
				<SectionLabel>Kontakty</SectionLabel>
				<div className="uk-container uk-section uk-padding-remove-top uk-padding-remove-bottom">
					<div className="uk-grid uk-grid-large uk-margin-xlarge-top"
						 data-uk-scrollspy="target: > div; delay: 150; cls: uk-animation-slide-bottom-medium"
						 data-uk-grid="">

						<div className="uk-width-1-2 uk-padding-small">
							<p className="uk-h1 uk-margin-small">{contacts.name}</p>
							<p className="uk-h5 uk-margin-small">- {contacts.label}</p>
							<hr/>
							<p className="uk-h3 uk-margin-small">{contacts.email}</p>
							<p className="uk-h3 uk-margin-small">{contacts.phone}</p>
							<p className="uk-h3 uk-margin-small">{contacts.addressLine1}</p>
							<p className="uk-h3 uk-margin-small">{contacts.addressLine2}</p>

							<ul className="uk-iconnav uk-margin-medium-top">
								<li key="facebook" className="uk-margin-medium-left contact-link uk-padding-remove-left">
									{/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
									<a href="/#" uk-icon="ratio: 4; icon: facebook"/>
								</li>
								<li key="mail" className="uk-margin-medium-left contact-link uk-padding-remove-left">
									{/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
									<a href="/#" uk-icon="ratio: 4; icon: mail"/>
								</li>
								<li key="instagram" className="uk-margin-medium-left contact-link uk-padding-remove-left">
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

export default _Contacts;