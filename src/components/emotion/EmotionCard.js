import React, { Component } from "react";
import { Card, CardText, } from 'reactstrap';
import { CardSubtitle } from 'reactstrap';
import { Button, Modal, ModalBody, } from 'reactstrap';
import { Badge } from 'reactstrap';
import "./List.css";
export default class EmotionCard extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        modal: false
      };
  
      this.toggle = this.toggle.bind(this);
    }
  
    toggle() {
      this.setState(prevState => ({
        modal: !prevState.modal
      }));
    }

  render() {
      return (
        <React.Fragment>
        <div key={this.props.emotion.id}>
          <Card className="cardE">
            
              <h3 className="cardE-title">{this.props.emotion.emotionName}<Badge color="secondary"></Badge></h3>
                           
              <CardSubtitle className="cardE-gift-subtitle">GIFT</CardSubtitle>              
              <CardText className="cardE-gift-text">{this.props.emotion.gift}</CardText> 
              
              <CardSubtitle className="cardE-impairment-subtitle">IMPAIRMENT</CardSubtitle>
              <CardText className="cardE-impairment-text">{this.props.emotion.impairment}</CardText> 

                <Button className="detailBtn" onClick={this.toggle}>... more detail</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  {/* <ModalHeader toggle={this.toggle}></ModalHeader> */}
                  <ModalBody className="bottom-left">
                  {this.props.emotion.summary}
                  </ModalBody>
                  {/* <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                  </ModalFooter> */}
                </Modal>

          </Card> 
        </div>
      </React.Fragment>
      );
    }; 
  }