import React from "react";

import './Sponsors.scss';

import { useImageMap } from "../../hooks/useImageMap";

import Section from "../../components/Section";
import SponsorCard from "./SponsorCard";
import SliderContainerList from "../../components/SliderContainerList";

import sponsors from "../../content/sponsors/sponsors.json";

export default function Sponsors(props) {
	return <Section id="Sponsors" feel={props.feel} label={props.label}>
		<SliderContainerList>
			<SponsorCards sponsors={sponsors} />
		</SliderContainerList>
	</Section>
}

function SponsorCards(props) {
	const imageMap = useImageMap(sponsors, "sponsors");
	console.log("imageMap", imageMap)
	return (
		<React.Fragment>
			{
				props.sponsors.map((sponsor, index) => {
					const imageComponent = imageMap.get(sponsor.image);
					return (
						<li key={index} className="uk-align-center uk-margin-remove-top">
							<SponsorCard index={index} sponsor={sponsor} image={imageComponent}/>
						</li>
					);
				})
			}
		</React.Fragment>
	);
}

