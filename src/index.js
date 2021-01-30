import React from "react";
import ReactDOM from "react-dom";
import '../node_modules/uikit/dist/css/uikit.min.css';
import "./index.css";
import './App.scss'
import './App.scss'
import App from "./App";

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons);
UIkit.notification('Hello world.');

ReactDOM.render(<App/>, document.getElementById("root"));
