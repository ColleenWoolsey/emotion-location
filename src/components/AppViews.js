import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import EmotionManager from "../modules/EmotionManager";
import EmotionList from "./emotion/EmotionList";
import EmotionCard from "./emotion/EmotionCard";
import EmotionDetail from "./emotion/EmotionDetail";

export default class AppViews extends Component {
    state = {
      tasks: []
    };

   componentDidMount() {
       TaskManager.getAll()
       .then(allTasks => {
           this.setState({
               tasks: allTasks
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
                  <EmotionList {...this.props} />
                );
              }}
            />
    
{/* This is the detail for individual emotions */}
            {/* <Route exact path="/emotions/:emotionId(\d+)"
              render={props => {                    
                    return (
                      <EmotionDetail {...this.props} />
                    )
                }}
            /> */}

         </React.Fragment>
       )
      }
    }