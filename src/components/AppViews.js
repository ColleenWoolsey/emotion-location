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
      .then(() => LoginManager.getAllUserInfo()
      .then(allUsers =>
        this.setState({
          users: allUsers
        }))
      );

addArticle = newarticle =>
  ArticleManager.post(newarticle)
    .then(() => ArticleManager.getArticlesByUser(sessionStorage.getItem("user")))
    .then(articles =>
      this.setState({
        articles: articles
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

  componentDidMount() {    
   
    ArticleManager.getArticlesByUser(sessionStorage.getItem("user"))
    .then(allArticles => {
        this.setState({
            articles: allArticles
        })        
        console.log("getArticlesByUser from componentDidMount", allArticles)
        console.log ("After artCDM - this.props", this.props)
        console.log ("After artCDM - this.state", this.state)
        console.log ("After artCDM - this.state.articles", this.state.articles)
        console.log ("After artCDM - this.props.articles", this.props.articles)
        console.log ("After artCDM - this.state.tasks", this.state.tasks)
        console.log ("After artCDM - this.props.tasks", this.props.tasks)
        console.log ("After artCDM - this.state.user", this.state.user)
        console.log ("After artCDM - this.props.user", this.props.user)
    })
  };

  render() {
  return(
    <React.Fragment>
      <Route exact path="/" 
        render={(props) => {
          return (
            <Login
              {...props}
              {...this.props}
              verifyUser={this.verifyUser}
              users={this.state.users} 
            />
          )
        }}
      />
    
{/* Route for listing emotions and tasks from NavBar */}
      <Route exact path="/home"
        render={props => {
          console.log("/home - props", props)
          console.log("/home - this.props", this.props)
          
          console.log("/home - this.state.articles", this.state.articles)
          console.log("/home - this.props.articles", this.props.articles)
          console.log("/home - this.state.tasks", this.state.tasks)
          console.log("/home - this.props.tasks", this.props.tasks)
          console.log("/home - this.state.emotion", this.state.emotions)
          console.log("/home - this.props.emotion", this.props.emotions)
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
              addUser={this.addUser}
            />
            )
        }}
      />

      <Route exact path="/registration" 
        render={(props) => {
          console.log("/registration", props)
          return (
            <Registration
              {...this.props}
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
          console.log("/articles - props", props)
          console.log("/articles - this.props", this.props)
          console.log("/articles - this.state.articles", this.state.articles)
          console.log("/articles - this.props.articles", this.props.articles)
          
          return (
            <ArticleList
              {...props}
              {...this.props}              
              articles={this.state.articles}
              addArticle={this.addArticle}
              // articles={this.props.articles}
               
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
          console.log("/tasks/new - props", props)
          console.log("/tasks/new - this.props", this.props)
          console.log("/tasks/new - this.props.tasks", this.props.tasks)
          console.log("/tasks/new - this.props.emotion", this.props.emotions)
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