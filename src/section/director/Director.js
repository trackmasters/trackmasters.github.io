import React from "react";

import denis from "../../content/director/denis.jpg"

import data from "../../content/director/director.json";
import Section from "../../components/Section";

function Director(props) {

    return <Section id={props.id} feel={props.feel} label={props.label}>
        <div className="uk-container uk-section uk-padding-remove-top uk-padding-remove-bottom">
            <div className="uk-grid uk-grid-large"
                 data-uk-scrollspy="target: > div; delay: 150; cls: uk-animation-slide-bottom-medium"
                 data-uk-grid="">

                <div className="uk-width-1-3 uk-padding-small" style={{'maxHeight': '50vh'}} >
                    <img className="uk-align-left" style={{"border": "0", "maxWidth": "100%"}} src={denis} alt=""/>
                </div>

                <div className="uk-width-2-3 uk-padding-small">
                    <p className="uk-h1 uk-margin-small">{data.label}</p>
                    <hr/>
                    <p className="uk-h3 uk-margin-small uk-text-italic">"{data.text}"</p>
                </div>
            </div>
        </div>
    </Section>
}

export default Director;