import React, { Component } from "react";
import "./List.css";
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
      <div className="detail-card">
        <section className="summary">
        {this.props.emotion.summary} 
        </section>
      
        <section className="examples">      
          <div key={emotion.id} className="example-card">            
            <h4 className="example-title">{emotion.examples}</h4>
          </div>          
        </section>
      </div>
    );
  }
}