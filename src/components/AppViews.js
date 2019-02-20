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
import ArticleManager from "../modules/ArticleManager";
import ArticleList from "./article/ArticleList";
import ArticleCard from "./article/ArticleCard";
import EmotionManager from "../modules/EmotionManager";

import "./emotion/List.css";

export default class AppViews extends Component {

  state = {
    users: [],
    tasks: [],
    articles: [],
    examples: [],
    userName: sessionStorage.getItem("userName"),
    user: sessionStorage.getItem("user")
  };
    
  verifyUser = (userName, password) => {  
    return LoginManager.getNameAndPassword(userName, password)
  }

  getExamples = (id) => {  
    return EmotionManager.getExamplesByEmo(id)
  }

  addUser = newUser =>
    LoginManager.post(newUser)
      .then(() => LoginManager.getAll())
      .then(allUsers =>
        this.setState({
          users: allUsers
        })
      );
 
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
          console.log("props from /home", props)
          return (          
            <EmotionList 
              {...this.props} 
              {...props} 
              tasks={this.state.tasks}
              articles={this.state.articles}
              examples={this.state.examples}
              addCheckChange={this.addCheckChange}
              deleteTask={this.deleteTask}
              updateTask={this.updateTask}
              addArticle={this.addArticle}
            />
            )
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

      {/* this is for list of Journal Entries */}
      <Route exact path="/articles" 
        render={(props) => {
          console.log("/articles", this.state.articles)
          console.log("/articles", this.props.articles)
          return (
            <ArticleList
              {...this.props}              
              articles={this.state.articles}
              users={this.state.users}
               
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
          console.log("/tasks/new props from", this.props)
          console.log("/tasks/new props from", this.props.emotions)
          return (
            <TaskAddForm 
              {...props}           
              {...this.props}
              tasks={this.state.tasks}
              addTask={this.addTask}
              examples={this.state.examples}
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