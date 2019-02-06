import React, { Component } from "react";
import EmotionCard from "./EmotionCard";
import TaskList from "../task/TaskList";
import "./Emotion.css";

export default class EmotionList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="emotions-list">
          {this.props.emotions.map(emotion => (
            <EmotionCard key={emotion.id} emotion={emotion} {...this.props} />
          ))}
        </div>
        <TaskList />
      </React.Fragment>
    );
  }
}