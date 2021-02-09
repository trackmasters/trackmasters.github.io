import React from "react";

import './Organizers.scss';

import { useImageMap } from "../../hooks/useImageMap";

import Section from "../../common/Section";
import SliderContainerList from "../../common/SliderContainerList";
import OrganizerCard from "./OrganizerCard";

import config from "../../../content/trackmasters.config.json";

export default function Organizers(props) {
	return <Section id="Organizers" feel={props.feel} label={props.label}>
		<SliderContainerList>
			<OrganizerCards organizers={config.organizers} />
		</SliderContainerList>
	</Section>
}

function OrganizerCards(props) {

	const imageMap = useImageMap(config.organizers, "_website");
	return (
		<React.Fragment>
			{
				props.organizers.map((organizer, index) => {
					const imageComponent = imageMap.get(organizer.image);
					return (
						<li key={index} className="uk-align-center uk-margin-remove-top">
							<OrganizerCard index={index} organizer={organizer} image={imageComponent}/>
						</li>
					);
				})
			}
		</React.Fragment>
	);
}