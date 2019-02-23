import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import { Card, CardText, } from 'reactstrap';
import { CardSubtitle } from 'reactstrap';
import "../emotion/List.css"

class ArticleCard extends React.Component {
// export default class ArticleCard extends Component {

    render() {
      
      return (
        <React.Fragment>
          {/* <div key={this.props.article.id}> */}

          <div className="article-container">
           <Card className="cardA">
             
            <div className="top-lineA">
              <div>
  
                <CardSubtitle className="article-date">
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
          {/* End of top-lineA div */}

          <div className="journal-entry">
            <CardText className="journal-entry">{this.props.article.entry}</CardText>           
          </div>
          
         </Card>
        {/* End of cardA div */}
       </div>      
       {/* End of key div */}

      </React.Fragment>
    );
  }
}
export default withRouter(ArticleCard);