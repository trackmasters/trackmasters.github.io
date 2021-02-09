import React from "react";
import "./Contacts.scss";

import config from "../../../content/trackmasters.config.json";
import Section from "../../common/Section";

function Contacts(props) {

    return <Section id="Contacts" feel={props.feel} label={props.label}>
        <div className="uk-container uk-section uk-padding-remove-top uk-padding-remove-bottom">
            <div className="uk-grid-small uk-text-left"
                 data-uk-scrollspy="target: > div; delay: 150; cls: uk-animation-slide-bottom-medium"
                 data-uk-grid="">
                <div className="uk-width-1-1 uk-height-large uk-margin-medium-bottom">
                    <iframe
                        title="google-map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4404.104697497723!2d14.487171001548738!3d50.084093473976324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa5e003497c2dbe5c!2zVmVsb2Ryb20gVMWZZWJlxaHDrW4!5e0!3m2!1sen!2scz!4v1606601106315!5m2!1sen!2scz"
                        className="uk-align-left" style={{"border": "0", "height": "100%", "width": "100%"}}
                        frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"/>
                </div>
                <div className="uk-width-1-2@m uk-flex uk-flex-center" data-uk-grid="">
                    <div className="uk-width-1-4 uk-flex uk-flex-middle" style={{'height': '80px'}}>
                        <p className="uk-margin-small uk-margin-remove">
                            <span className="uk-margin-remove" data-uk-icon="ratio: 4; icon: location"/>
                        </p>
                    </div>
                    <div className="uk-width-auto uk-flex uk-flex-middle uk-flex-column">
                        <p className="contact-detail uk-margin-small">
                            {config.contacts.label}
                        </p>
                        <p className="contact-detail uk-margin-small">
                            {config.contacts.addressLine1}
                        </p>
                        <p className="contact-detail uk-margin-small">
                            {config.contacts.addressLine2}
                        </p>
                    </div>
                </div>
                <div className="uk-width-1-2@m uk-flex uk-flex-center uk-flex-middle" data-uk-grid="">
                    <div className="uk-width-1-4 uk-flex uk-flex-middle" style={{'height': '80px'}}>
                        <p className="contact-detail uk-margin-remove">
                            <span className="uk-margin-remove" data-uk-icon="ratio: 4; icon: mail"/>
                        </p>
                    </div>
                    <div className="uk-width-auto uk-flex uk-flex-middle">
                        <p className="contact-detail uk-margin-small">
                            {config.contacts.email}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </Section>
}

export default Contacts;