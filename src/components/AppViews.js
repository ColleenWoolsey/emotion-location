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
                    <h4>This is the h4 returned at path="/"</h4>
                );
              }}
            />
           
           {/* <Route exact path={`/emotions/${emotion.id}`} */}
           {/* <Route exact path={`/emotions/${id}`} */}
            <Route exact path="/emotions"
              render={props => {
                return (
                    this.props.emotions.map(emotion => (
                    <EmotionCard key={emotion.id} emotion={this.state.emotion} {...this.props} />
                )))
              }}
            />

           {/* <Route exact path="/emotions/2"
           render={props => {
               return <EmotionCard emotions={this.state.emotions.id} />            
            }}
           />
           <Route exact path="/emotions/3"
           render={props => {
               return <EmotionList emotions={this.state.emotions.id} />            
            }}
           /> */}
    
{/* This is the detail for individual emotions */}
            <Route path="/emotions/:emotionId(\d+)"
                render={props => {
                    return (
                        <EmotionCard {...props}
                        emotions={this.state.emotions} />
                    );
                }}
            />

         </React.Fragment>
       )
      }
    }