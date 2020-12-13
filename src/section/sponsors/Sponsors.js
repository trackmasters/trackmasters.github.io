import React from "react";
import SponsorCard from "./SponsorCard";

import sponsors from "../../content/sponsors/sponsors.json";
import Section from "../../components/Section";

class Sponsors extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			imageMap: imageMap()
		};
	}

	render() {
		let index = 0;

		return <Section id={this.props.id} feel={this.props.feel} label={this.props.label}>
			<div data-uk-slider="finite: true">
				<div className="uk-position-relative uk-visible-toggle" tabIndex="-1">
					<div className="uk-slider-container" style={{'padding': '0px 25px 50px 25px'}}>
						<ul className="uk-slider-items uk-child-width-1-3 uk-grid"
							data-uk-scrollspy="target: > li; delay: 150; cls: uk-animation-slide-bottom-medium"
							data-uk-grid="">
							{
								sponsors.map(sponsor => {
									const imageComponent = this.state.imageMap.get(sponsor.image);
									index++;
									return <li key={index} className="uk-align-center uk-margin-remove-top">
										<SponsorCard index={index} sponsor={sponsor} image={imageComponent}/>
									</li>
								})
							}
						</ul>
					</div>
				</div>
				<ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"/>
			</div>
		</Section>
	}
}

function imageMap() {
	const imageMap = new Map();
	for (const sponsor of sponsors) {
		if (!imageMap.has(sponsor.image)) {
			const image = require(`../../content/sponsors/${sponsor.image}`);
			imageMap.set(sponsor.image, image);
		}
	}
	return imageMap;
}

export default Sponsors;