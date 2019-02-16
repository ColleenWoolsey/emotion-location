import React, { Component } from "react";
import EmotionCard from "./EmotionCard";
import TaskCard from "../task/TaskCard";
import TaskManager from "../../modules/TaskManager";
import { Button } from 'reactstrap';
import "./List.css";
export default class EmotionList extends Component {

  state = {
    tasks: [],
    examples: [],    
  };

  deleteTask = task =>
    TaskManager.del(task)
      .then(() => TaskManager.getTasksByUser(sessionStorage.getItem("user")))
      .then(tasks =>
        this.setState({
          tasks: tasks
      })
  );

  addCheckChange = (changedObj, id) => {
    console.log("id (task) from addCheckChange", id);
    return TaskManager.patch(changedObj, id)
    .then(() => TaskManager.getTasksByUser(sessionStorage.getItem("user"))
    .then(response =>
     this.setState({
       tasks: response
      })
    ))
  }

  componentDidMount() {
    
    TaskManager.getTasksByUser(sessionStorage.getItem("user"))
    .then(allTasks => {
        this.setState({
            tasks: allTasks
        })
        
        console.log("allTasks from componentDidMount", allTasks)
    })
  };

  render() {

    this.state.tasks.sort(function(a, b) 
                {a = new Date(a.dueDate);
                 b = new Date(b.dueDate);
                 return a>b ? -1 : a<b ? 1 : 0;}).reverse();
    return (      
      <React.Fragment>

        {/* <div>
          <h4 className="Header">How are you feeling {sessionStorage.getItem("userName")}?</h4>
        </div> */}
        
        <div className="container">
                   
          <div className="emotions-list">
              {this.props.emotions.map(emotion => (
                <EmotionCard key={emotion.id} emotion={emotion} {...this.props} />
              ))}
          </div>
          
          <div className="right">
            <div className="top-right">

              <div>
                <h2 className="header">How are you feeling {sessionStorage.getItem("userName")}?</h2>
              </div>

              <div className="header-add-task">
                <h4>My To-Do-List</h4>
                <button
                  // outline color="secondary"
                  size="lg"
                  type="button"
                  className="addTaskBtn"
                  onClick={() => {
                    this.props.history.push("/tasks/new");   
                  }}>
                  Add A Task
                </button>
              </div>
              {/* End of div header-add-task */}

              <div className="tasks-list">
                                
                {this.state.tasks.map(task => (
                  <TaskCard key={task.id} task={task} {...this.props} 
                  tasks={this.state.tasks}
                  addTask={this.addTask}
                  deleteTask={this.deleteTask}
                  updateTask={this.updateTask}
                  addCheckChange={this.addCheckChange}/>
                  
                ))
                
                }
                {/* {this.state.deleteTask(this.props.task.id)} */}
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