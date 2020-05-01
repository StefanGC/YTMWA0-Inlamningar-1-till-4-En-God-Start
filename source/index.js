import React from "react";
import ReactDOM from "react-dom";
import './css/style.css'
import { WelcomeMessage } from "./components/welcome-message";;
import { AppToDoList } from "./components/to-do-list/app";
import { EmployeeList } from "./components/List-of-employees/Employee-list";

let empleados = [
    { id: 1,  fullName: "Lars Andersson",  title: "Lärare", department: "Matematik" },
    { id: 2,  fullName: "Astryd Vallés",   title: "Lärare", department: "Språk" },
    { id: 3,  fullName: "Shantell Meza",   title: "Lärare", department: "Språk" },
    { id: 4,  fullName: "Sergio Ocampo",   title: "Elev",   department: "Matematik", },
    { id: 5,  fullName: "Ares Jiménez",    title: "Elev",   department: "Matematik" },
    { id: 6,  fullName: "Marta Pérez",     title: "Lärare", department: "Rektor" },
    { id: 7,  fullName: "Ellen Balderas",  title: "Elev",   department: "Språk" }
  ]

const wrapper = document.getElementById("welcome-message");
wrapper ? ReactDOM.render(<WelcomeMessage />, wrapper) : false;

// ReactDOM.render(
//     <EmployeeList listado={ empleados } />, 
//     document.getElementById('List-of-employees')
// );

// ReactDOM.render(
//   <AppToDoList />,
//   document.getElementById('to-do-list')
// );

