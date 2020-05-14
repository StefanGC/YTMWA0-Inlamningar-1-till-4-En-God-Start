import React from "react";
import ReactDOM from "react-dom";
import './css/style.css'
import './css/school-style.css'
import { WelcomeMessage } from "./components/welcome-message";
import { CreateCitiesMenu } from "./components/list-of-schools/create-cities-menu";

const wrapper = document.getElementById("welcome-message");
wrapper ? ReactDOM.render(<WelcomeMessage />, wrapper) : false;

const wrapper2 = document.getElementById("Cities");
wrapper2 ? ReactDOM.render(<CreateCitiesMenu />, wrapper2) : false;

