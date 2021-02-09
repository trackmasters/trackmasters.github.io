import React from "react";

import './Sponsors.scss';

import { useImageMap } from "../../hooks/useImageMap";

import Section from "../../common/Section";
import SponsorCard from "./SponsorCard";
import SliderContainerList from "../../common/SliderContainerList";

import config from "../../../content/trackmasters.config.json";

export default function Sponsors(props) {
	return <Section id="Sponsors" feel={props.feel} label={props.label}>
		<SliderContainerList>
			<SponsorCards sponsors={config.sponsors} />
		</SliderContainerList>
	</Section>
}

function SponsorCards(props) {
	const imageMap = useImageMap(config.sponsors, "_website");
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

