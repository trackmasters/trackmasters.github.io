import React from "react";
import "../Section.scss"
import "./AboutRacing.scss"

import data from "../../content/aboutRacing/aboutRacing.json";
import SectionLabel from "../../common/SectionLabel";

export default function AboutRacing(props) {

	return (
		<section id={props.id}
				 className="uk-section uk-inline uk-section-default uk-padding-remove uk-height-viewport uk-width-viewport uk-overflow-hidden">
			<div id="AboutRacingBackground"
				 className="uk-container  uk-container-large uk-height-viewport uk-width-viewport uk-text-center uk-background-cover uk-padding-remove-top"
				 data-uk-scrollspy="cls: uk-animation-kenburns uk-animation-reverse; repeat: true"/>
			<div className="uk-position-cover uk-overlay uk-overlay-primary">
				<div style={{ 'marginTop': '57px' }}>
					<SectionLabel>O závodu</SectionLabel>
					<div className="uk-container uk-text-center uk-section uk-padding-remove-top">
						<div className="uk-grid uk-grid-large uk-child-width-1-1 uk-margin-xlarge-top"
							 data-uk-scrollspy="target: > div; delay: 150; cls: uk-animation-slide-bottom-medium"
							 data-uk-grid="">
							<div className="uk-width-1-1">
								<p className="uk-text-justify uk-text-large">{data.text}</p>
							</div>
						</div>
						<ul className="uk-iconnav uk-margin-medium-top uk-align-center">
							<li key="facebook" className="uk-margin-medium-left contact-link uk-padding-remove-left">
								{/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
								<a href="/#" uk-icon="ratio: 4; icon: facebook"/>
							</li>
							<li key="twitter" className="uk-margin-medium-left contact-link uk-padding-remove-left">
								{/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
								<a href="/#" uk-icon="ratio: 4; icon: twitter"/>
							</li>
							<li key="instagram" className="uk-margin-medium-left contact-link uk-padding-remove-left">
								{/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
								<a href="/#" uk-icon="ratio: 4; icon: instagram"/>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}
