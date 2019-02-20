import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import ArticleManager from "../../modules/ArticleManager";
import "../emotion/List.css"
export default class ArticleList extends Component {

  // state = {
  //   userId: sessionStorage.getItem("user"),
  //   entryDate: this.state.entryDate,
  //   article: this.state.article  
  // };

  // componentDidMount() {
   
  //   ArticleManager.getArticlesByUser(sessionStorage.getItem("user"))
  //   .then(allArticles => {
  //       this.setState({
  //           articles: allArticles
  //       })        
  //       console.log("getArticlesByUser from componentDidMount", allArticles)
  //   })
  
  // };
  
  render() {
    // console.log("articles", this.state.articles)
    // console.log("...this.props", ...this.props)
    return (
      <React.Fragment>
        <div className="articles-list">        
        {this.props.articles.map(article => (
            <ArticleCard key={article.id} article={article} {...this.props} />
          ))}
        </div>
      </React.Fragment>    
    )
  }
}