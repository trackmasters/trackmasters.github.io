import React, {useRef} from 'react';

import "./Article.scss";
import {useMediaQuery} from "react-responsive";
import Section from "../../common/Section";

import ConfiguredMarkdown from "../../common/ConfiguredMarkdown";
import {useResize} from "../../hooks/useResize";
import {useImageMap} from "../../hooks/useImageMap";

function Article(props) {

    const divReference = useRef(null);
    const maxWidth = useResize(divReference);

    const emptyGallery = !Array.isArray(props.article.gallery) || !props.article.gallery.length;
    const imageMap = emptyGallery ? new Map() : useImageMap(props.article.gallery);

    return (
        <Section id="Article" parallax={false} label={props.article.label} feel={"bright"}>
            <div className="uk-container uk-padding-remove-top" ref={divReference}>
                <p className="uk-text-center uk-margin-remove article-meta">Autor: {props.article.author}</p>
                <p className="uk-text-center uk-margin-remove article-meta">Datum: {props.article.date}</p>
                <hr/>
                <ConfiguredMarkdown url={props.article.url} maxWidth={maxWidth}/>
                {
                    !emptyGallery ?
                        <div className="markdown">
                            <hr/>
                            <h2 className="uk-text-left" style={{'fontSize': '1.7rem !important'}}>Galerie</h2>
                        </div> : <React.Fragment/>
                }
            </div>
            {
                !emptyGallery ?
                    <GalleryContainer>
                        {
                            props.article.gallery.map((image, index) => {
                                const imageComponent = imageMap.get(image);
                                return (
                                    <React.Fragment>
                                        <div className="news-body-image">
                                            <img key={index} src={imageComponent} alt="" uk-cover
                                                 data-uk-toggle={`target: #gallery-image-${index}`}
                                                 style={{'cursor': 'pointer'}}
                                                 className="news-image"/>
                                        </div>
                                        <div id={`gallery-image-${index}`} data-uk-modal>
                                            <div className="uk-modal-dialog uk-width-auto uk-margin-auto-vertical" >
                                                <button className="uk-modal-close-default" type="button" data-uk-close=""/>
                                                <img key={index} src={imageComponent} alt="" style={{
                                                    'maxHeight': '90vh',
                                                    'maxWidth': '90vw'
                                                }}/>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                );
                            })
                        }
                    </GalleryContainer> : <React.Fragment/>
            }
        </Section>
    );
}

export function GalleryContainer(props) {

    const isM = useMediaQuery({query: '(max-width: 960px)'})
    const sliderMargin = isM ? "uk-margin-remove" : "uk-margin-small";

    return <div className="uk-container" data-uk-slider="finite: true" style={{"paddingLeft": "60px", "paddingRight": "60px"}}>
                <div className="uk-position-relative uk-dark uk-visible-toggle" tabIndex="-1">
                    <div className="uk-slider-container">
                        <ul className="uk-slider-items uk-child-width-1-3@xl uk-child-width-1-3@l uk-child-width-1-2@m uk-child-width-1-1@s uk-grid"
                            data-uk-scrollspy="target: > li; delay: 150; cls: uk-animation-slide-bottom-medium"
                            data-uk-grid="">
                            {props.children.map((child, index) => <li key={index}>{child}</li>)}
                        </ul>
                    </div>
                    {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                    <a className="uk-position-center-left-out uk-slidenav-large uk-position-large"
                       style={{"margin": "0"}} href="/#" data-uk-slidenav-previous data-uk-slider-item="previous"/>
                    {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                    <a className="uk-position-center-right-out uk-slidenav-large uk-position-large"
                       style={{"margin": "0"}} href="/#" data-uk-slidenav-next data-uk-slider-item="next"/>
                </div>
                <ul className={`uk-slider-nav uk-dotnav uk-flex-center ${sliderMargin}`}/>
            </div>
}

export default Article;
