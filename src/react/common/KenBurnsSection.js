import React from "react";

import SectionLabel from "./SectionLabel";

import { useMediaQuery } from 'react-responsive';

export default function KenBurnsSection(props) {

    const isS = useMediaQuery({query: '(max-width: 640px)'});
    const paddingClass = isS ? "ken-burns-website-padding" : "";

    return (
        <section id={props.id}
                 className="uk-section uk-inline uk-section-default uk-padding-remove uk-height-viewport uk-width uk-overflow-hidden">
            <div id={props.backgroundId}
                 className="ken-burns-background uk-container uk-container-large uk-height-viewport uk-width uk-text-center uk-background-cover uk-padding-remove-top"
                 data-uk-scrollspy="cls: uk-animation-kenburns uk-animation-reverse; repeat: true"/>
            <div className={`${paddingClass} uk-position-cover uk-overlay uk-overlay-primary uk-padding-remove`}>
                <div className="uk-section" >
                    <SectionLabel>{props.label}</SectionLabel>
                    {props.children}
                </div>
            </div>
        </section>
    );
}



