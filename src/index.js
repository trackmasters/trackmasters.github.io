import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import './App.scss'
import './App.scss'
import App from "./App";

import './favicon.ico';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons);

if (process.env.ENVIRONMENT !== 'prod') {
    UIkit.notification('Webpack bundle loaded!');
}

window.UIkit = UIkit;

ReactDOM.render(<App/>, document.getElementById("root"));
