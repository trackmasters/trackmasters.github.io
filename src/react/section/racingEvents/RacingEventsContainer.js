import React from "react";

export default function RacingEventsContainer(props) {

	return (
		<div className="uk-container" style={{"paddingLeft":"60px", "paddingRight":"60px"}}>
			<div className="uk-flex uk-flex-center uk-grid-column-small uk-grid-row-large uk-child-width-1-1 uk-child-width-1-4@m uk-child-width-1-2@s "
				data-uk-scrollspy="target: > li; delay: 150; cls: uk-animation-slide-bottom-medium"
				data-uk-grid="">
				{props.children.map((child, index) => <div className="uk-margin-remove-top" key={index}>{child}</div>)}
			</div>
		</div>
	)
}