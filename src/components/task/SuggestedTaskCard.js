import React, { Component } from "react";
import ExampleCard from "./ExampleCard";
import EmotionManager from "../../modules/EmotionManager";
import { CardBody, Card, CardImg, CardTitle, CardText, } from 'reactstrap';
import "../emotion/List.css";
import TaskAddForm from "./TaskAddForm";

export default class SuggestedTaskCard extends React.Component {

  state = {
    examples: []
  };
  componentDidMount() {
    
    EmotionManager.getExamplesByEmo(this.props.emotion.id) 
    .then(allExamples => {
        this.setState({
            examples: allExamples
        })        
        console.log("allExamples from componentDidMount", allExamples)
    })
  }


  render() {
    console.log("props passed from TaskAddForm", this.props.emotion)
    console.log("props passed from TaskAddForm", this.state.examples)
      return (
       <React.Fragment>
        <div key={this.props.emotion.id} className="card-container">

          <Card className="cardS">

            <CardTitle className="cardS-title">
              <h3>{this.props.emotion.emotionName}</h3>
            </CardTitle>

            <div className="suggested-tasks">                                
                {this.state.examples.map(example => (
                  <ExampleCard key={example.id} example={example} {...this.props} 
                  examples={this.state.examples}
                    />                  
                  ))                
                }
              </div>              
              
          </Card> 
        </div>
      </React.Fragment>
      );
    }; 
  }