import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import "./List.css";
export default class EmotionCard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  
  render() {
    // console.log ("this.props passed to EmotionCard", this.props)
    return (      
      <React.Fragment>
        
        <div key={this.props.emotion.id} className="emotion-card">
          <div className="emotion-card-title">
            {this.props.emotion.emotionName}
            <img src="emotion.imageURL" alt="imageUrl" /> 
          </div>


        <div>
          <ButtonDropdown direction="right" isOpen={this.state.btnDropright} 
          toggle={() => { this.setState({ btnDropright: !this.state.btnDropright }); }}>
            <DropdownToggle caret>
            Expand Summary
            </DropdownToggle>
            <DropdownMenu
              modifiers={{
                setMaxHeight: {
                  enabled: true,
                  order: 890,
                  fn: (data) => {
                    return {
                      ...data,
                      styles: {
                        ...data.styles,
                        overflow: 'auto',
                        maxHeight: 100,
                      },
                    };
                  },
                },
              }}
            >
              <DropdownItem>{this.props.emotion.gift}</DropdownItem>
              <DropdownItem>{this.props.emotion.impairment}</DropdownItem>
              <DropdownItem>{this.props.emotion.examples}</DropdownItem>
              <DropdownItem>{this.props.emotion.summary}</DropdownItem>
      
            </DropdownMenu>
          </ButtonDropdown>
          </div>         
          
          {/* <div className="emotionSummary">
            {this.props.emotion.summary }          
          </div>            */}
        </div>        
      </React.Fragment>
    );
  }
}