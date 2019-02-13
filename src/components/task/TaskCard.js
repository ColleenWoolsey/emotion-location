import React, { Component } from "react";
import { Link } from "react-router-dom";
import TaskEditForm from "./TaskEditForm";
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
        <div className="tasks-list">
          <div className="task-card">          
            <div className="task-card-body">
              <h5 className="task-card-title">
                <div>
                  <input
                    type="checkbox"
                    name="complete"
                    className="checkComplete"
                    checked={this.props.task.complete}
                    onChange={this.handleCheckChange}  
                   />
                    {console.log(this.props)}                 
                </div>

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
        </div>
      </React.Fragment>
    );
  }
}