import React from "react";
import "../Section.scss"
import {useText} from "../../hooks/useText";
import "./AboutRacing.scss";

import aboutRacing from "../../content/aboutRacing/aboutRacing.txt";

export default function AboutRacing() {

	const text = useText(aboutRacing);

	return (
		<section id="AboutRacing" className="uk-section uk-inline uk-section-default uk-padding-remove uk-height-viewport uk-width-viewport uk-overflow-hidden">
			<div id="AboutRacingBackground" className="uk-container uk-height-viewport uk-width-viewport uk-text-center uk-background-cover uk-padding-remove-top uk-animation-kenburns uk-animation-reverse"/>
			<div className="uk-position-cover uk-overlay uk-overlay-primary">
				<div style={{ 'marginTop': '57px' }}>
					<h2 className="uk-heading-medium uk-width-1-2@m uk-text-center uk-text-top uk-position-small uk-margin-auto"
						data-uk-parallax="opacity: 0,1; y: -30,0; scale: 1,1; viewport: 0.3;">O závodu</h2>
					<div className="uk-container uk-text-center uk-section uk-padding-remove-top">
					<div className="uk-grid uk-grid-large uk-child-width-1-1 uk-margin-xlarge-top"
						 data-uk-scrollspy="target: > div; delay: 150; cls: uk-animation-slide-bottom-medium"
						 data-uk-grid="">
						<div className="uk-width-1-1">
							<p className="uk-text-justify uk-text-large">{text}</p>
						</div>
					</div>
					</div>
				</div>
			</div>
		</section>
	)
}
