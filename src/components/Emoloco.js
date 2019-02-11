import React, { Component } from "react";
import Login from "./authentication/Login";
import NavBar from "./nav/NavBar";
import AppViews from "./AppViews";
import EmotionManager from "../modules/EmotionManager";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./Emoloco.css";
import "./nav/Nav.css";

export default class Emoloco extends Component {

  state = {
    emotions: []
  };

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
        <Login users={this.state.users} />
        <NavBar emotions={this.state.emotions} />
        <AppViews emotions={this.state.emotions} />
      </React.Fragment>
    );
  }
}