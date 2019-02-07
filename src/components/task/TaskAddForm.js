import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class TaskAddForm extends React.Component {
  render() {
    return (
      <Form inline>
        <FormGroup>
          <Label for="emotion__name">Select</Label>
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
          <Label for="due__date__time">Date and Time</Label>
          <Input
            type="datetime"
            name="dueDate"
            id="due__date__time"
            placeholder="datetime placeholder"
          />
        </FormGroup>
        {' '}
        <FormGroup>
          <Label for="task">Task</Label>
          <Input type="text" name="task" id="task" placeholder="task"/>
        </FormGroup>

        {' '}
        <Button>Submit</Button>

      </Form>
    )
  }
}