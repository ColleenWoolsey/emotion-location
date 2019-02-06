import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
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
        <NavBar emotions={this.state.emotions} />
        <AppViews emotions={this.state.emotions} />
      </React.Fragment>
    );
  }
}