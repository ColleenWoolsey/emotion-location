import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../emotion/List.css"
export default class TaskCard extends Component {
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
                    className="checkComplete"
                    value={this.props.task.complete}
                    onClick={() => {
                      // this.props.history.push("/tasks/edit");
                    }}>
                  </input>
                </div>
                {this.props.task.dueDate}
                {/* {this.props.emotion.emotionName} */}
                <div className="editTaskBtn">
                  <button
                    type="button"
                    className="btn"
                    onClick={() => {
                      // this.props.history.push("/tasks/edit");
                    }}>
                    Edit
                  </button>
                </div>
                <div className="delTaskBtn">
                  <button
                    type="button"
                    className="btn"
                    onClick={() => {
                      // this.props.history.push("/tasks/new");
                    }}>
                    Del
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