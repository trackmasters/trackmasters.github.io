import React from "react";

import './Navigation.scss'

import mixpanel from 'mixpanel-browser';

export default function Navigation() {
	return (
		<div id='sidenav' uk-sticky className="uk-position-fixed uk-active uk-height-viewport"
			 data-uk-scrollspy-nav={"closest: li; scroll: true; offset: 0; overflow: true"}>
			<ul className="uk-nav uk-nav-default tm-nav uk-nav-parent-icon">
				<li className=""><a onClick={() => { track("Home")}} href="#Home"><span>ÚVOD</span></a></li>
				<li className=""><a onClick={() => { track("News")}} href="#News"><span>NOVINKY</span></a></li>
				<li className=""><a onClick={() => { track("AboutRacing")}} href="#AboutRacing"><span>O ZÁVODU</span></a></li>
				<li className=""><a onClick={() => { track("RacingEvents")}} href="#RacingEvents"><span>TERMÍNY</span></a></li>
				<li className=""><a onClick={() => { track("Contacts")}} href="#Contacts"><span>KONTAKTY</span></a></li>
				<li className=""><a onClick={() => { track("Director")}} href="#Director"><span>ŘEDITEL</span></a></li>
				<li className=""><a onClick={() => { track("Organizers")}} href="#Organizers"><span>POŘADATELÉ</span></a></li>
				<li className=""><a onClick={() => { track("Sponsors")}} href="#Sponsors"><span>SPONZOŘI</span></a></li>
			</ul>
		</div>
	);
}

function track(event) {
	console.log("Navigation track START")
	mixpanel.track(event);
	console.log("Navigation track END")
}