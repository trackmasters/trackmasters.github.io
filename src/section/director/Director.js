import React from "react";

import './Director.scss';
import denis from "../../content/director/denis.jpg"

import data from "../../content/director/director.json";
import Section from "../../components/Section";

function Director(props) {

    return <Section id="Director" feel={props.feel} label={props.label}>
        <div className="uk-container uk-section uk-padding-remove-top uk-padding-remove-bottom">
            <div className="uk-text-center"
                 data-uk-scrollspy="target: > div; delay: 150; cls: uk-animation-slide-bottom-medium"
                 data-uk-grid="">
                <div className="uk-width-1-3@m uk-padding-small uk-visible@m" >
                    <img style={{"border": "0", "maxHeight": "100%", "maxWidth": "100%"}} src={denis} alt=""/>
                </div>
                <div className="uk-width-2-3@m uk-padding-small">
                    <h4 className="uk-h1 uk-margin-small">{data.label}</h4>
                    <hr/>
                    <p className="uk-margin-small uk-text-italic">"{data.text}"</p>
                </div>
            </div>
        </div>
    </Section>
}

export default Director;