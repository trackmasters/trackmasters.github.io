import React from "react";
import "../Section.scss";
import "./RacingEvents.scss";

import RacingEventsJson from "../../content/racingEvents/racingEvents.json";

import RacingEventsContainer from './RacingEventsContainer';
import RacingEventCard from "./RacingEventCard";
import SectionLabel from "../../common/SectionLabel";

class RacingEvents extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			json: RacingEventsJson
		};
	}

	importAll(r) {
		return r.keys().map(r);
	}

	render() {
		let index = 0;

		return <React.Fragment>
			<section id={this.props.id} className="uk-section uk-section-default uk-height-viewport uk-width-viewport">
				<div className="uk-container uk-container-large uk-text-center uk-section uk-padding-remove-top">
					<SectionLabel>Termíny závodu</SectionLabel>
					<RacingEventsContainer>
						{
							this.state.json.map(event => {
								index++;
								return <RacingEventCard key={index} date={event.date} place={event.place} index={index}/>
							})
						}
					</RacingEventsContainer>
				</div>
			</section>
		</React.Fragment>
	}
}

export default RacingEvents;