import React from "react";
import "../Section.scss"
import SectionLabel from "../../common/SectionLabel";
import SponsorCard from "./SponsorCard";

import sponsors from "../../content/sponsors/sponsors.json";

class Sponsors extends React.Component {

	constructor(props) {
		super(props)

		const imageMap = new Map();
		for (const sponsor of sponsors) {
			if (!imageMap.has(sponsor.image)) {
				const image = require(`../../content/sponsors/${sponsor.image}`);
				imageMap.set(sponsor.image, image);
			}
		}

		this.state = {
			imageMap: imageMap
		};
	}

	render() {
		let index = 0;

		return <React.Fragment>
			<section id="Sponsors" className="uk-section uk-section-default uk-height-viewport uk-width-viewport">
				<div className="uk-container uk-container-large uk-text-center uk-section uk-padding-remove-top">
					<SectionLabel>Sponzoři</SectionLabel>
					<div className="uk-margin-xlarge-top" data-uk-slider="finite: true">
						<div className="uk-position-relative uk-dark uk-visible-toggle" tabIndex="-1">
							<div className="uk-slider-container" style={{'padding': '0px 25px 50px 25px'}}>
								<ul className="uk-slider-items uk-child-width-1-3 uk-grid"
									data-uk-scrollspy="target: > li; delay: 150; cls: uk-animation-slide-bottom-medium"
									data-uk-grid="">
									{
										sponsors.map(sponsor => {
											const imageComponent = this.state.imageMap.get(sponsor.image);
											index++;
											return <li key={index} className="uk-align-center">
												<SponsorCard index={index} sponsor={sponsor} image={imageComponent}/>
											</li>
										})
									}
								</ul>
							</div>
						</div>
						<ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"/>
					</div>
				</div>
			</section>
		</React.Fragment>
	}
}

export default Sponsors;