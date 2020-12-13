import React from "react";
import "./AboutRacing.scss"

import data from "../../content/aboutRacing/aboutRacing.json";
import KenBurnsSection from "../../components/KenBurnsSection";

export default function AboutRacing(props) {

	return (
		<KenBurnsSection id={props.id} label={props.label}>
			<div className="uk-container uk-text-center uk-section uk-padding-remove-top">
				<div className="uk-grid uk-grid-large uk-child-width-1-1"
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
					<li key="instagram" className="uk-margin-medium-left contact-link uk-padding-remove-left">
						{/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
						<a href="/#" uk-icon="ratio: 4; icon: instagram"/>
					</li>
					<li key="twitter" className="uk-margin-medium-left contact-link uk-padding-remove-left">
						{/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
						<a href="/#" uk-icon="ratio: 4; icon: twitter"/>
					</li>
				</ul>
			</div>
		</KenBurnsSection>
	)
}
