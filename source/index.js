import React from "react";
import ReactDOM from "react-dom";
import './css/style.css'
import { WelcomeMessage } from "./components/welcome-message";

const wrapper = document.getElementById("welcome-message");
wrapper ? ReactDOM.render(<WelcomeMessage />, wrapper) : false;