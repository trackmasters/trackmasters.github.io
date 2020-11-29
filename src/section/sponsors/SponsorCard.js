import React from "react";

export default function SponsorCard(props) {

    const [text, setText] = React.useState("default");

    let buttonIndex = 0;

    const maxCount = 3;
    const length = Math.min(maxCount, props.sponsor.links.length);
    const size = `uk-width-1-${length}`;

    return (
        <div className="uk-card uk-card-body uk-card-hover">
            <CardHeader image={props.image} name={props.sponsor.name} label={props.sponsor.label}/>
            <hr className="uk-margin-remove-bottom"/>
            <CardBody index={props.index}>
                {
                    props.sponsor.links
                        .map(link => {
                            buttonIndex++;
                            if (buttonIndex < maxCount + 1) {
                                return <CardButton key={buttonIndex} icon={link.icon} url={link.url} size={size}
                                                   onMouseOver={() => setText(link.label)}/>
                            }
                            return <React.Fragment key={buttonIndex} />;
                        })
                }
            </CardBody>
            <hr className="uk-margin-remove-top"/>
            <CardFooter index={props.index} text={text}/>
        </div>
    );
}
const openInNewTab = (url) => {
    const newWindow = window.open(encodeURI(url), '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

function CardBody(props) {
    return <div className="uk-card-media-bottom uk-text-center uk-padding-remove"
                style={{"padding": "20px"}}
                data-uk-toggle={`target: #toggle-animation-${props.index}; animation: uk-animation-fade; mode: hover`}>
        {props.children}
    </div>;
}


function CardButton(props) {
    return <button
        className={`racing-button uk-button uk-button-default uk-margin-remove ${props.size}`}
        onMouseOver={props.onMouseOver}
        onClick={() => {openInNewTab(props.url)}}
        style={{"padding": "20px"}}>
        <span className="racing-button-icon" data-uk-icon={`icon: ${props.icon}; ratio: 2`}/>
    </button>;
}

function CardHeader(props) {
    return <div className="uk-card-media-top">
        <img className="uk-border-circle" src={props.image} width="180" height="180" alt=""/>
        <p className="uk-h3 uk-margin-small">{props.name}</p>
        <p className="uk-h4 uk-margin-remove-top">{props.label}</p>
    </div>;
}

function CardFooter(props) {
    return <div style={{"height": "15px"}}>
        <p id={`toggle-animation-${props.index}`}
           className="uk-h4 uk-margin-remove uk-transition-fade uk-transition-opaque" hidden>
           {props.text}
        </p>
    </div>;
}