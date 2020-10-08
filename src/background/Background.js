import React from "react";
import "./Background.scss"

class Background extends React.Component {

	render() {
		return (
			<section id="background" className="uk-background-fixed uk-background-top-center uk-background-norepeat uk-background-cover
			uk-height-viewport uk-width-viewport uk-flex uk-flex-top uk-background-blend-hard-light uk-background-primary">
			</section>
		);
	}
}

export default Background;