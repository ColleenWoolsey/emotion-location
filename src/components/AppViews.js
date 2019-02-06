import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import TaskManager from "../modules/TaskManager";
import EmotionList from "./emotion/EmotionList";
import TaskList from "./task/TaskList";
import EmotionCard from "./emotion/EmotionCard";
import EmotionDetail from "./emotion/EmotionDetail";

export default class AppViews extends Component {
    state = {
      tasks: []
    };

    addTask = task =>
    TaskManager.post(task)
      .then(() => TaskManager.getAll())
      .then(tasks =>
        this.setState({
          tasks: tasks
        })
      );

   componentDidMount() {
       TaskManager.getAll()
       .then(allTasks => {
           this.setState({
               tasks: allTasks
           })
       })
   };

   render() {
    
       return(
// This is the list of emotions for NavBar
         <React.Fragment>
           <Route path="/"
              render={props => {
                return (
                    <React.Fragment>
                        <EmotionList {...this.props} />
                        <TaskList tasks={this.state.tasks} />
                    </React.Fragment>
                );
              }}
            />
    
{/* this is the list of tasks */}
        {/* <Route
          exact path="/tasks"
          render={props => {
            return (
             <TaskList tasks={this.state.tasks} />              
               
                // deleteTask={this.deleteTask}
                // updateTask={this.updateTask}
              
            );
          }}
        /> */}

{/* this is the detail for one task */}
        <Route
          path="/tasks/:taskId(\d+)"
          render={props => {
            return (
              <emotionDetail
                {...props}
                tasks={this.state.tasks}
              />
            );
          }}
        />
        {/* this is the task add form */}
        <Route
          path="/tasks/new"
          render={props => {
            return (
              <taskAddForm
                {...props}
                addTask={this.addTask}
                
              />
            );
          }}
        />

         </React.Fragment>
       )
      }
    }