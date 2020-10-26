import React from "react";
import "../Section.scss";
import "./RacingEvents.scss";

import RacingEventsJson from "../../content/racingEvents/racingEvents.json";

import motol from "../../content/racingEvents/motol.jpg";
import trebesin from "../../content/racingEvents/trebesin.jpg";

import RacingEventsPanel from './RacingEventsPanel';
import RacingEventCard from "./RacingEventCard";

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
	//	const d = this.state.data.map((message, index) => (
	//		{
	//			"date": message.date,
	//			"place": message.place,
	//			"image": React.lazy(() => import(`${message}`))
	//		}))
	//	console.log(d);{
	//		d.map((message, index) => (
	//			<RacingEventCard key={index} date={message.date} place={message.place} image={message.image} />
	//		))
	//	}

		//var OtherComponent = React.lazy(() => import('./OtherComponent'));

 		return <React.Fragment>
			<section id="RacingEvents" className="uk-section uk-section-default uk-height-viewport uk-width-viewport">
				<div className="uk-container uk-text-center uk-section uk-padding-remove-top">
					<h2 className="uk-heading-medium uk-width-1-2@m uk-text-center uk-text-top uk-position-small uk-margin-auto"
						data-uk-parallax="opacity: 0,1; y: -30,0; scale: 1,1; viewport: 0.3;">Termíny závodu</h2>
					<RacingEventsPanel>
						{
							this.state.json.map((message, index) => {
								switch (message.image) {
									case "motol": return <RacingEventCard key={index} date={message.date} place={message.place} image={motol} />
									case "trebesin":
									default: return  <RacingEventCard key={index} date={message.date} place={message.place} image={trebesin} />
								}
							})
						}
					</RacingEventsPanel>
				</div>
			</section>
		</React.Fragment>
	}
}

export default RacingEvents;