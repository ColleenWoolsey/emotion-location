import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { CardBody, Card, CardImg, CardTitle, CardText, } from 'reactstrap';
import {  CardDeck, CardSubtitle } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
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
        <div key={this.props.emotion.id} className="emotions-list">
          <Card className="card" color={this.props.emotion.eColor}>
            <CardImg className="card-img" top width="100%" src="emotion.imageURL" alt="imageUrl" />
            <CardBody className="card-body">

              <h3 className="card-title">{this.props.emotion.emotionName}<Badge color="secondary"></Badge></h3>
              
              <CardSubtitle className="card-subtitle">{this.props.emotion.impairment}</CardSubtitle>
              
              <CardText className="card-text">{this.props.emotion.gift}</CardText>    
          
              <Button color="danger" onClick={this.toggle}>DETAIL</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalHeader toggle={this.toggle}></ModalHeader>
                  <ModalBody>
                  {this.props.emotion.summary}
                  </ModalBody>
                  {/* <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                  </ModalFooter> */}
                </Modal>
            </CardBody>
          </Card> 
        </div>
      </React.Fragment>
      );
    }; 
  }