import React from "react";
import "../Section.scss";
import "./RacingEvents.scss";

import motol from "../../images/motol.jpg";
import trebesin from "../../images/trebesin.jpg";


import RacingEventsPanel from './RacingEventsPanel';
import RacingEventCard from "./RacingEventCard";

class RacingEvents extends React.Component {

	render() {
		return <React.Fragment>
			<section id="RacingEvents" className="uk-section uk-section-default uk-height-viewport uk-width-viewport">
				<div className="uk-container uk-text-center uk-section uk-padding-remove-top">
					<h2 className="uk-heading-medium uk-width-1-2@m uk-text-center uk-text-top uk-position-small uk-margin-auto"
						data-uk-parallax="opacity: 0,1; y: -30,0; scale: 1,1; viewport: 0.3;">Termíny závodu</h2>
					<RacingEventsPanel>
						<RacingEventCard date="1. dubna 2021" place="Praha, Motol" image={motol} />
						<RacingEventCard date="1. června 2021" place="Praha, Třebešín" image={trebesin} />
						<RacingEventCard date="1. srpna 2021" place="Praha, Třebešín" image={trebesin} />
					</RacingEventsPanel>
				</div>
			</section>
		</React.Fragment>
	}
}

export default RacingEvents;