import React, { Component } from "react";
// import EmotionManager from "../../modules/EmotionManager";
import "../emotion/List.css";

export default class ExampleCard extends Component {

  render() {
    console.log("props passed from SuggestedTaskCardList", this.props)
    console.log("props passed from SuggestedTaskCardList", this.props.example)
    return (
      <React.Fragment>
        <div key={this.props.example.id}>
            
            <p className="example-name">{this.props.example.example}</p>

          </div>
          
      </React.Fragment>
    );
  }
}