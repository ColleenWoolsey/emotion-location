import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import TaskManager from "../../modules/TaskManager";

export default class TaskEditForm extends React.Component {
        
state = {
    userId: 2,
    emotionId: "",
    dueDate: "",
    task: "",
    completion: false
};

// Update state whenever an input field is edited

// evt.target.id functions like an index number in
// the array. The target depends on the field with
// event listener

handleFieldChange = evt => {
    const stateToChange = {};
    console.log(evt.target.id, evt.target.value);
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
};

updateExistingTask = evt => {
    evt.preventDefault()
    const existingTask = {
        id: this.state.id,
        userId: this.state.userId,
        emotionId: this.state.emotionId,
        dueDate: this.state.dueDate,
        task: this.state.task,
        completion: this.state.completion      
    }

    console.log("updateExistingTask from TaskEditForm", existingTask);
    this.props.updateTask(this.props.match.params.taskId, existingTask)
    .then(() => this.props.history
    .push("/tasks/:taskId(\d+)"))
     
  }

  componentDidMount() {
    TaskManager.get(this.props.match.params.taskId)
    .then(task => {
      this.setState({
        id: task.id,
        userId: task.userId,
        emotionId: task.emotionId,
        dueDate: task.dueDate,
        task: task.task,
        completion: task.completion
      });
    });
  }

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
            value={this.state.task}
            />
        </div>

        {/* {' '} */}
        <div className="form-group">
            <Input className="form-control"
            type="text"
            required 
            name="task"
            // placeholder="task"
            onChange={this.handleFieldChange}
            id="task" 
            value={this.state.task}
            />
            </div>

        {/* {' '} */}
        <div>
            <button
              type="submit"
              className="btn"
              onClick={this.updateExistingEvent}
              id="add-form-btn"
            >Update
            </button>
        </div>   
      </Form>
      </React.Fragment>
    )
  }
}