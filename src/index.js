import React from "react";
import ReactDOM from "react-dom";
import '../node_modules/uikit/dist/css/uikit.min.css';
import "./index.css";
import './App.css'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navigation from "./navigation/Navigation";
import Home from "./section/Home";
import News from "./section/news/News";
import AboutRacing from "./section/aboutRacing/AboutRacing";
import RacingEvents from "./section/racingEvents/RacingEvents";
import Contacts from "./section/contacts/Contacts";
import Director from "./section/director/Director";
import Organizers from "./section/organizers/Organizers";
import Sponsors from "./section/sponsors/Sponsors";
import news from "./content/news/news.json";
import Article from "./section/Article";
import './App.css'


ReactDOM.render(

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
                        <Route exact path={`/${article.url}`}>
                            <Article article={article}/>
                        </Route>
                    );
                })
            }
        </Switch>
    </Router>
    , document.getElementById("root"));
