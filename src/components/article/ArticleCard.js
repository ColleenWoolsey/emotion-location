import React, { Component } from "react";
import { Link } from "react-router-dom";
import ArticleManager from "../../modules/ArticleManager";
import { CardBody, Card, CardImg, CardTitle, CardText, } from 'reactstrap';
import {  CardDeck, CardSubtitle } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "../emotion/List.css"
export default class ArticleCard extends Component {

  render() {
    console.log("articles array from ArticleList", this.props.articles)
    return (
      <React.Fragment>
        <div key={this.props.article.id}>
         <Card className="cardA">
          <div className="top-line">
          

          <CardSubtitle className="entry-date">{this.props.article.entryDate}</CardSubtitle>
          <CardSubtitle className="journal-entry">{this.props.article.article}</CardSubtitle>           

          </div>
          {/* End of top-line div */}          

          <div className="bottom-line"></div>

          </Card>
          {/* End of cardA div */}

        </div>
        {/* End of key div */} 
      </React.Fragment>
    );
  }
}