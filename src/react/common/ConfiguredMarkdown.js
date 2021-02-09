import React, {useCallback, useEffect, useState} from "react";

import ReactMarkdown from 'react-markdown/with-html';
import remarkGfm from "remark-gfm";

export default function ConfiguredMarkdown(props) {

    const url = props.url;

    const [input, setInput] = useState('');
    const getInput = useCallback(async () => {
        console.log("file", url);
        const instructionsPath = require(`./../../content/articles/${url}.md`);
        console.log("md1", instructionsPath)
        console.log("md2", instructionsPath.default)
        setInput(instructionsPath.default);
    }, [url]);

    useEffect(() => {
        // noinspection JSIgnoredPromiseFromCall
        getInput();
    }, [getInput]);

    const renderers = {
        image: ({alt, src, title}) => {
            const image = require(`./../../content/images/${src}`);
            return (
                <div className="uk-width">
                    <img alt={alt} src={image.default} title={title} style={{minWidth: 200}}/>
                </div>
            )
        }
    };

    return (
        <div className="markdown">
            <ReactMarkdown className="uk-text-left" escapeHtml={false} source={input} renderers={renderers} plugins={[remarkGfm]} maxWidth={props.maxWidth}/>
        </div>
    );
}