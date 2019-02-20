import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import ArticleManager from "../../modules/ArticleManager";
import "../emotion/List.css"

export default class JournalCard extends Component {
    
    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {};
        console.log(evt.target.id, evt.target.value);
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };
    
    /* Local method for validation, creating article object, and
        invoking the function reference passed from parent component */
    constructNewArticle = evt => {
        evt.preventDefault();
    
        const article = {
            userId: Number(sessionStorage.getItem("user")),
            entryDate: Date(),
            article: this.state.article
        };
    
    // Create the article and redirect user to home
        this.props.addArticle(article)
        .then(() => 
          this.props.history.push("/home"))
          alert("Your journal entry has been saved")
        }  

  render() {
    console.log("props passed from EmotionList to beginning of render", this.props)
    return (
      <React.Fragment>
       
          <form className="article-input">

            <FormGroup>
              <Input className="article-textarea"
                type="textarea" 
                name="article" 
                id="article"
                rows="8"
                cols="72"
                placeholder="Start Journal Entry ..."
                onChange={this.handleFieldChange}
              />
            </FormGroup>

            <FormGroup>
              <button
                type="submit"
                className="addArticleBtn"                                
                onClick={this.constructNewArticle}
              >
                Submit
              </button>             
            </FormGroup>
          </form>
        
      </React.Fragment>
    );
  }
}