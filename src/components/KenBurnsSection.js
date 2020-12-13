import React from "react";

import SectionLabel from "./SectionLabel";

export default function KenBurnsSection(props) {

    return (

        <section id={props.id}
                 className="uk-section uk-inline uk-section-default uk-padding-remove uk-height-viewport uk-width-viewport uk-overflow-hidden">
            <div id="AboutRacingBackground"
                 className="uk-container  uk-container-large uk-height-viewport uk-width-viewport uk-text-center uk-background-cover uk-padding-remove-top"
                 data-uk-scrollspy="cls: uk-animation-kenburns uk-animation-reverse; repeat: true"/>
            <div className="uk-position-cover uk-overlay uk-overlay-primary">
                <div style={{ 'marginTop': '57px' }}>
                    <SectionLabel>{props.label}</SectionLabel>
                    {props.children}
                </div>
            </div>
        </section>
    );
}



