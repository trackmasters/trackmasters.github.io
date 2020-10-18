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

					<div uk-slider>

						<div className="uk-position-relative">

							<div className="uk-slider-container">
								<ul className="uk-slider-items">
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
							</div>

							<a className="uk-position-center-left-out" href="#" uk-slider-item="previous">...</a>
							<a className="uk-position-center-right-out" href="#" uk-slider-item="next">...</a>

						</div>

						<ul className="uk-slider-nav uk-dotnav"></ul>

					</div>


				</div>
			</section>
		</React.Fragment>
	}
}

export default RacingEvents;