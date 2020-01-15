import React    from "react";
import template from "./Tasks.jsx";
// import AddTask from "../AddTask";

class Tasks extends React.Component {
  state = {
    tasks: [],
    isLoading: true
  }

  componentDidMount() {
    this.setState({
      isLoading: false
    })
  }

  insertTask = (task) => {
    let id = this.state.tasks.length + 1;
    task.id = id;
    let tasks = [...this.state.tasks, task];
    this.setState({
      tasks: tasks
    }, _ => {
      console.log(this.state);
    }); 
  }

  deleteTask = (id) => {
    let tasks = this.state.tasks.filter(task => task.id!=id);
    this.setState({
      tasks: tasks
    }, _ => {
      console.log(this.state);
    }); 
  }

  render() {
    return template.call(this);
  }
}

export default Tasks;
