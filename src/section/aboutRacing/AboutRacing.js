import React from "react";
import "../Section.scss"
import {useText} from "../../hooks/useText";

import aboutRacing from "../../content/aboutRacing.txt";
import tShirts from "../../images/t-shirts.jpg";

export default function AboutRacing() {

	const text = useText(aboutRacing);

	// TODO: adjust margin and padding
	return (
		<section id="AboutRacing" className="uk-section uk-section-default uk-height-viewport uk-width-viewport uk-background-cover uk-light uk-padding-remove-top uk-padding-remove-bottom">
			<div className="uk-container uk-text-center uk-section uk-padding-remove-top uk-overlay uk-overlay-primary
			uk-height-viewport uk-width-viewport uk-padding-remove-top uk-padding-remove-bottom">
				<div className="uk-container uk-text-center uk-section uk-padding-remove-top">
					<h2 className="uk-heading-medium uk-width-1-2@m uk-text-center uk-text-top uk-position-small uk-margin-auto uk-margin-large-top"
						data-uk-parallax="opacity: 0,1; y: -30,0; scale: 1,1; viewport: 0.3;">O závodu</h2>
					<div className="uk-grid uk-grid-large uk-child-width-1-1 uk-margin-xlarge-top"
						 data-uk-scrollspy="target: > div; delay: 150; cls: uk-animation-slide-bottom-medium"
						 data-uk-grid="">
						<div className="uk-width-1-1">
							<p className="uk-text-justify uk-text-large">{text}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
