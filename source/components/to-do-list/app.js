import React, { Component } from "react";
import { Input } from './input';
import { TaskList } from './task-list';
import { Layout } from './layout';

export class AppToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: "",
      tasks: []
    };

    this.handleTaskChange = this.handleTaskChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleTaskChange (event) {
    this.setState({
      newTask: event.target.value
    });
  };

  handleSubmit (event) {
    event.preventDefault();
    let newTasks = this.state.tasks;
    newTasks.push(this.state.newTask);
    this.setState({
      newTask: "",
      tasks: newTasks
    });
  };

  handleDelete (id) {
    let newTasks = this.state.tasks;
    newTasks.splice(id, 1)
    this.setState({
      tasks: newTasks,
    })
  }

  render() {
    return (
      <Layout>
        <h3 className="text-center text-primary">Att göra listan</h3>
        <Input 
          handleSubmit={this.handleSubmit}
          handleTaskChange={this.handleTaskChange}
          value={this.state.newTask}
        />
        <TaskList 
          tasks={this.state.tasks}
          handleDelete={this.handleDelete}
        />
      </Layout>
    );
  }
}