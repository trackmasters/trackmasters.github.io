import React from "react";
import { useText } from "../hooks/useText"
import "./Background.scss"
import introduction from "../content/introduction.txt";

export default function Background () {
	const text = useText(introduction);

	return (
		<section id="background" className="
			uk-background-fixed
			uk-background-top-center
			uk-background-norepeat
			uk-background-cover
			uk-height-viewport
			uk-width-viewport
			uk-flex
			uk-flex-top
			uk-background-blend-hard-light
			uk-background-primary"
		>
			<h1>{text}</h1>
		</section>
	);
}