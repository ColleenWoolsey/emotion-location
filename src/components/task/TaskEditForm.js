import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import TaskManager from "../../modules/TaskManager";

export default class TaskEditForm extends React.Component {
        
state = {
    userId: 2,
    emotionId: "",
    emotionName: "",
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
    console.log("evt.target.id",evt.target.id);
    console.log("evt.target.value", evt.target.value);
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
};

updateTask = evt => {
    evt.preventDefault()

    const existingTask = {
        id: this.state.id,
        userId: this.state.userId,
        emotionId: this.state.emotionId,
        emotionName: this.state.emotionName,
        dueDate: this.state.dueDate,
        task: this.state.task,
        completion: this.state.completion      
    }

    console.log("updateTask from TaskEditForm", existingTask);
    
    this.props.updateTask(this.props.match.params.id, existingTask)
    .then(() => this.props.history.push("/edit/task/:id"))
  }     
 
  componentDidMount() {
    TaskManager.get(this.props.match.params.id)
    .then(task => {
      console.log("task", task)
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
        <label htmlFor="emotionId">{this.state.emotionId}</label>
          <select
            name="emotionId"
            id="emotionId"
            onChange={this.handleFieldChange}
          >
          {/* <option value="">{this.state.emotionName}</option> */}
          <option>{this.state.emotionName}</option>
          {this.props.emotions.map(evt => (
            <option key={evt.id} value={evt.id}>
            {evt.emotionName}
            </option>
          ))}
          </select>
        </div>

        {/* {' '} */}
        <div className="form-group">
          <label htmlFor="dueDate">{this.state.dueDate}</label>
          <Input className="form-control"
            type="date"
            required
            name="dueDate"
            id="dueDate"
            onChange={this.handleFieldChange}
            // value={this.state.dueDate}
            />
        </div>

        {/* {' '} */}
        <div className="form-group">
          <label htmlFor="task">Task</label>
          <Input className="form-control"
          // defaultValue={this.state.task}
          type="text"
          required 
          name="task"
          // placeholder="task"
          onChange={this.handleFieldChange}
          id="task" 
          // value={this.state.task}
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