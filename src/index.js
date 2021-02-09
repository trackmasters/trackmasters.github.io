import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import './react/App.scss'
import './react/App.scss'
import App from "./react/App";

import './favicon.ico';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons);

if (process.env.ENVIRONMENT !== 'production') {
    console.log(process.env.ENVIRONMENT)
    UIkit.notification('Webpack bundle loaded!');
}

window.UIkit = UIkit;

ReactDOM.render(<App/>, document.getElementById("root"));
