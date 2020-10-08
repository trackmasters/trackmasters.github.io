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
					<li className=""><a href="#background">Track Masters</a></li>
					<li className=""><a href="#RacingEvents">Termíny závodu</a></li>
					<li className=""><a href="#AboutRacing">O závodu</a></li>
					<li className=""><a href="#News">Novinky</a></li>
					<li className=""><a href="#Contacts">Kontakty</a></li>
					<li className=""><a href="#Organizers">Pořadatelé</a></li>
					<li className=""><a href="#Sponsors">Sponzoři</a></li>
				</ul>
			</div>
		);
	}
}

export default Navigation;