import React from "react";
import {useMediaQuery} from "react-responsive";

export default function NewsContainer(props) {

	const isM = useMediaQuery({query: '(max-width: 960px)'})
	const sliderMargin = isM ? "uk-margin-remove" : "uk-margin-small";

	return (
		<div className="uk-container" uk-slider="finite: true" style={{"paddingLeft":"60px", "paddingRight":"60px"}}>
			<div className="uk-position-relative uk-dark uk-visible-toggle" tabIndex="-1">
				<div className="uk-slider-container">
					<ul className="uk-slider-items uk-child-width-1-3@xl uk-child-width-1-2@l uk-child-width-1-2@m uk-child-width-1-1@s uk-grid"
						data-uk-scrollspy="target: > li; delay: 150; cls: uk-animation-slide-bottom-medium"
						data-uk-grid="">
						{props.children.map((child, index) => <li key={index}>{child}</li>)}
					</ul>
				</div>
				{/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
				<a className="uk-position-center-left-out uk-slidenav-large uk-position-large" style={{"margin":"0"}} href="/#" data-uk-slidenav-previous data-uk-slider-item="previous"/>
				{/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
				<a className="uk-position-center-right-out uk-slidenav-large uk-position-large" style={{"margin":"0"}} href="/#" data-uk-slidenav-next data-uk-slider-item="next"/>
			</div>
			<ul className={`uk-slider-nav uk-dotnav uk-flex-center ${sliderMargin}`}/>
		</div>
	);
}