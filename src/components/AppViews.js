import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import TaskManager from "../modules/TaskManager";
import EmotionList from "./emotion/EmotionList";
import TaskAddForm from "./task/TaskAddForm";
import TaskEditForm from "./task/TaskEditForm";

export default class AppViews extends Component {
    state = {
      tasks: []
    };

updateTask = (id, existingTask) => {
  return TaskManager.put(id, existingTask).then(() => {
      TaskManager.getAll()
      .then(tasks => 
        this.setState({
          tasks: tasks
      }))
  })

}

deleteTask = task =>
  TaskManager.del(task)
    .then(() => TaskManager.getAll())
    .then(tasks =>
      this.setState({
        tasks: tasks
      })
    );

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
           console.log("allTasks from componentDidMount", allTasks)
       })
   };

   render() {
    
       return(
// Route for listing emotions and tasks from NavBar
         <React.Fragment>

           <Route exact path="/"
              render={props => {
              console.log("/ props from", props)
              return (
                <React.Fragment>
                  <EmotionList 
                  {...this.props} 
                  {...props} 
                  tasks={this.state.tasks}
                  deleteTask={this.deleteTask}
                  />
                </React.Fragment>
                );
              }}
            />
{/* Route for adding tasks */}

        <Route path="/tasks/new"
          render={props => {
            console.log("/tasks/new props from", props)
            return (
              <TaskAddForm
                {...props}
                {...this.props}
                tasks={this.state.tasks}
                addTask={this.addTask}
              />
            );
          }}
        />

{/* Route for singular task */}
        <Route path="/edit/task/:id"
         render={props => {
           console.log("/edit/task/:id", props)
           return (
             <TaskEditForm
               {...props}
               {...this.props}
               tasks={this.state.tasks}
               updateTask={this.updateTask} 
             />
           );
         }}
       />
        </React.Fragment>
       )
      }
    }