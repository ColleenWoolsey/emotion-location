import React, { Component } from "react";
import TaskCard from "./TaskCard";
import "../emotion/List.css"
export default class TaskList extends Component {
  
  render() {
    return (
      <React.Fragment>
        <div className="tasks-list">
          {this.props.tasks.map(task => (
            <TaskCard key={task.id} task={task} {...props} />
          ))}
        </div>
      </React.Fragment>    
    )
  }
}