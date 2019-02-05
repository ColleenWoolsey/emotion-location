import React, { Component } from "react";
import "./Emotion.css";

export default class EmotionDetail extends Component {
  render() {
    console.log(this.props);
    /*
      Using the route parameter, find the emotion that the
      user clicked on by looking at the `this.props.emotions`
      collection that was passed down from AppViews
    */
    const emotion =
      this.props.emotions.find(
        a => a.id === parseInt(this.props.match.params.emotionId)
      ) || {};

    return (
      <section className="emotion">      
        <div key={emotion.id} className="card">
          <div className="card-body">
            <h4 className="card-title">{emotion.examples}</h4>
          </div>
        </div>
      </section>
    );
  }
}