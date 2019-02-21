import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import "../emotion/List.css"
export default class ArticleList extends Component {

  
  render() {
    console.log("this.props.articles from /articles/list", this.props.articles)
    return (
      <React.Fragment>

        <div className="articles-list">                                
          {this.props.articles.map(article => (
            <ArticleCard key={article.id} article={article} {...this.props} 
              />                  
            ))                
          }
        </div> 

      </React.Fragment>    
    )
  }
}