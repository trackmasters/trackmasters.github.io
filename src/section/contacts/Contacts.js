import React from "react";

import contacts from "../../content/contacts/contacts.json";
import Section from "../../components/Section";


function Contacts(props) {

    return <Section id={props.id} feel={props.feel} label={props.label}>
        <div className="uk-container uk-section uk-padding-remove-top uk-padding-remove-bottom">
            <div className="uk-grid uk-grid-large uk-margin-xlarge-top"
                 data-uk-scrollspy="target: > div; delay: 150; cls: uk-animation-slide-bottom-medium"
                 data-uk-grid="">

                <div className="uk-width-1-3 uk-height-large uk-padding-small">
                    <iframe
                        title="google-map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4404.104697497723!2d14.487171001548738!3d50.084093473976324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa5e003497c2dbe5c!2zVmVsb2Ryb20gVMWZZWJlxaHDrW4!5e0!3m2!1sen!2scz!4v1606601106315!5m2!1sen!2scz"
                        className="uk-align-left" style={{"border": "0", "height": "100%", "width": "100%"}}
                        frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"/>
                </div>

                <div className="uk-width-2-3 uk-height-large uk-padding-small">
                    <ul className="uk-margin-medium-top" style={{"listStyleType": "none"}}>
                        <li style={{"height": "175px"}}>
                            <p className="uk-h3 uk-margin-small">
                                <span className="uk-margin-large-right" data-uk-icon="ratio: 4; icon: location"/>
                                {contacts.label}
                            </p>
                            <p className="uk-h3 uk-margin-small">
                                <span style={{"marginRight": "152px"}}/>
                                {contacts.addressLine1}
                            </p>
                            <p className="uk-h3 uk-margin-small">
                                <span style={{"marginRight": "152px"}}/>
                                {contacts.addressLine2}
                            </p>
                        </li>

                        <li style={{"height": "175px"}}>
                            <p className="uk-h3 uk-margin-small">
                                <span className="uk-margin-large-right" data-uk-icon="ratio: 4; icon: mail"/>
                                {contacts.email}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </Section>
}

export default Contacts;