import React from "react";

import './Navigation.scss'

class Navigation extends React.Component {

	componentDidMount() {
		//UIkit.scrollspyNav('#sidenav', {closest: 'li', scroll: true, offset:170, cls:'uk-active'});
	}

	render() {
		return (
			<div id='sidenav' uk-sticky className="uk-position-fixed uk-active uk-height-viewport" uk-scrollspy-nav={"closest: li; scroll: true; offset: 0"}>
				<ul className="uk-nav uk-nav-default tm-nav uk-nav-parent-icon">
					<li className=""><a href="#background"><span>ÚVOD</span></a></li>
					<li className=""><a href="#RacingEvents"><span>TERMÍNY</span></a></li>
					<li className=""><a href="#AboutRacing"><span>O ZÁVODU</span></a></li>
					<li className=""><a href="#News"><span>NOVINKY</span></a></li>
					<li className=""><a href="#Contacts"><span>KONTAKTY</span></a></li>
					<li className=""><a href="#Organizers"><span>POŘADATELÉ</span></a></li>
					<li className=""><a href="#Sponsors"><span>SPONZOŘI</span></a></li>
				</ul>
			</div>
		);
	}
}

export default Navigation;