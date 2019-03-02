import React, { Component } from "react";
import { FormGroup, Input } from 'reactstrap';
// import ArticleManager from "../../modules/ArticleManager";
import "../emotion/List.css"

export default class JournalCard extends Component {

  state = {
    userId: sessionStorage.getItem("user"),
    entryDate: Date(),
    entry: ""
};
    
    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {};
        console.log("evt.target.id", evt.target.id);
        console.log("evt.target.value", evt.target.value);
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };
    
    /* Local method for validation, creating article object, and
        invoking the function reference passed from parent component */
    constructNewArticle = evt => {
        evt.preventDefault();
    
        const newarticle = {
            userId: Number(sessionStorage.getItem("user")),
            entryDate: Date(),
            entry: this.state.entry
          };

          // Create the task and redirect user to task list
    console.log("newarticle object", newarticle)
    console.log("this.state.entry", this.state.entry)
    console.log("this.props", this.props)
    console.log("this.state", this.state)
    // console.log("this.props.article", this.props.article)
          this.props.addArticle(newarticle)
          .then(() => 
          // this.props.history.push("/home"))
            alert("Your journal entry has been saved"))
          };

  render() {
    
    return (
      <React.Fragment>
       
          <form className="article-input">

            <FormGroup>
              <Input className="entry-textarea"
                type="textarea" 
                name="entry" 
                id="entry"
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
           >
          </form>
        
      </React.Fragment>
    );
  }
}