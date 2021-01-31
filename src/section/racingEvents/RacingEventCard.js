import React from "react";

import { useMediaQuery } from 'react-responsive';
import {openInNewTab} from "../../utils";

function RacingEventButton(props) {
	return props.url ?
		<button className="racing-button uk-button uk-button-default uk-width-1-3 uk-margin-remove uk-padding-remove"
				onMouseOver={() => props.setText(props.text)}
				onClick={() => { openInNewTab(props.url)}}
		>
			<span className="racing-button-icon" uk-icon={`icon: ${props.icon}; ratio: 2`}/>
		</button>
		:
		<button className="racing-button uk-button uk-button-default uk-width-1-3 uk-margin-remove uk-padding-remove"
				onMouseOver={() => props.setText("")}
				disabled
		>
			<span className="racing-button-icon" uk-icon={`icon: ${props.icon}; ratio: 2`}/>
		</button>
	;
}

export default function RacingEventCard(props) {

	const [text, setText] = React.useState("");
	const isS = useMediaQuery({query: '(max-width: 640px)'})

	const informationUrl = props.links && props.links.information;
	const registrationUrl = props.links && props.links.registration;
	const resultsUrl = props.links && props.links.results;

	return (
		isS ?
		<React.Fragment>
			<div className="uk-grid uk-card-body uk-card-hover uk-grid-collapse uk-child-width-1-2 uk-margin"
				 data-uk-grid="">
				<div className="uk-card-media-left uk-cover-container">
					<div className="uk-card-body">
						<p className="event-number uk-margin-remove uk-text-center">#{props.index}</p>
						<p className="event-detail uk-margin-remove-top">{props.date}</p>
					</div>
				</div>
				<div className="uk-flex-middle">
					<div className="uk-card-body uk-card-media-top"
						 uk-toggle={`target: #toggle-animation-${props.index}; animation: uk-animation-fade; mode: hover`}>
						<RacingEventButton icon="link" text={"Informace"} setText={setText} url={informationUrl} />
						<RacingEventButton icon="sign-in" text={"Registrace"} setText={setText} url={registrationUrl} />
						<RacingEventButton icon="list" text={"Výsledky"} setText={setText} url={resultsUrl} />
					</div>
					<div className="uk-card-body uk-card-media-bottom uk-text-center uk-padding-remove">
						<p id={`toggle-animation-${props.index}`}
						   className="event-detail uk-margin-remove uk-transition-fade uk-transition-opaque"
						   hidden>{text}</p>
					</div>
				</div>
			</div>
		</React.Fragment>

			:

		<React.Fragment>
			<div className="uk-card uk-card-body uk-card-hover uk-padding-remove">
				<div className="uk-card-media-top" >
					<p className="event-number uk-margin-remove uk-text-center">#{props.index}</p>
					<p className="event-detail uk-margin-remove-top">{props.date}</p>
				</div>
				<hr className="uk-margin-remove-bottom"/>
					<div className="event-body uk-card-media-bottom uk-text-center uk-padding-remove"
						 uk-toggle={`target: #toggle-animation-${props.index}; animation: uk-animation-fade; mode: hover`}>
						<RacingEventButton icon="link" text={"Informace"} setText={setText} url={informationUrl} />
						<RacingEventButton icon="sign-in" text={"Registrace"} setText={setText} url={registrationUrl} />
						<RacingEventButton icon="list" text={"Výsledky"} setText={setText} url={resultsUrl} />
					</div>
				<hr className="uk-margin-remove-top uk-margin-remove-bottom"/>
				<div className="uk-flex uk-flex-middle uk-flex-center" style={{'height': '50px'}}>
					<p id={`toggle-animation-${props.index}`} className="event-detail uk-margin-remove uk-transition-fade uk-transition-opaque" hidden>{text}</p>
				</div>
			</div>
		</React.Fragment>
	)
}