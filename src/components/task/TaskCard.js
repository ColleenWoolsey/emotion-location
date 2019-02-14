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

    // console.log("updateCheck from TaskCardForm", existingTask);
    // console.log("this.props passed to updateTask from TaskCard", this.props) 
    
    // this.props.updateCheck(this.props.match.params.id, existingTask)
    // .then(() => this.props.history.push("/home"))
  
  

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
            {/* <form>
        <label>
          <input
            className="btn"
            name="completed"
            type="checkbox"
            checked={this.props.task.complete}
            onChange={this.handleCheckChange} />
        </label>
      </form> */}
            </div>          
        </div>
      </React.Fragment>
    );
  }
}