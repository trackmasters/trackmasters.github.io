import React, {useCallback, useEffect, useState} from "react";

import ReactMarkdown from 'react-markdown/with-html';
import remarkGfm from "remark-gfm";

export default function ConfiguredMarkdown(props) {

    const url = props.url;

    const [input, setInput] = useState('');
    const getInput = useCallback(async () => {
        console.log("file", url);
        const instructionsPath = require(`../content/news/articles/${url}.md`);
        try {
            const instructionsFile = await fetch(instructionsPath);
            const instructionsText = await instructionsFile.text();
            setInput(instructionsText);
        } catch (err) {
            setInput("");
            console.error('Problem reading markdown file', err);
        }
    }, [url]);

    useEffect(() => {
        // noinspection JSIgnoredPromiseFromCall
        getInput();
    }, [getInput]);

    const renderers = {
        image: ({alt, src, title}) => {
            const image = require(`../content/news/images/${src}`);
            return (
                <div className="uk-width">
                    <img alt={alt} src={image} title={title} style={{minWidth: 200}}/>
                </div>
            )
        }
    };

    return (
        <div className="markdown">
            <ReactMarkdown className="uk-text-left" escapeHtml={true} source={input} renderers={renderers} plugins={[remarkGfm]} maxWidth={props.maxWidth}/>
        </div>
    );
}