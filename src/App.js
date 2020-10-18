import React from "react";

import '../node_modules/uikit/dist/css/uikit.min.css';
import "./App.css";

import Navigation from "./navigation/Navigation";
import Background from "./background/Background";

import AboutRacing from "./section/aboutRacing/AboutRacing";
import RacingEvents from "./section/racingEvents/RacingEvents";
import News from "./section/News";
import Organizers from "./section/Organizers";
import Contacts from "./section/Contacts";
import Sponsors from "./section/Sponsors";

export default class App extends React.Component {

	render() {
		return (
			<React.Fragment>
				<Navigation />
				<Background />
				<RacingEvents />
				<AboutRacing />
				<News />
				<Contacts />
				<Organizers />
				<Sponsors />
			</React.Fragment>
		);
	}
}
