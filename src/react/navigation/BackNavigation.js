import {NavHashLink} from "react-router-hash-link";
import React from "react";
import {useMediaQuery} from "react-responsive";

export default function BackNavigation(props) {

    const isS = useMediaQuery({query: '(max-width: 640px)'})
    const widthClass = isS ? "uk-width" : "uk-height-viewport";

    return (
        <div id='sidenav-article' uk-sticky className={`uk-position-fixed uk-active ${widthClass}`}>
            <ul className="uk-nav uk-nav-default tm-nav uk-nav-parent-icon">
                <li className="">
                    <NavHashLink to={props.link}>
                        <span>{props.label}</span>
                    </NavHashLink>
                </li>
            </ul>
        </div>
    );
}