import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { AppToDoList } from "./to-do-list/app";
import { EmployeeList } from "./List-of-employees/Employee-list";
import { SignIn } from "./sign-in";

export class WelcomeMessage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  showListOfEmployees: true,
		  showToDoList: true
		};
		
		this.handleShowListOfEmployees = this.handleShowListOfEmployees.bind(this);
		this.handleShowToDoList = this.handleShowToDoList.bind(this);
	}

	handleShowListOfEmployees (event) {
		let message;
		{this.state.showListOfEmployees ? 
			message = <EmployeeList listado={ employees } /> : 
			message = ""}
		
		ReactDOM.render(
			message, 
			document.getElementById('List-of-employees')
		);
		
		this.setState(state => ({
			showListOfEmployees: !state.showListOfEmployees
		  }));
	}

	handleShowToDoList (event) {
		let message;
		{this.state.showToDoList ? 
			message = <AppToDoList /> : 
			message = ""}
		
		ReactDOM.render(
			message, 
			document.getElementById('to-do-list')
		);
		
		this.setState(state => ({
			showToDoList: !state.showToDoList
		  }));
	}

	render() {
		return (
			<Fragment>
				<div className="row">
					<h1 className="text-primary">My React App</h1>
				</div>
				<div className="row">
					<p>
						Här kan du se en prototyp av applikationen som jag vill utveckla.
					</p>
				</div>
				<div className="row">
					<SignIn />
				</div>
				<div className="row">
					<div className="col text-center">
						<button type="button" className="btn btn-success" onClick={this.handleShowListOfEmployees}>
							{this.state.showListOfEmployees ? 'Se listan över anställda' : 'Dölj listan över anställda'}
						</button>
					</div>
					<div className="col text-center">
						<button type="button" className="btn btn-success" onClick={this.handleShowToDoList}>
							{this.state.showToDoList ? 'Se att göra listan' : 'Dölj att göra listan'}
						</button>
					</div>
				</div>
			</Fragment>
		);
	}
}

let employees = [
    { id: 1,  fullName: "Lars Andersson",  title: "Lärare", department: "Matematik" },
    { id: 2,  fullName: "Astryd Vallés",   title: "Lärare", department: "Språk" },
    { id: 3,  fullName: "Shantell Meza",   title: "Lärare", department: "Språk" },
    { id: 4,  fullName: "Sergio Ocampo",   title: "Elev",   department: "Matematik", },
    { id: 5,  fullName: "Ares Jiménez",    title: "Elev",   department: "Matematik" },
    { id: 6,  fullName: "Marta Pérez",     title: "Lärare", department: "Rektor" },
    { id: 7,  fullName: "Ellen Balderas",  title: "Elev",   department: "Språk" }
  ]