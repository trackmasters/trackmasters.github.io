import React from "react";

import '../node_modules/uikit/dist/css/uikit.min.css';
import "./App.css";

import Navigation from "./navigation/Navigation";
import Home from "./section/Home";

import AboutRacing from "./section/aboutRacing/AboutRacing";
import RacingEvents from "./section/racingEvents/RacingEvents";
import News from "./section/news/News";
import Organizers from "./section/organizers/Organizers";
import Contacts from "./section/contacts/Contacts";
import Sponsors from "./section/sponzors/Sponsors";
import Director from "./section/director/Director";

export default class App extends React.Component {

	render() {
		return (
			<React.Fragment>
				<Navigation />
				<Home />
				<News />
				<AboutRacing />
				<RacingEvents />
				<Director />
				<Contacts />
				<Organizers />
				<Sponsors />
			</React.Fragment>
		);
	}
}
