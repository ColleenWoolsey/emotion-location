import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Emotion.css";

export default class EmotionCard extends Component {
  render() {
    return (
      <div key={this.props.emotion.id} className="card">
        <div className="card-body">
          <h5 className="card-title">{this.props.emotion.emotionName}</h5>
          <img src="{this.props.emotion.imageUrl}" alt="imageUrl" />
          <h6>{this.props.emotion.summary}</h6>                      
          <Link className="task-link" to={`/emotions/${this.props.emotion.id}`}>
            Suggested Tasks
          </Link>
        </div>
      </div>
    );
  }
}