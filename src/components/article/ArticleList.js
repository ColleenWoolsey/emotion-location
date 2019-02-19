import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import "../emotion/List.css"
export default class ArticleList extends Component {
  
  render() {
    return (
      <React.Fragment>
        <div className="articles-list">
          {this.props.users.map(user => (
            <ArticleCard key={user.id} user={user} {...this.props} />
          ))}
        </div>
      </React.Fragment>    
    )
  }
}