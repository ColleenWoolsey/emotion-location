import React, { Component } from "react";
import EmotionCard from "./EmotionCard";
import TaskCard from "../task/TaskCard";
import TaskManager from "../../modules/TaskManager";
import "./List.css";
export default class EmotionList extends Component {

  state = {
    
    tasks: [],
    examples: [],
    
  };

  componentDidMount() {
    
    TaskManager.getTasksByUser(sessionStorage.getItem("user"))
    .then(allTasks => {
        this.setState({
            tasks: allTasks
        })
        console.log(sessionStorage.getItem("user"))
        console.log(this.state.user)
        console.log("allTasks from componentDidMount", allTasks)
    })
  };

  render() {
    return (
      <React.Fragment>
        <div>
        <h3>How are you feeling {sessionStorage.getItem("userName")}?</h3>
        </div>
        <div className="container">
         
          <div className="emotions-list">
              {this.props.emotions.map(emotion => (
                <EmotionCard key={emotion.id} emotion={emotion} {...this.props} />
              ))}
          </div>
          
          <div className="right">
            <div className="top-right">

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
              {/* End of div header-add-task */}

              <div className="tasks-list">
              {/* { this.props.tasks.sort(function(a,b){return new dueDate - new dueDate}).reverse()} */}
                {this.state.tasks.map(task => (
                  <TaskCard key={task.id} task={task} {...this.props} />
                ))}
              </div>
              {/* End of div tasks-list */}

            </div>
            {/* End of div top-right */}

            <div className="bottom-right"></div>
             {/* End of div bottom-right */}

          </div>
          {/* End of div right */}

          </div>
          {/* End of div Contaiiner */}
      </React.Fragment>
    );
  }
}