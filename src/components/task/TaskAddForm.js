import React from 'react';
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
    console.log(evt.target.id, evt.target.value);
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
      <Form inline autoComplete="off">
      <div className="form-group">

        <label htmlFor="emotionId" sm={2} size="lg">Emotion</label>
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
      <br></br>
      <br></br>
       
        <div className="form-group">
          <label htmlFor="dueDate">Completion Date</label>
          <Input className="form-control"
            type="date"
            required
            name="dueDate"
            id="dueDate"
            onChange={this.handleFieldChange}
            />
        </div>
        <br></br>
        <br></br>
          
        <div className="form-group">
          <label htmlFor="task">Task</label>
          <Input className="form-control"
            type="text"
            required 
            name="task" 
            id="task" 
            placeholder="task"
            onChange={this.handleFieldChange}
            />
        </div>
        <br></br>
        <br></br>
        
        <div className="form-group">
          <button
            type="submit"
            className="add-form-btn"
            onClick={this.constructNewTask}
            id="add-form-btn"
          >Save
          </button>
          <br></br>
          <br></br>

          <button
            type="submit"
            className="btn"
            onClick={this.clearForm}
            id="clear-form-btn"
          >Clear
          </button>
        </div>
      </Form>
      </React.Fragment>
    )
  }
}