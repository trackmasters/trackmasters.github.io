import React from "react";

import { useMediaQuery } from 'react-responsive';
import {openInNewTab} from "../../../utils";

function RacingEventButton(props) {

	const isS = useMediaQuery({query: '(max-width: 640px)'});

	return isS ?
		props.url ?
			<div className="uk-padding-remove uk-margin-remove uk-flex-inline uk-flex-middle uk-width-expand">
				<button className="racing-button uk-button uk-button-default uk-width-1-3 uk-margin-remove uk-padding-remove"
						onClick={() => { openInNewTab(props.url)}}>
					<span className="racing-button-icon" uk-icon={`icon: ${props.icon}; ratio: 2`}/>
				</button>
				<p className="uk-margin-small-left">{props.text}</p>
			</div>
			:
			<div className="uk-padding-remove uk-margin-remove uk-flex-inline uk-flex-middle uk-width-expand">
				<button className="racing-button uk-button uk-button-default uk-width-1-3 uk-margin-remove uk-padding-remove"
						disabled>
					<span className="racing-button-icon" uk-icon={`icon: ${props.icon}; ratio: 2`}/>
				</button>
				<p className="uk-margin-small-left">{props.text}</p>
			</div>
		:

		props.url ?
			<button className="racing-button uk-button uk-button-default uk-width-1-3 uk-margin-remove uk-padding-remove"
					onMouseOver={() => props.setText(props.text)} onClick={() => { openInNewTab(props.url)}}>
				<span className="racing-button-icon" uk-icon={`icon: ${props.icon}; ratio: 2`}/>
			</button>
			:
			<button className="racing-button uk-button uk-button-default uk-width-1-3 uk-margin-remove uk-padding-remove"
					onMouseOver={() => props.setText("")} disabled>
				<span className="racing-button-icon" uk-icon={`icon: ${props.icon}; ratio: 2`}/>
			</button>
	;
}

export default function RacingEventCard(props) {

	const [text, setText] = React.useState("");

	const isXS = useMediaQuery({query: '(max-width: 480px)'})
	const isS = useMediaQuery({query: '(max-width: 640px)'})

	const informationUrl = props.links && props.links.information;
	const registrationUrl = props.links && props.links.registration;
	const resultsUrl = props.links && props.links.results;

	return (
		isXS ?
			<React.Fragment>
				<div className="uk-grid uk-card-body uk-card-hover uk-grid-collapse uk-child-width-1-1 uk-margin uk-padding-small"
					 data-uk-grid="">
					<p className="event-number uk-margin-remove uk-text-center">#{props.index}</p>
							<p className="event-detail uk-margin-remove-top">{props.date}</p>

					<div className="uk-flex-middle uk-flex-center">
						<div className="uk-card-body">
							<RacingEventButton icon="link" text={"Informace"} setText={setText} url={informationUrl} />
							<RacingEventButton icon="sign-in" text={"Registrace"} setText={setText} url={registrationUrl} />
							<RacingEventButton icon="list" text={"Výsledky"} setText={setText} url={resultsUrl} />
						</div>
					</div>
				</div>
			</React.Fragment>

		: isS ?

			<React.Fragment>
				<div className="uk-grid uk-card-body uk-card-hover uk-grid-collapse uk-child-width-1-2 uk-margin uk-padding-small"
					 data-uk-grid="">
					<div className="uk-card-media-left uk-cover-container">
						<div className="uk-card-body">
							<p className="event-number uk-margin-remove uk-text-center">#{props.index}</p>
							<p className="event-detail uk-margin-remove-top">{props.date}</p>
						</div>
					</div>
					<div className="uk-flex-middle">
						<div className="uk-card-body uk-padding-small">
							<RacingEventButton icon="link" text={"Informace"} setText={setText} url={informationUrl} />
							<RacingEventButton icon="sign-in" text={"Registrace"} setText={setText} url={registrationUrl} />
							<RacingEventButton icon="list" text={"Výsledky"} setText={setText} url={resultsUrl} />
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