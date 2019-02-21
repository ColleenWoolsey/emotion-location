import React, { Component } from "react";
import NavBar from "./nav/NavBar";
import AppViews from "./AppViews";
import EmotionManager from "../modules/EmotionManager";
import LoginManager from "../modules/LoginManager";
import "./Emoloco.css";
import "./nav/Nav.css";

export default class Emoloco extends Component {

  state = {
    emotions: [],
    users: []
  };

 componentDidMount() {
    EmotionManager.getAllEmotionInfo()
    .then(allEmotions => {
    console.log("allEmotions from componentDidMount", allEmotions)
        this.setState({
            emotions: allEmotions
        })                        
    })
    // Fetched : `${remoteURL}/emotions/?_embed=examples`
      

    LoginManager.getAll()
    .then(allUsers => {
      console.log("getAll from componentDidMount", allUsers)
        this.setState({
            users: allUsers
        })        
    })
    // Fetched:  `${remoteURL}/users`      
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