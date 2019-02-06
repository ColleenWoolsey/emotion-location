import React, { Component } from "react";
import { Link } from "react-router-dom";
import EmotionCard from "./EmotionCard";
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

        {/* <div className="addTaskBtn">
          <button
            type="button"
            className="btn"
            onClick={() => {
              this.props.history.push("/tasks/new");
            }}>
            Add a Task
          </button>
        </div> */}
      </React.Fragment>
    );
  }
}