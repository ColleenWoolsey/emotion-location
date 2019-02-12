import React, { Component } from "react";
import Login from "./authentication/Login";
import NavBar from "./nav/NavBar";
import AppViews from "./AppViews";
import EmotionManager from "../modules/EmotionManager";
import LoginManager from "../modules/LoginManager";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./Emoloco.css";
import "./nav/Nav.css";

export default class Emoloco extends Component {

  state = {
    emotions: [],
    // users: []
  };

  // componentDidMount() {
  //   LoginManager.getAll()
  //   .then(allUsers => {
  //    console.log("allUsers from componentDidMount in EmoLoco", allUsers)
  //       this.setState({
  //           users: allUsers
  //       })                 
  //    })      
  //  }

 componentDidMount() {
     EmotionManager.getAll()
     .then(allEmotions => {
      console.log("allEmotions from componentDidMount", allEmotions)
         this.setState({
             emotions: allEmotions
         })                 
      })      
    }

  render() {
    return (
      <React.Fragment>
        {/* <Login {...this.props} users={this.state.users} /> */}
        <NavBar emotions={this.state.emotions} />
        <AppViews emotions={this.state.emotions} />
      </React.Fragment>
    );
  }
}