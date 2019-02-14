import React, { Component } from "react";
import { Link } from "react-router-dom";
import TaskManager from "../../modules/TaskManager";
import "../emotion/List.css"
export default class TaskCard extends Component {

  handleCheckChange = e => {
    e.preventDefault();
    const completeCheck = {
      complete: !this.props.task.complete
    };
  
   this.props
   .addCheckChange(completeCheck, this.props.task.id)  
  }

  render() {
    return (
      <React.Fragment>
        <div className="task-list"> 
          <div key={this.props.task.id} className="task-card">
            <h5 className="task-card-title">

            <input
            className="btn"
            name="completed"
            type="checkbox"
            checked={this.props.task.complete}
            onChange={this.handleCheckChange} />

              {this.props.task.dueDate}
              {this.props.task.emotion.emotionName}

            <div className="editTaskBtn">
              <button
                type="button"
                className="btn"
                onClick={() => {

                  this.props.history.push(`/task/${this.props.task.id}`)                     
                }}
              >
                Edit
              </button>
            </div>

            <div className="delTaskBtn">
              <button
                type="button"
                className="btn"
                onClick={() => {
                  this.props
                  .deleteTask(this.props.task.id)                
                }}
                >
                Delete
              </button>
            </div>

              {this.props.task.task}

            </h5>
           
            </div>          
        </div>
      </React.Fragment>
    );
  }
}