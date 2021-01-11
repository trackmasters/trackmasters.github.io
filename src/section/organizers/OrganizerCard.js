import React from "react";

import { openInNewTab } from "../../utils";

export default function OrganizerCard(props) {

    const [text, setText] = React.useState("default");

    const maxCount = 3;
    const length = Math.min(maxCount, props.organizer.links.length);
    const size = `uk-width-1-${length}`;

    return (
        <div className="organizer-card uk-card uk-card-body uk-padding-remove">
            <div className="uk-card-media-top uk-padding">
                <div className="uk-border-circle"
                     style={{'margin':'0 auto', 'height':'200px', 'width':'200px', 'backgroundColor': 'white', 'overflow':'hidden'}}>
                    <img style={{'marginTop': '55px'}} src={props.image} width="125" height="125" alt={"kovo"} data-uk-svg />
                </div>
            </div>
            <div className="uk-card-body uk-padding-remove-bottom uk-padding-remove-horizontal">
                <h3 className="uk-card-title uk-margin-small">{props.organizer.name}</h3>
                <p className="uk-margin-remove-top">{props.organizer.label}</p>
            </div>
            <hr className="uk-margin-remove-bottom"/>
            <div className="uk-card-media-bottom uk-text-center uk-padding-remove"
                 style={{"padding": "20px"}}
                 data-uk-toggle={`target: #toggle-animation-${props.index}; animation: uk-animation-fade; mode: hover`}>
                {
                    props.organizer.links.map((link, buttonIndex) => {
                        if (buttonIndex < maxCount + 1) {
                            return (
                                <button key={buttonIndex} onMouseOver={() => setText(link.label)} onClick={() => { openInNewTab(link.url)} }
                                        className={`organizer-button uk-button uk-button-default uk-margin-remove ${size}`}
                                        style={{"padding": "20px"}}>
                                    <span className="organizer-button-icon" data-uk-icon={`icon: ${link.icon}; ratio: 2`}/>
                                </button>
                            );
                        }
                        return <React.Fragment key={buttonIndex} />;
                    })
                }
            </div>
            <hr className="uk-margin-remove-top"/>
            <div style={{'height': '44px'}} className="uk-padding-remove uk-padding-small uk-flex uk-flex-middle uk-flex-center">
                <p id={`toggle-animation-${props.index}`}
                   className="uk-transition-fade uk-transition-opaque" hidden>
                    {text}
                </p>
            </div>
        </div>
    );
}
