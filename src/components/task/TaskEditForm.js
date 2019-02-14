import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import TaskManager from "../../modules/TaskManager";
import "../emotion/List.css";

export default class TaskEditForm extends React.Component {
        
state = {
    userId: 2,
    emotionId: "",
    dueDate: "",
    task: "",
    complete: false
};

handleFieldChange = evt => {
    const stateToChange = {};
    console.log("evt.target.id",evt.target.id);
    console.log("evt.target.value", evt.target.value);
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
};

updateExistingTask = evt => {
    evt.preventDefault()

    const existingTask = {
      id: this.state.id,
      userId: Number(this.state.userId),
      emotionId: Number(this.state.emotionId),
      dueDate: this.state.dueDate,
      task: this.state.task,
      complete: this.state.complete     
    }

    console.log("updateExistingTask from TaskEditForm", existingTask);
    
    this.props.updateTask(this.props.match.params.id, existingTask)
    .then(() => this.props.history.push("/home"))
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
        complete: task.complete
      });
    });
  }

  render() {
    return (
      <React.Fragment>
      <Form inline>
      <div className="edit-form-group">
        <label htmlFor="emotionId">Emotion:  </label>
          <select
            value={this.state.emotionId}
            name="emotionId"
            id="emotionId"
            onChange={this.handleFieldChange}
          >
          
          <option>{this.state.emotionName}</option>
          {this.props.emotions.map(evt => (
            <option key={evt.id} value={evt.id}>
            {evt.emotionName}
            </option>
          ))}
          </select>
        </div>
        <br></br>
        <br></br>

        <div className="edit-form-group">
          <label htmlFor="dueDate">Due Date:  </label>
          <Input className="form-control"
            type="date"
            required
            name="dueDate"
            id="dueDate"
            onChange={this.handleFieldChange}
            value={this.state.dueDate}
            />
        </div>
        <br></br>
        <br></br>

        <div className="edit-form-group">
          <label htmlFor="task">Task:  </label>
          <Input className="form-control"
          // defaultValue={this.state.task}
          type="text"
          required 
          name="task"
          // placeholder="task"
          onChange={this.handleFieldChange}
          id="task" 
          value={this.state.task}
          />
        </div>
        <br></br>
        <br></br>

        <div className="edit-form-group">
            <button
              type="submit"
              className="btn"
              onClick={this.updateExistingTask}
              id="add-form-btn"
            >Update
            </button>
        </div>   
      </Form>
      </React.Fragment>
    )
  }
}