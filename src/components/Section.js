import React from "react";

import SectionLabel from "./SectionLabel";

export default function Section(props) {

    return (
        <section id={props.id} className={`section-${props.feel} uk-section uk-section-default uk-height-viewport`}>
            <div className="uk-text-center uk-padding-remove" >
                <SectionLabel parallax={props.parallax}>{props.label}</SectionLabel>
                {props.children}
            </div>
        </section>
    );
}



