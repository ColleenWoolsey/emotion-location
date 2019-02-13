import React, { Component } from "react";
import { Link } from "react-router-dom";
import TaskManager from "../../modules/TaskManager";
import "../emotion/List.css"
export default class TaskCard extends Component {

handleFieldChange = evt => {
    const stateToChange = {};
    console.log("evt.target.id",evt.target.id);
    console.log("evt.target.value", evt.target.value);
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
};

updateExistingCheck = evt => {
    evt.preventDefault()

    const existingTask = {
      id: this.state.id,
      userId: Number(this.state.userId),
      emotionId: Number(this.state.emotionId),
      emotionName: this.state.emotionName,
      dueDate: this.state.dueDate,
      task: this.state.task,
      complete: true     
    }

    console.log("updateCheck from TaskCardForm", existingTask);
    {console.log("this.props passed to updateTask from TaskCard", this.props)} 
    
    this.props.updateCheck(this.props.match.params.id, existingTask)
    .then(() => this.props.history.push("/home"))
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
                    onChange={this.handleFieldChange} 
                    />
                                
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