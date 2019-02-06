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
                {/* {this.props.emotion.name}
                {this.props.emotion.imageUrl}
                {this.props.emotion.summary}
                <Link className="task-link" to={`/emotions/${this.props.emotion.id}`}>
                  Suggested Tasks
                </Link> */}
              </h5>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}