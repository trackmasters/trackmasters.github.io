import React from "react";

import SectionLabel from "./SectionLabel";

export default function Section(props) {

    return (
        <section id={props.id} className={`section-${props.feel} uk-section uk-section-default uk-height-viewport uk-width-viewport`}>
            <div className="uk-text-center uk-padding-remove" >
                <SectionLabel>{props.label}</SectionLabel>
                {props.children}
            </div>
        </section>
    );
}



