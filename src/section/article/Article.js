import React, { useState, useEffect, useCallback, useRef } from 'react';
import ReactMarkdown from 'react-markdown/with-html';

import "./Article.scss";
import { NavHashLink } from 'react-router-hash-link';
import ScrollToTop from "../../components/ScrollToTop";
import {useMediaQuery} from "react-responsive";
import Section from "../../components/Section";

import remarkGfm from "remark-gfm";


function Article(props) {

    const url = props.article.url;

    const [input, setInput] = useState('');
    const getInput = useCallback(async () => {
        console.log("file", url);
        const instructionsPath = require(`../../content/news/articles/${url}.md`);
        try {
            const instructionsFile = await fetch(instructionsPath);
            const instructionsText = await instructionsFile.text();
            setInput(instructionsText);
        } catch (err) {
            console.error('Problem reading markdown file', err);
        }
    }, [url]);

    useEffect(() => {
        // noinspection JSIgnoredPromiseFromCall
        getInput();
    }, [getInput]);

    const renderers = {
        image: ({alt, src, title}) => {
            const image = require(`../../content/news/images/${src}`);
            return (
                <img alt={alt} src={image} title={title} style={{maxWidth: 200}}/>
            )
        }
    };

    const useResize = (myRef) => {
        const getWidth = useCallback(() => myRef?.current?.offsetWidth, [myRef]);
        const [width, setWidth] = useState(undefined);
        useEffect(() => {
            const handleResize = () => {
                setWidth(getWidth());
            };
            if (myRef.current) {
                setWidth(getWidth());
            }
            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }, [myRef, getWidth]);
        return width && width > 25 ? width - 25 : width;
    };

    const divRef = useRef(null);
    const maxWidth = useResize(divRef);
    console.log('max width is', maxWidth);

    const isS = useMediaQuery({query: '(max-width: 640px)'})
    const widthClass = isS ? "uk-width" : "uk-height-viewport";

    return <React.Fragment>
        <ScrollToTop/>
        <div id='sidenav-article' uk-sticky className={`uk-position-fixed uk-active ${widthClass}`}>
            <ul className="uk-nav uk-nav-default tm-nav uk-nav-parent-icon">
                <li className="">
                    <NavHashLink to="/#News">
                        <span>ZPĚT</span>
                    </NavHashLink>
                </li>
            </ul>
        </div>
        <Section id="Article" parallax={false} label={props.article.label} feel={"bright"}>
            <div className="uk-container uk-container-large uk-padding-remove-top" ref={divRef}>
                <p className="uk-text-center">Autor: {props.article.author}</p>
                <p className="uk-text-center">Datum: {props.article.date}</p>
                <hr/>
                <ReactMarkdown className="uk-text-left" escapeHtml={false} source={input} renderers={renderers} plugins={[remarkGfm]} maxWidth={maxWidth}/>
            </div>
        </Section>
    </React.Fragment>
}

export default Article;
