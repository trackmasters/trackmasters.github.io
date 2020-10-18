import React from "react";
import "./Section.scss"
import image from "../images/denis-thumb-up.jpg"


class RacingEvents extends React.Component {

	render() {
		return <React.Fragment>
			<section id="News" className="uk-section uk-section-default uk-height-viewport uk-width-viewport">
				<div className="uk-container uk-text-center uk-section uk-padding-remove-top">
					<h2 className="uk-heading-medium uk-width-1-2@m uk-text-center uk-text-top uk-position-small uk-margin-auto"
						data-uk-parallax="opacity: 0,1; y: -30,0; scale: 1,1; viewport: 0.3;">Novinky</h2>
					<div className="uk-margin-xlarge-top " uk-slider="finite: true">
						<div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1">
							<ul className="uk-slider-items uk-child-width-1-3 uk-grid"
								data-uk-scrollspy="target: > li; delay: 150; cls: uk-animation-slide-bottom-medium"
								data-uk-grid="" >
								<li>
									<div className="uk-card uk-card-default">
										<div className="uk-card-media-top">
											<img src={image} alt=""/>
										</div>
										<div className="uk-card-body">
											<h3 className="uk-card-title">Titulek prvního článku</h3>
											<p>Hlavička článku, která může být delší a bude pokračovat na...</p>
											<hr />
											<p className="uk-align-left uk-margin-remove">Denis Charalambidis</p>
											<p className="uk-align-right uk-margin-remove">18.10.2020</p>
										</div>
									</div>
								</li>
								<li>
									<div className="uk-card uk-card-default">
										<div className="uk-card-media-top">
											<img src={image} alt=""/>
										</div>
										<div className="uk-card-body">
											<h3 className="uk-card-title">Titulek druhého článku</h3>
											<p>Hlavička článku, která může být delší a bude pokračovat na...</p>
											<hr />
											<p className="uk-align-left uk-margin-remove">Denis Charalambidis</p>
											<p className="uk-align-right uk-margin-remove">5.11.2020</p>
										</div>
									</div>
								</li>
								<li>
									<div className="uk-card uk-card-default">
										<div className="uk-card-media-top">
											<img src={image} alt=""/>
										</div>
										<div className="uk-card-body">
											<h3 className="uk-card-title">Titulek třetího článku</h3>
											<p>Hlavička článku, která může být delší a bude pokračovat na...</p>
											<hr />
											<p className="uk-align-left uk-margin-remove">Denis Charalambidis</p>
											<p className="uk-align-right uk-margin-remove">28.11.2020</p>
										</div>
									</div>
								</li>
								<li>
									<div className="uk-card uk-card-default">
										<div className="uk-card-media-top">
											<img src={image} alt=""/>
										</div>
										<div className="uk-card-body">
											<h3 className="uk-card-title">Titulek čtvrtého článku</h3>
											<p>Hlavička článku, která může být delší a bude pokračovat na...</p>
											<hr />
											<p className="uk-align-left uk-margin-remove">Denis Charalambidis</p>
											<p className="uk-align-right uk-margin-remove">3.12.2020</p>
										</div>
									</div>
								</li>
								<li>
									<div className="uk-card uk-card-default">
										<div className="uk-card-media-top">
											<img src={image} alt=""/>
										</div>
										<div className="uk-card-body">
											<h3 className="uk-card-title">Titulek pátého článku</h3>
											<p>Hlavička článku, která může být delší a bude pokračovat na...</p>
											<hr />
											<p className="uk-align-left uk-margin-remove">Denis Charalambidis</p>
											<p className="uk-align-right uk-margin-remove">1.1.2021</p>
										</div>
									</div>
								</li>
							</ul>
							{/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
							<a className="uk-position-center-left uk-position-large" href="/#" data-uk-slidenav-previous data-uk-slider-item="previous"/>
							{/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
							<a className="uk-position-center-right uk-position-large" href="/#" data-uk-slidenav-next data-uk-slider-item="next"/>

						</div>

						<ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"/>

					</div>

				</div>
			</section>
		</React.Fragment>
	}
}

export default RacingEvents;