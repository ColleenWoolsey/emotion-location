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
        <FormGroup>
          <Label for="emotion__name">Select Emotion</Label>
          <Input type="select" name="emotionName" id="emotion__name">
            <option>Emotion 1</option>
            <option>Emotion 2</option>
            <option>Emotion 3</option>
            <option>Emotion 4</option>
            <option>Emotion 5</option>
            <option>Emotion 6</option>
            <option>Emotion 7</option>
            <option>Emotion 8</option>
          </Input>
        </FormGroup>

        {' '}
        <FormGroup>
          <Label for="due__date">Completion Date</Label>
          <Input
            type="date"
            name="dueDate"
            id="due__date"
          />
        </FormGroup>

        {' '}
        <FormGroup>
          <Label for="task">Task</Label>
          <Input type="text" name="task" id="task" placeholder="task"/>
        </FormGroup>

        {' '}
        <Button
            type="submit"
            onClick={this.constructNewTask}
            className="btn"
          >          
            Submit
        </Button>

      </Form>
      </React.Fragment>
    )
  }
}