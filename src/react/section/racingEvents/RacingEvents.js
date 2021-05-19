import React from "react";
import "./RacingEvents.scss";

import RacingEventsJson from "../../../content/events.json";

import RacingEventsContainer from './RacingEventsContainer';
import RacingEventCard from "./RacingEventCard";
import Section from "../../common/Section";

class RacingEvents extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			json: RacingEventsJson
		};
	}

	render() {
		let index = 0;

		return <Section id="RacingEvents" feel={this.props.feel} label={this.props.label}>
			<RacingEventsContainer>
				{
					this.state.json.map(event => {
						index++;
						return <RacingEventCard key={index} date={event.date} links={event.links} index={index}/>
					})
				}
			</RacingEventsContainer>
		</Section>
	}
}

export default RacingEvents;
