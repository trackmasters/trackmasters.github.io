import React from "react";
import "./Home.scss";
import trackMasters from "../content/track-masters.svg";

export default function Home(props) {

	console.log("trackMasters", trackMasters);

	return (
		<section id="Home" className="uk-section uk-section-default uk-height-viewport uk-flex uk-flex-center uk-flex-middle">
			<div className="uk-padding-remove">
				<div data-uk-scrollspy="target: > img; delay: 150; cls: uk-animation-slide-bottom-medium">
					<img src={trackMasters} width="800" height="800" alt={"track-masters"} className="uk-padding-small" uk-svg/>
				</div>
			</div>
		</section>
	);
}
