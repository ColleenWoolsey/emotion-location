import React, { Component } from "react";
import { Link } from "react-router-dom";
import ArticleManager from "../../modules/ArticleManager";
import "../emotion/List.css"
export default class ArticleCard extends Component {

  // handleCheckChange = e => {
  //   e.preventDefault();
  //   };
  
  //  this.props
  //  .addCheckChange(completeCheck, this.props.task.id)
  // }

  render() {
    // {this.state.tasks.sort(function(a, b){
    //   return new Date(a.dueDate) - new Date(b.dueDate)})}
    console.log("props passed from ArticleList", this.props)
    return (
      <React.Fragment>
        <div key={this.props.article.id}>
         <div className="cardA">
          <div className="top-line">

            <section className="entry-date">{this.props.article.entryDate}</section>
            <section className="journal-entry">{this.props.task.article.emotionName}</section>           

          </div>
          {/* End of top-line div */}          

          <div className="bottom-line"></div>

          </div>
          {/* End of cardA div */}

        </div>
        {/* End of key div */} 
      </React.Fragment>
    );
  }
}