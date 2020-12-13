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
import Sponsors from "./section/sponsors/Sponsors";
import Director from "./section/director/Director";
import {HashRouter as Router, Route, Switch} from "react-router-dom";

import news from "./content/news/news.json";
import Article from "./section/Article";

export default class App extends React.Component {

	render() {
		return (
			<Router basename={process.env.PUBLIC_URL}>
				<Switch>
					<Route exact path="/">
						<React.Fragment>
							<Navigation />
							<Home id={"Home"}/>
							<News id={"News"} />
							<AboutRacing id={"AboutRacing"}/>
							<RacingEvents id={"RacingEvents"}/>
							<Contacts id={"Contacts"}/>
							<Director id={"Director"}/>
							<Organizers id={"Organizers"}/>
							<Sponsors id={"Sponsors"}/>
						</React.Fragment>
					</Route>
					{
						news.map((article) => {
							return (
								<Route key={article.url} exact path={`/${article.url}`}>
									<Article article={article}/>
								</Route>
							);
						})
					}
				</Switch>
			</Router>
		);
	}
}