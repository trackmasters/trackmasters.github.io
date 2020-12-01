import React from "react";
import "./Home.scss";
import trackMasters from "../content/track-masters.svg";

export default function Home(props) {

	return (
		<section id={props.id} className="
			uk-background-fixed
			uk-background-top-center
			uk-background-norepeat
			uk-background-cover
			uk-height-viewport
			uk-width-viewport
			uk-flex
			uk-flex-top
			uk-background-blend-hard-light"
			style={{"padding": "100px"}}>

			<div className="uk-align-center uk-container-xlarge"
				 data-uk-scrollspy="target: > img; delay: 150; cls: uk-animation-slide-bottom-medium">
				<img style={{
					}}
					 src={trackMasters} width="800" height="800" alt={"track-masters"}
					 uk-svg/>
			</div>
		</section>
	);
}
