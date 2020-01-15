import "./Tasks.css";
import React from "react";
import AddTask from "../AddTask";

function template() {
  const tasks_list = this.state.tasks.map(task => {
    return (
      <li className="#e0f7fa cyan lighten-5 collection-item avatar hoverable" key={task.id}>
        <img src="images/clipboards.png" alt="task" className="circle responsive-img" />
        
        <span className="title">{task.category}</span>
        <p>
          {task.content}<br/>
          {task.first_name} {task.middle_name} {task.last_name}<br/>
          {task.due}
        </p>

        <button className="btn waves-effect waves-light secondary-content" type="submit" name="action" onClick={_ => this.deleteTask(task.id)}>
          <i className="material-icons">delete</i>
        </button>
      </li>
    );
  });

  return (
    <div className="section">
      <div className="divider"></div>
      <AddTask insertTask={this.insertTask} slno={this.state.tasks.length+1}/>
      <div className="divider"></div>
      <h4 className="#607d8b blue-grey-text text-darken-2">Tasks</h4>
      { this.state.isLoading ? (
          <div className="preloader-wrapper big active">
            <div className="spinner-layer spinner-blue-only">
              <div className="circle-clipper left">
                <div className="circle" />
              </div>
              <div className="gap-patch">
                <div className="circle" />
              </div>
              <div className="circle-clipper right">
                <div className="circle" />
              </div>
            </div>
          </div>
      ): (
        <ul className="collection">
          {tasks_list}
        </ul>
      ) }
    </div>
  );
};

export default template;
