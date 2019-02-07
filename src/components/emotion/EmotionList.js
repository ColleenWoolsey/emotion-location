import React, { Component } from "react";
import EmotionCard from "./EmotionCard";
import TaskCard from "../task/TaskCard";
import "./List.css";
export default class EmotionList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="emotions-list">
            {this.props.emotions.map(emotion => (
              <EmotionCard key={emotion.id} emotion={emotion} {...this.props} />
            ))}
        </div>
        
        <div className="bottom">
          <div className="bottom-right">
            <div className="header-add-task">
              <h4>My To-Do-List</h4>
              <button className="addTaskBtn"
                type="button"
                className="btn"
                onClick={() => {
                  this.props.history.push("/tasks/new");
                }}>
                Add A Task
              </button>
            </div>

            <div className="tasks-list">
              {this.props.tasks.map(task => (
                <TaskCard key={task.id} task={task} {...this.props} />
              ))}
            </div>
          </div>

          <div className="bottom-left">
          
          </div>
        </div>
      </React.Fragment>
    );
  }
}