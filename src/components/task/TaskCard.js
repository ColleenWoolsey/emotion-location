import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./task.css";

export default class TaskCard extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="tasks-list">

            {/* "id": 1,
            "userId": 1,
            "emotionId": 1,
            "dueDate": "2019-02-04",
            "task": "task one",
            "completion": false */}

          <div className="card">          
            <div className="card-body">
              <h5 className="card-title">
                {this.props.task.complete}
                {this.props.task.dueDate}
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