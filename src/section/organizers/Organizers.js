import React from "react";

import './Organizers.scss';

import { useImageMap } from "../../hooks/useImageMap";

import Section from "../../components/Section";
import SliderContainerList from "../../components/SliderContainerList";
import OrganizerCard from "./OrganizerCard";

import organizers from "../../content/organizers/organizers.json";

export default function Organizers(props) {
	return <Section id="Organizers" feel={props.feel} label={props.label}>
		<SliderContainerList>
			<OrganizerCards organizers={organizers} />
		</SliderContainerList>
	</Section>
}

function OrganizerCards(props) {

	const imageMap = useImageMap(organizers, "organizers");
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