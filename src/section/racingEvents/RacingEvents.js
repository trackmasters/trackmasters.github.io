import React from "react";
import "../Section.scss";
import "./RacingEvents.scss";

import RacingEventsJson from "../../content/racingEvents/racingEvents.json";

import motol from "../../content/racingEvents/motol.jpg";
import trebesin from "../../content/racingEvents/trebesin.jpg";

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
		return <React.Fragment>
			<section id="RacingEvents" className="uk-section uk-section-default uk-height-viewport uk-width-viewport">
				<div className="uk-container uk-text-center uk-section uk-padding-remove-top">
					<SectionLabel>Termíny závodu</SectionLabel>
					<RacingEventsContainer>
						{
							this.state.json.map((event, index) => {
								switch (event.image) {
									case "motol": return <RacingEventCard key={index} date={event.date} place={event.place} image={motol} />
									case "trebesin":
									default: return <RacingEventCard key={index} date={event.date} place={event.place} image={trebesin} />
								}
							})
						}
					</RacingEventsContainer>
				</div>
			</section>
		</React.Fragment>
	}
}

export default RacingEvents;