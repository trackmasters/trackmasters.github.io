import React from "react";
import {useMediaQuery} from "react-responsive";

export default function SectionLabel(props) {

	const { parallax } = props;
	const isM = useMediaQuery({query: '(max-width: 960px)'})
	const margin = isM ? "uk-margin-medium-bottom" : "uk-margin-xlarge-bottom";

	return (parallax || parallax === undefined ?
		<h1 className={`uk-heading-medium uk-width-1-1 uk-text-center uk-text-top uk-position-small uk-margin-auto uk-margin-remove-top ${margin}`}
			data-uk-parallax="opacity: 0,1; y: -30,0; scale: 1,1; viewport: 0.3;">
			{props.children}
		</h1>
		:
		<h1 className="uk-heading-medium uk-width-1-1 uk-text-center uk-text-top uk-position-small uk-margin-auto">
			{props.children}
		</h1>
	);
};
