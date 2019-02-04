import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Emotions.css";

export default class EmotionCard extends Component {
  render() {
    return (
      <div key={this.props.emotion.id} className="card">
        <div className="card-body">
          <h5 className="card-title">
            {this.props.emotion.name}
            {this.props.emotion.imageUrl}
            {this.props.emotion.summary}
            <Link className="task-link" to={`/emotions/${this.props.emotion.id}`}>
              Suggested Tasks
            </Link>
          </h5>
        </div>
      </div>
    );
  }
}