import React from "react";

import "./App.scss";

import Navigation from "./navigation/Navigation";
import Home from "./section/Home";

import News from "./section/news/News";
import AboutRacing from "./section/aboutRacing/AboutRacing";
import RacingEvents from "./section/racingEvents/RacingEvents";
import Organizers from "./section/organizers/Organizers";
import Contacts from "./section/contacts/Contacts";
import Sponsors from "./section/sponsors/Sponsors";
import Director from "./section/director/Director";
import {HashRouter as Router, Route, Switch} from "react-router-dom";

import news from "./content/news/news.json";
import Article from "./section/article/Article";
import NotFound from "./section/NotFound";
import BackNavigation from "./navigation/BackNavigation";
import ScrollToTop from "./components/ScrollToTop";

export default class App extends React.Component {

	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/">
						<React.Fragment>
							<Navigation />
							<Home />
							<News label="Novinky" feel={"bright"} />
							<AboutRacing label="O závodu" feel={"dark"} />
							<RacingEvents label="Termíny závodu" feel={"bright"} />
							<Contacts label="Kontakty" feel={"dark"} />
							<Director label="Ředitel závodu" feel={"bright"}/>
							<Organizers label="Pořadatelé" feel={"dark"} />
							<Sponsors label="Sponzoři" feel={"bright"}/>
						</React.Fragment>
					</Route>
					{
						news.map((article) => {
							return (
								<Route key={article.url} exact path={`/${article.url}`}>
									<ScrollToTop/>
									<BackNavigation link="/#News" label="ZPĚT" />
									<Article article={article} image={article.image}/>
								</Route>
							);
						})
					}
					<Route>
						<React.Fragment>
							<ScrollToTop/>
							<BackNavigation link="/#" label="ZPĚT" />
							<NotFound feel="bright" label="404 NOT FOUND" />
						</React.Fragment>
					</Route>
				</Switch>
			</Router>
		);
	}
}