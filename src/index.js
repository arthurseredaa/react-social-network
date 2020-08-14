import * as serviceWorker from "./serviceWorker";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { SocialNetwork } from "./App";

ReactDOM.render(<SocialNetwork />, document.getElementById("root"));

serviceWorker.register();
