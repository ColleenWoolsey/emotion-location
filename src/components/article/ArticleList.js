import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import "../emotion/List.css"
export default class ArticleList extends Component {

  
  render() {
    
    return (
      <React.Fragment>

        <div className="articles-list">                                
          {this.props.articles.map(article => (
            <ArticleCard key={article.id} article={article} {...this.props} 
            articles={this.props.articles}
            user={this.props.user}
              />                  
            ))                
          }
        </div> 

      </React.Fragment>    
    )
  }
}