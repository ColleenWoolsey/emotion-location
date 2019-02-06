import React, { Component } from "react";
import EmotionCard from "./EmotionCard";
import "./Emotion.css";

export default class EmotionList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="list">
          {this.props.emotions.map(emotion => (
            <EmotionCard key={emotion.id} emotion={emotion} {...this.props} />
          ))}
          {this.props.tasks.map(task => (
            <EmotionCard key={task.id} task={task} {...this.props} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}