import React, { Component } from "react";
import { Form, Input } from 'reactstrap';
import { Button, Modal, ModalBody, } from 'reactstrap';
// import TaskManager from "../../modules/TaskManager";
import "../emotion/List.css"
export default class TaskCard extends Component {

  handleCheckChange = e => {
    e.preventDefault();
    const completeCheck = {
      complete: !this.props.task.complete
    };
  
   this.props.addCheckChange(completeCheck, this.props.task.id)
  }

  render() {
    // console.log("props passed from EmotionList", this.props)
    return (
      <React.Fragment>
        <div key={this.props.task.id}>
         <div className="cardT">
          <div className="top-line">

            <section>{this.props.task.dueDate}</section>
            <section className="emotion-name">{this.props.task.emotion.emotionName}</section>           
            <section>
              <button
                type="button"
                className="editBtn"
                onClick={() => {                  
                  this.props.history.push(`/task/${this.props.task.id}`)                     
                }}
              >
                Edit
              </button>
            
              <button
                type="button"
                className="delBtn"
                onClick={() => {
                  this.props.deleteTask(this.props.task.id)
                  // .then(() => this.props.history.push("/home"))
                  // .then(() => alert("Your task has been deleted!"))                
                }}
                >
                Delete
              </button>
            </section>

            <section>
              <input
              className="check-box"
              name="completed"
              type="checkbox"
              
              checked={this.props.task.complete}
              onChange={this.handleCheckChange} />
              <label>Completed</label>
            </section>
          </div>
          {/* End of top-line div */}          

          <div className="bottom-line">              
            {this.props.task.task}            
          </div>
        </div>
      </div>
      </React.Fragment>
    );
  }
}