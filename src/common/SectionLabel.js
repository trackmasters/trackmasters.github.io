import React from "react";

export default function SectionLabel(props) {

	return (
		<React.Fragment>
			<h2 className="uk-heading-medium uk-width-1-2@m uk-text-center uk-text-top uk-position-small uk-margin-auto"
				data-uk-parallax="opacity: 0,1; y: -30,0; scale: 1,1; viewport: 0.3;">{props.children}</h2>
		</React.Fragment>
	)
}