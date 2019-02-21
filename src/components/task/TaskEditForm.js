import React from 'react';
import { Form, Input } from 'reactstrap';
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
        
        <div className="edit-task-container">
            
          <div className="edit-task-form">
            <Form inline autoComplete="off">

                <div className="emotion-select">
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
                {/* End of div emotion-select */}
                
                <div className="edit-due-date">
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
                {/* End of div due-date */}
                
                <div className="edit-task">
                  {/* <label htmlFor="task">Task:  </label> */}
                  <Input className="form-control"
                  type="text"
                  required 
                  name="task"
                  className="edit-task"
                  onChange={this.handleFieldChange}
                  id="task" 
                  value={this.state.task}
                  />
                </div>
                {/* End of div edit-task */}
                
                <div>
                  <button
                    type="submit"
                    className="edit-form-button"
                    onClick={this.updateExistingTask}
                    id="edit-form-btn"
                  >Update
                  </button>
                </div>
                {/* End of div edit-form-button */}
                
              </Form>

            </div>
            {/* End of div edit-task-form */}         
          </div>
        
      </React.Fragment>
    )
  }
}
