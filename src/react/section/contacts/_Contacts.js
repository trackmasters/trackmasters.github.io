import React from "react";

import SectionLabel from "../../common/SectionLabel";

export default function Contacts(props) {

	return (
		<section id={props.id}
				 className="uk-section uk-inline uk-section-default uk-padding-remove uk-height-viewport uk-overflow-hidden">
			<div id="ContactsBackground"
				 className="uk-container uk-container-large uk-height-viewport uk-text-center uk-background-cover uk-padding-remove-top"
				 data-uk-scrollspy="cls: uk-animation-kenburns uk-animation-reverse; repeat: true"/>
			<div className="uk-position-cover uk-overlay uk-overlay-primary">
				<div style={{ 'marginTop': '57px' }}>
					<SectionLabel>Kontakty</SectionLabel>
					<div className="uk-container uk-text-center uk-section uk-padding-remove-top">
						<div className="uk-grid uk-grid-large uk-child-width-1-1 uk-margin-xlarge-top"
							 data-uk-scrollspy="target: > div; delay: 150; cls: uk-animation-slide-bottom-medium"
							 data-uk-grid="">
							<div className="uk-width-1-1">
								<p className="uk-text-justify uk-text-large">Plaintext</p>

								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4404.104697497723!2d14.487171001548738!3d50.084093473976324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa5e003497c2dbe5c!2zVmVsb2Ryb20gVMWZZWJlxaHDrW4!5e0!3m2!1sen!2scz!4v1606601106315!5m2!1sen!2scz"
									width="450" height="600" frameBorder="0" style={{"border": "0"}} allowFullScreen=""
									aria-hidden="false" tabIndex="0"/>

							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
