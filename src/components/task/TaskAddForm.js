import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
export default class TaskAddForm extends React.Component {
        
state = {
    userId: 2,
    emotionId: "",
    dueDate: "",
    task: "",
    completion: false
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
        userId: this.state.userId,
        emotionId: this.state.emotionId,
        dueDate: this.state.dueDate,
        task: this.state.task,
        completion: this.state.completion
    };

// Create the task and redirect user to task list
    this.props
        .addTask(task)
        .then(() => this.props.history.push("/"));
};

  render() {
    return (
      <React.Fragment>
      <Form inline>
      <div className="form-group">
        <select
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

        {/* {' '} */}
        <div className="form-group">
          <Input className="form-control"
            type="date"
            required
            name="dueDate"
            id="dueDate"
            onChange={this.handleFieldChange}
            />
        </div>

        {/* {' '} */}
        <div className="form-group">
            <Input className="form-control"
            type="text"
            required 
            name="task" 
            id="task" 
            placeholder="task"
            onChange={this.handleFieldChange}
            />
            </div>

        {/* {' '} */}
        <div>
            <button
              type="submit"
              className="btn"
              onClick={this.constructNewTask}
              id="add-form-btn"
            >Save
            </button>
            <button
              type="submit"
              className="btn"
              onClick={this.clearForm}
              id="add-form-btn"
            >Clear
            </button>
        </div>
        {/* <Button
            type="submit"
            onClick={this.constructNewTask}
            className="btn"
          >          
            Submit
        </Button> */}

      </Form>
      </React.Fragment>
    )
  }
}