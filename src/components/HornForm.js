import { Component } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export default class HornForm extends Component {

  render() {
    return (
      <Form>
        <FloatingLabel controlId="floatingSelect" label="Select the amount of horns you want to see.">
          <Form.Select onChange={this.props.handleChange} aria-label="Floating label select example">
            <option value="all">All</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="100" >A lot</option>
          </Form.Select>
        </FloatingLabel>
      </Form>
    )
  }
}