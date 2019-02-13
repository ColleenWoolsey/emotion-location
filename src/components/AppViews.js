import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import LoginManager from "../modules/LoginManager";
import Registration from "./authentication/Registration";
import Login from "./authentication/Login";
import TaskCard from "./task/TaskCard";
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
    console.log("userName from verifyUser.js", userName);
    console.log("password from verifyUser.js", password);
    return LoginManager.getNameAndPassword(userName, password)    
  }

   updateTask = (id, existingTask) => {
    return TaskManager.put(id, existingTask).then(() => {
      TaskManager.getAll()
      .then(tasks => 
        this.setState({
          tasks: tasks
      }))
    })
  }

    addCheckChange = (changedObj, id) => {
      console.log(id);
      return TaskManager.patch(changedObj, id)
      .then(() => TaskManager.getAll()
      .then(response =>
      this.setState({
        tasks: response
        })
      )
     )
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

    LoginManager.getAll()
    .then(allUsers => {
        this.setState({
            tasks: allUsers
        })
        console.log("allUsers from componentDidMount", allUsers)
    })

    TaskManager.getAll()
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
  return(
    <React.Fragment>

      <Route exact path="/" 
        render={(props) => {
          console.log("/", props)
          return (
          <Login
          {...props} 
          // component={Login}
          verifyUser={this.verifyUser}
          users={this.state.users} />
          )
        }}
      />
    
{/* Route for listing emotions and tasks from NavBar */}
      <Route exact path="/home"
        render={props => {
          if (this.isAuthenticated()) {
          console.log("/ props from", props)
          return (          
              <EmotionList 
              {...this.props} 
              {...props} 
              tasks={this.state.tasks}
              deleteTask={this.deleteTask}
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
          userId={this.state.userId} />
          )
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
            />
          );
        }}
      />
      </React.Fragment>
      )
    }
}