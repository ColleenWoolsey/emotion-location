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
        
      </React.Fragment>
    );
  }
}