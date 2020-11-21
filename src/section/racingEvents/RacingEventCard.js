import React from "react";

export default function RacingEventCard(props) {

	const [text, setText] = React.useState("default");

	return (
		<React.Fragment>
			<div className="uk-card uk-card-body uk-card-hover">
				<div className="uk-card-media-top">
					<p className="uk-margin-remove" style={{'fontSize': '10rem'}}>#{props.index}</p>
					<p className="uk-h3 uk-margin-remove-top">{props.date}</p>
				</div>
				<hr className="uk-margin-remove-bottom"/>

				<div className="uk-card-media-bottom uk-text-center uk-padding-remove" style={{'padding': '20px'}}
					 uk-toggle={`target: #toggle-animation-${props.index}; animation: uk-animation-fade; mode: hover`}>
					<button className="racing-button uk-button uk-button-default uk-width-1-3 uk-margin-remove"
							onMouseOver={() => setText("Informace")}
							style={{'padding':'20px'}}>
						<span className="racing-button-icon" uk-icon="icon: link; ratio: 3"></span>
					</button>
					<button className="racing-button uk-button uk-button-default uk-width-1-3 uk-margin-remove"
							onMouseOver={() => setText("Registrace")}
							style={{'padding':'20px'}}>
						<span className="racing-button-icon" uk-icon="icon: sign-in; ratio: 3"></span>
					</button>
					<button className="racing-button uk-button uk-button-default uk-width-1-3 uk-margin-remove"
							onMouseOver={() => setText("Výsledky")}
							style={{'padding':'20px'}}>
						<span className="racing-button-icon" uk-icon="icon: list; ratio: 3"></span>
					</button>
				</div>
				<hr className="uk-margin-remove-top"/>
				<div style={{'height': '20px'}}>
					<p id={`toggle-animation-${props.index}`} className="uk-h4 uk-margin-remove uk-transition-fade uk-transition-opaque" hidden>{text}</p>
				</div>
			</div>
		</React.Fragment>
	)
}