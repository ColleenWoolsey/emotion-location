import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Emotion.css";

export default class EmotionCard extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="emotions-list">
          <div className="card">          
            <div className="card-body">
              <h5 className="card-title">
                {this.props.emotion.emotionName}
                <img src="emotion.imageURL" alt="imageUrl" />
              </h5>
                {this.props.emotion.summary}             
            </div>
            <div className="addTaskBtn">
              <button
                type="button"
                className="btn"
                onClick={() => {
                  // this.props.history.push("/tasks/new");
                }}>
                {`Add an ${this.props.emotion.emotionName} Task`}
              </button>
            </div>
          </div>
        </div>
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