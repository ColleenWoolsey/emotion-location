import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import LoginManager from "../modules/LoginManager";
import Registration from "./authentication/Registration";
import Login from "./authentication/Login";
import TaskManager from "../modules/TaskManager";
import EmotionList from "./emotion/EmotionList";
import EmotionDetail from "./emotion/EmotionDetail";
import TaskAddForm from "./task/TaskAddForm";
import TaskEditForm from "./task/TaskEditForm";

export default class AppViews extends Component {

  state = {
    users: [],
    tasks: [],
    examples: [],
    userName: sessionStorage.getItem("userName"),
    user: sessionStorage.getItem("user")
  };
    
  isAuthenticated = () => sessionStorage.getItem("user") !== null
  
  addUser = newUser =>
    LoginManager.post(newUser)
      .then(() => LoginManager.getAll())
      .then(allUsers =>
        this.setState({
          users: allUsers
        })
      );  
 
  verifyUser = (userName, password) => {  
    return LoginManager.getNameAndPassword(userName, password)  
  }

  addTask = (task) => {
    return TaskManager.post(task)
    .then(() => {
      TaskManager.getTasksByUser(sessionStorage.getItem("user"))
      .then(tasks => 
        this.setState({
          tasks: tasks
      }, () => null))
    })
  }
  //  () => null))  isa null function that forces state be updated
  //  then the .then on the alert forces tasks to be updated before
  //  this.props.history.push("/tasks/new") in EmotionList

  updateTask = (id, existingTask) => {
    return TaskManager.put(id, existingTask)
    .then(() => {
      TaskManager.getTasksByUser(sessionStorage.getItem("user"))
      .then(tasks => 
        this.setState({
          tasks: tasks
      }))
    })
  }

  render() {
  return(
    <React.Fragment>
      <Route exact path="/" 
        render={(props) => {
          return (
            <Login
              {...props} 
              verifyUser={this.verifyUser}
              users={this.state.users} 
            />
          )
        }}
      />
    
{/* Route for listing emotions and tasks from NavBar */}
      <Route exact path="/home"
        render={props => {
          if (this.isAuthenticated()) {
          console.log("props from /home", props)
          return (          
            <EmotionList 
              {...this.props} 
              {...props} 
              tasks={this.state.tasks}
              addCheckChange={this.addCheckChange}
              deleteTask={this.deleteTask}
              updateTask={this.updateTask}
              
              userName={sessionStorage.getItem("userName")}
              user={sessionStorage.getItem("user")}
            />
            )
          } else {
            return <Redirect to="/" />;
          }
        }}
      />

      <Route exact path="/registration" 
        render={(props) => {
          console.log("/registration", props)
          return (
            <Registration
              {...props}
              users={this.state.users}
              addUser={this.addUser}
              userId={this.state.userId} 
            />
          );
        }} 
      />

    {/* this is the detail for individual emotion */}
    <Route exact path="/emotion/:id"
        render={props => {
        console.log("/emotions/:id from", props)
        return (
          <EmotionDetail
            {...props}
            {...this.props}         
          />
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
      <Route path="/task/:id"
        render={props => {
          console.log("/task/:id", props)
          return (
            <TaskEditForm
              {...props}
              {...this.props}
              tasks={this.state.tasks}
              updateTask={this.updateTask}
              addCheckChange={this.addCheckChange}
            />
          );
        }}
      />
    </React.Fragment>
    )
  }
}