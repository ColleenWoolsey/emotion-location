import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import EmotionManager from "../modules/EmotionManager";
import EmotionList from "./EmotionList";


export default class AppViews extends Component {
    state = {
      emotions: [],
      tasks: []
    };

   componentDidMount() {
       EmotionManager.getAll()
       .then(allEmotions => {
           this.setState({
               emotions: allEmotions
           })
       })
   };

   render() {
       return(
           <Route exact path="/emotions"
           render={props => {
               return <EmotionList emotions={this.state.emotions} />            
            }
          } />
        )
    }
