import React from "react";

import "./Article.scss";
import SectionLabel from "../components/SectionLabel";
import { NavHashLink } from 'react-router-hash-link';
import ScrollToTop from "../components/ScrollToTop";
import {useMediaQuery} from "react-responsive";

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
        <section id="Article" className="uk-section uk-section-default uk-height-viewport ">
            <div className="uk-container uk-container-large uk-text-center uk-section uk-padding-remove-top">
                <SectionLabel parallax={false}>{props.article.label}</SectionLabel>
                <p>Autor: {props.article.author}</p>
                <p>Datum: {props.article.date}</p>
                <hr/>
                <p className="uk-text-justify uk-text-large">{props.article.text}</p>
                <p className="uk-text-justify uk-text-large">{props.article.text}</p>
                <p className="uk-text-justify uk-text-large">{props.article.text}</p>
            </div>
        </section>
    </React.Fragment>
}

export default Article;
