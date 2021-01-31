import React from "react";

import "../App.scss";
import Section from "../components/Section";
import {NavHashLink} from "react-router-hash-link";
import {useMediaQuery} from "react-responsive";

export default function NotFound(props) {

    const isS = useMediaQuery({query: '(max-width: 640px)'})

   return (
       <Section id="404" parallax={false} feel={props.feel} label={props.label} >
           <h2 className="uk-h3">Požadovaná stránka není nalezena</h2>
       </Section>
   );
}