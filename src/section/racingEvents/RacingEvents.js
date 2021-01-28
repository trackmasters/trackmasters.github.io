import React from "react";
import "./RacingEvents.scss";

import RacingEventsJson from "../../content/racingEvents/racingEvents.json";

import RacingEventsContainer from './RacingEventsContainer';
import RacingEventCard from "./RacingEventCard";
import Section from "../../components/Section";

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

		return <Section id="RacingEvents" feel={this.props.feel} label={this.props.label}>
			<RacingEventsContainer>
				{
					this.state.json.map(event => {
						index++;
						return <RacingEventCard key={index} date={event.date} enabled={event.enabled} index={index}/>
					})
				}
			</RacingEventsContainer>
		</Section>
	}
}

export default RacingEvents;