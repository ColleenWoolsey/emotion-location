import React, { Component } from "react";
import ArticleManager from "../../modules/ArticleManager";
import ArticleCard from "./ArticleCard";
import "../emotion/List.css"
export default class ArticleList extends Component {

  render() {
    console.log("this.props from /articles", this.props)
    return (
      <React.Fragment>

        <div className="articles-list">                    

        {this.props.articles.map(article => (
            <ArticleCard key={article.id} article={article} {...this.props} />       
                ))}
          }
        </div> 

      </React.Fragment>    
    )
  }
}
