import React from "react";
import ReactDOM from "react-dom";
import { HelloWorldApp } from "./components/helloworld";

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<HelloWorldApp />, wrapper) : false;