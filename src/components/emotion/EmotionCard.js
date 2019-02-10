import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./List.css";
export default class EmotionCard extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <div className="emotions-list"> */}
          <div className="emotion-card">        
            <div className="emotion-card-body">
              <h5 className="emotion-card-title">
                {this.props.emotion.emotionName}
                <img src="emotion.imageURL" alt="imageUrl" />
              </h5>
                {this.props.emotion.summary}             
            </div>
          </div>
        {/* </div> */}
        
      </React.Fragment>
    );
  }
}