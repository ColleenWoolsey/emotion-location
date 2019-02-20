import React from 'react';
import SuggestedTaskCard from "./SuggestedTaskCard";
import EmotionManager from "../../modules/EmotionManager";
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "../emotion/List.css";

export default class TaskAddForm extends React.Component {
        
state = {
    userId: sessionStorage.getItem("user"),
    emotionId: "",
    dueDate: "",
    task: "",
    complete: false
};

// Update state whenever an input field is edited
handleFieldChange = evt => {
    const stateToChange = {};
    console.log("evt.target.id", evt.target.id)
    console.log("evt.target.value", evt.target.value);
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
};

/* Local method for validation, creating task object, and
    invoking the function reference passed from parent component */
constructNewTask = evt => {
    evt.preventDefault();

    const task = {
        userId: Number(this.state.userId),
        emotionId: Number(this.state.emotionId),
        dueDate: this.state.dueDate,
        task: this.state.task,
        complete: this.state.complete
    };

    // Create the task and redirect user to task list
    this.props.addTask(task)
    .then(() => 
      this.props.history.push("/home"));
    };

  render() {
    return (
      <React.Fragment>

<       div className="addTaskContainer">

          {/* <div className="topExamples"> */}

            <div className="emotions-list-examples">
                {this.props.emotions.map(emotion => (
                  <SuggestedTaskCard key={emotion.id} emotion={emotion} {...this.props} />
                ))}
            </div>
            {/* End of div emotions-list-examples */} 

            {/* </div> */}
             {/* End of div topExamples */}           

  {/* ==================================================== */}

        <div className="bottomTasks">

          <Form inline autoComplete="off" className="taskInputForm">

          <div className="form-group">
            <label htmlFor="emotionId" sm={2} size="lg">Emotion:  </label>
            
            <select
              bssize="lg"
              defaultValue=""
              name="emotionId"
              id="emotionId"
              onChange={this.handleFieldChange}
            >
              <option value="">Select Emotion</option>
              {this.props.emotions.map(evt => (
                <option key={evt.id} value={evt.id}>
                {evt.emotionName}
                </option>
              ))}
            </select>
            </div>

          <div className="form-group">
            <label htmlFor="dueDate">Completion Date:  </label>
            
            <Input className="form-control"
              type="date"
              required
              name="dueDate"
              id="dueDate"
              onChange={this.handleFieldChange}
              />
          </div>
              
          <div className="form-group">
            <label htmlFor="task">Task:  </label>
            
            <Input className="form-control"
              type="text"
              required 
              name="task" 
              id="task" 
              placeholder="task"
              className="task-input"
              onChange={this.handleFieldChange}
              />
          </div>
            
          <div className="form-group">
            <button 
              type="submit"
              className="add-form-btn"
              onClick={this.constructNewTask}
              id="add-form-btn"
            >Save
            </button>

            <button className="clearFormBtn"
              type="submit"
              className="clear-form-btn"
              onClick={this.clearForm}
              id="clear-form-btn"
            >Clear
            </button>
          </div>
        </Form>
        </div>
        {/* End of div bottomTasks */}
      </div>
      {/* End of div addTaskContainer */}
      </React.Fragment>
    )
  }
}