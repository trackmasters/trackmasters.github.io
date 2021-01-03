import React from "react";

import './Navigation.scss'

export default function Navigation() {
	return (
		<div id='sidenav' uk-sticky className="uk-position-fixed uk-active uk-height-viewport"
			 data-uk-scrollspy-nav={"closest: li; scroll: true; offset: 0; overflow: true"}>
			<ul className="uk-nav uk-nav-default tm-nav uk-nav-parent-icon">
				<li className=""><a href="#Home"><span>ÚVOD</span></a></li>
				<li className=""><a href="#News"><span>NOVINKY</span></a></li>
				<li className=""><a href="#AboutRacing"><span>O ZÁVODU</span></a></li>
				<li className=""><a href="#RacingEvents"><span>TERMÍNY</span></a></li>
				<li className=""><a href="#Contacts"><span>KONTAKTY</span></a></li>
				<li className=""><a href="#Director"><span>ŘEDITEL</span></a></li>
				<li className=""><a href="#Organizers"><span>POŘADATELÉ</span></a></li>
				<li className=""><a href="#Sponsors"><span>SPONZOŘI</span></a></li>
			</ul>
		</div>
	);
}