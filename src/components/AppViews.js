import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import EmotionManager from "../modules/EmotionManager";
import EmotionList from "./emotion/EmotionList";
import EmotionCard from "./emotion/EmotionCard";
import EmotionDetail from "./emotion/EmotionDetail";

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
// This is the list of emotions for NavBar
         <React.Fragment>
           <Route path="/"
              render={props => {
                return (
                <EmotionList emotions={this.state.emotions} />
                );
              }}
            />
    
{/* This is the detail for individual emotions */}
            <Route exact path="/emotions/:emotionId(\d+)"
              render={props => {                    
                    return (
                        <EmotionDetail {...props}
                        emotions={this.state.emotions} />
                    );
              }}
            />

         </React.Fragment>
       )
      }
    }