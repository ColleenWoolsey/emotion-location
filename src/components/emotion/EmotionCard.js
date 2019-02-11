import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./List.css";
export default class EmotionCard extends Component {
  render() {
    console.log ("this.props passed to EmotionCard", this.props)
    return (      
      <React.Fragment>
            
        <div key={this.props.emotion.id} className="emotion-card">
          <div className="emotion-card-title">
            {this.props.emotion.emotionName}
            <img src="emotion.imageURL" alt="imageUrl" />
          </div>

          {/* <Link to={`emotion/${this.props.emotion.id}`}>
            More Info
          </Link> */}
          <div className="emotionDetailBtn">
            <button
              type="button"
              className="btn"
              onClick={() => {
                this.props.history.push(`/emotion/${this.props.emotion.id}`)                     
              }}
            >
              More Info
            </button>
          </div>           
        </div>        
      </React.Fragment>
    );
  }
}