import React from "react";
import "./Home.scss";
import "./Section.scss";
import trackMasters from "../content/track-masters.svg";

export default function Home(props) {

	return (
		<section id={props.id} className="uk-section uk-section-default uk-height-viewport uk-width-viewport ">
			<div className="uk-text-center " data-uk-scrollspy="target: > img; delay: 150; cls: uk-animation-slide-bottom-medium">
				<img src={trackMasters} width="800" height="800" alt={"track-masters"} uk-svg/>
			</div>
		</section>
	);
}
