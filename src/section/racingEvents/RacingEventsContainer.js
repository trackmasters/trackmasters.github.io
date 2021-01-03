import React from "react";

//import { useMediaQuery } from 'react-responsive';

export default function RacingEventsContainer(props) {

	//const isM = useMediaQuery({query: '(max-width: 960px)'})


	return (

		<div className="uk-container" style={{"paddingLeft":"60px", "paddingRight":"60px"}}>
			<div className="uk-flex uk-flex-center uk-grid-column-small uk-grid-row-large uk-child-width-1-4@l uk-child-width-1-2@s uk-child-width-1-1@s " uk-grid
				data-uk-scrollspy="target: > li; delay: 150; cls: uk-animation-slide-bottom-medium"
				data-uk-grid="">
				{props.children.map((child, index) => <div key={index}>{child}</div>)}
			</div>
		</div>

	)
}