import React, { Component } from "react";
import EmotionCard from "./EmotionCard";
import TaskCard from "../task/TaskCard";
import "./Emotion.css";
import "../task/Task.css"

export default class EmotionList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="emotions-list">
          {this.props.emotions.map(emotion => (
            <EmotionCard key={emotion.id} emotion={emotion} {...this.props} />
          ))}
        </div>
        <div className="tasks-list">
          {this.props.tasks.map(task => (
            <TaskCard key={task.id} task={task} {...this.props} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}