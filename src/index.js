import React from "react";
import ReactDOM from "react-dom";

import 'uikit/dist/css/uikit.css';

import "./index.css";
import './App.scss'
import './App.scss'
import App from "./App";

import UIkit from 'uikit/dist/js/uikit.js'
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons);
UIkit.notification('Hello world.');
window.UIkit = UIkit;

ReactDOM.render(<App/>, document.getElementById("root"));
