import React from "react";

import "./Section.scss"
import SectionLabel from "../common/SectionLabel";

function Article(props) {

    return <React.Fragment>
        <section id="Article" className="uk-section uk-section-default uk-height-viewport uk-width-viewport">
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
