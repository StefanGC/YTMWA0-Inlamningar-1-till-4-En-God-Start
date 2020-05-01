import React from "react";
import { Task } from "./task";

export class ToDoList extends React.Component {  
    constructor(props) {
        super(props)
        this.state = {
           newTask: "",
           tasks: []
        }
        this.handleTaskChange = this.handleTaskChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
     }

     handleTaskChange (event) {
        this.setState({
           newTask: event.target.value,
        });
     }

     handleSubmit (event) {
        event.preventDefault();
        let newTasks = this.state.tasks;
        newTasks.push(this.state.newTask)
        this.setState({
          newTask: "",
          tasks: newTasks
        });
     }

    render() {
      return (
        <div className="myList">
            <h3 className="title">Uppgifter att göra</h3>
            <form onSubmit={this.handleSubmit}>
                <input 
                    value={this.state.newTask}
                    onChange={this.handleTaskChange}
                    type="text"
                    className="new-task"
                />
            </form>            
            <h4 className="text-center">{this.state.newTask}</h4>
            {
                this.state.tasks.map(task => <Task value={task} />)
            }
        </div>
      );
    }
  }