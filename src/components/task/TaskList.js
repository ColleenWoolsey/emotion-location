import React, { Component } from "react";
import TaskCard from "./TaskCard";
import "./task.css";

export default class TaskList extends Component {
  render() {
    return (
      
        <div className="tasks-list">
          {this.props.tasks.map(task => (
            <TaskCard key={task.id} task={task} {...this.props} />
          ))}
        </div>
     
    );
  }
}