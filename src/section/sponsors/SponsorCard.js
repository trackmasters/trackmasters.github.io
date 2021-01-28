import React from "react";

import './Sponsors.scss';

export default function SponsorCard(props) {

    const [text, setText] = React.useState("default");

    let buttonIndex = 0;

    const maxCount = 3;
    const length = Math.min(maxCount, props.sponsor.links.length);
    const size = `uk-width-1-${length}`;

    const isVector = props.image.split('.').pop() === "svg";

    console.log("vector", props.image + " " + isVector);

    return (
        <div className="uk-card uk-card-body uk-card-hover uk-padding-remove">
            <div className="uk-card-media-top uk-padding">
                {
                    isVector ?
                        <div style={{'margin':'0 auto', 'height':'200px'}}>
                            <img style={{'marginTop': '55px'}} src={props.image} alt={"kovo"} data-uk-svg />
                        </div>
                        :
                        <img className="uk-border-circle" src={props.image} width="200" height="200" alt=""/>
                }
            </div>
            <div className="uk-card-body uk-padding-remove-bottom uk-padding-remove-horizontal">
                <h3 className="uk-card-title uk-margin-small">{props.sponsor.name}</h3>
                <p className="uk-margin-remove-top">{props.sponsor.label}</p>
            </div>
            <hr className="uk-margin-remove-bottom"/>
            <div className="uk-card-media-bottom uk-text-center uk-padding-remove"
                style={{"padding": "20px"}}
                data-uk-toggle={`target: #toggle-animation-${props.index}; animation: uk-animation-fade; mode: hover`}>
                {
                    props.sponsor.links
                        .map(link => {
                            buttonIndex++;
                            if (buttonIndex < maxCount + 1) {
                                return <button key={buttonIndex}
                                    className={`sponsor-button uk-button uk-button-default uk-margin-remove ${size}`}
                                    onMouseOver={() => setText(link.label)}
                                    onClick={() => {openInNewTab(link.url)}}
                                    style={{"padding": "20px"}}>
                                    <span className="sponsor-button-icon" data-uk-icon={`icon: ${link.icon}; ratio: 2`}/>
                                </button>
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
const openInNewTab = (url) => {
    const newWindow = window.open(encodeURI(url), '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}
