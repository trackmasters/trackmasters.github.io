import React from "react";

import "./Article.scss";
import { NavHashLink } from 'react-router-hash-link';
import ScrollToTop from "../components/ScrollToTop";
import {useMediaQuery} from "react-responsive";
import Section from "../components/Section";

function Article(props) {

    const isS = useMediaQuery({query: '(max-width: 640px)'})
    const widthClass = isS ? "uk-width" : "uk-height-viewport";

    return <React.Fragment>
        <ScrollToTop/>
        <div id='sidenav-article' uk-sticky className={`uk-position-fixed uk-active ${widthClass}`}>
            <ul className="uk-nav uk-nav-default tm-nav uk-nav-parent-icon">
                <li className="">
                    <NavHashLink to="/#News">
                        <span>ZPĚT</span>
                    </NavHashLink>
                </li>
            </ul>
        </div>
        <Section id="Article" parallax={false} label={props.article.label} feel={"bright"}>
            <div className="uk-container uk-container-large uk-text-center uk-section uk-padding-remove-top">
                <p>Autor: {props.article.author}</p>
                <p>Datum: {props.article.date}</p>
                <hr/>
                <p className="uk-text-justify uk-text-large">{props.article.text}</p>
                <p className="uk-text-justify uk-text-large">{props.article.text}</p>
                <p className="uk-text-justify uk-text-large">{props.article.text}</p>
            </div>
        </Section>
    </React.Fragment>
}

export default Article;
