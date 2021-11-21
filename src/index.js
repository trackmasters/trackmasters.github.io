import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import './react/App.scss'
import './react/App.scss'
import App from "./react/App";

import './favicon.ico';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import mixpanel from 'mixpanel-browser';

UIkit.use(Icons);

if (process.env.ENVIRONMENT !== 'production') {
    console.log(process.env.ENVIRONMENT)
    UIkit.notification('Webpack bundle loaded!');
    mixpanel.init(process.env.MIXPANEL_TOKEN,{api_host: "https://api.mixpanel.com", ignore_dnt: true, debug: true});
} else {
    mixpanel.init(process.env.MIXPANEL_TOKEN,{api_host: "https://api.mixpanel.com", ignore_dnt: true});
}

mixpanel.track('Init');

window.UIkit = UIkit;

ReactDOM.render(<App/>, document.getElementById("root"));
