import React, { Component } from "react";
import "./List.css";
export default class EmotionDetail extends Component {
  render() {
    console.log("EmotionDetail props Line 5", this.props);
    
      // Using the route parameter, find the emotion that the
      // user clicked on by looking at the `this.props.emotions`
      // collection that was passed down from AppViews
  
    const emotion =
      this.props.emotions.find(
        emotion => emotion.id === parseInt(this.props.match.params.emotionId)
      ) || {};

      console.log("emotionId", emotion)

    return (
     <React.Fragment>
      <div key={this.props.emotion.id} className="detail-card">
    
        <div className="detail-card">
          <section className="summary">
            {this.props.emotion.summary} 
          </section>
        
          <section className="examples"> 
            <h4 className="example-title">{this.props.emotion.examples}</h4>
          </section>
          
        </div>
      </div>
      </React.Fragment>
    );
  }
}