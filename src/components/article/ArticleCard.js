import React, { Component } from "react";
import { CardBody, Card, CardImg, CardTitle, CardText, } from 'reactstrap';
import {  CardDeck, CardSubtitle } from 'reactstrap';
import "../emotion/List.css"
export default class ArticleCard extends Component {

//   constructNewDate = evt => {
//     evt.preventDefault();

//   var today = new Date().toLocaleDateString('en-US', {  
//     day : 'numeric',
//     month : 'short',
//     year : 'numeric'
//   })
//   this.props.constructNewDate(this.props.artiicle.entryDate)
//   .then(() => 
//       this.props.history.push("/articles"));
// }

    render() {
      console.log("users array from ArticleList", this.props.article)
      return (
        <React.Fragment>
          <div key={this.props.article.id}>
           
           <Card className="cardA">
             
           {/* <div className="articles-picture">
            <Image src={"./lantern.jpg"} width={500} height={300} mode='fit' />  
           </div> */}
            <div className="top-line">
              <div>
  
                <CardSubtitle className="article-date">
                  {/* {this.constructNewDate} */}
                  {this.props.article.entryDate}
                </CardSubtitle>
  
              </div>

            <div className="btns-group">

              <div>
                <button
                  type="button"
                  className="editArticleBtn"
                  onClick={() => {                  
                    this.props.history.push("/home")                     
                  }}
                >
                  Edit
                </button>
              </div>

              <div>
                <button
                  type="button"
                  className="delArticleBtn"
                  onClick={() => {                  
                    this.props.history.push("/home")                     
                  }}
                >
                  Delete
                </button>
              </div>

              <div>
                <button
                  type="button"
                  className="returnBtn"
                  onClick={() => {                  
                    this.props.history.push("/home")                     
                  }}
                >
                  Return
                </button>
              </div>

            </div>
            {/* End of btns-date div */}
          </div>
          {/* End of top-line div */}

          <div className="journal-entry">
            <CardText className="journal-entry">{this.props.article}</CardText>           
          </div>
          
        </Card>
        {/* End of cardA div */}
        </div>
      
        {/* End of key div */} 
        </React.Fragment>
    );
  }
}