import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { CardBody, Card, CardImg, CardTitle, CardText, } from 'reactstrap';
import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
import "./List.css";

export default class EmotionSummary extends React.Component {
  
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <div key={this.props.emotion.id} className="examples">
      <Dropdown isOpen={this.state.dropdownOpen} size="lg" toggle={this.toggle}>
        <DropdownToggle caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          {/* <DropdownItem header>{this.props.emotion.examples}</DropdownItem> */}
          <DropdownItem>{this.props.emotion.examples}</DropdownItem>
          {/* <DropdownItem disabled>Action (disabled)</DropdownItem>
          <DropdownItem divider /> */}
          <DropdownItem>{this.props.emotion.examples}</DropdownItem>
          <DropdownItem>{this.props.emotion.examples}</DropdownItem>
          <DropdownItem>{this.props.emotion.examples}</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      </div>
    );
  }
}