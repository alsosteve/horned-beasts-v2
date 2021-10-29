import { Component } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel'

export default class HornForm extends Component {
  render() {
    return (
      <Form>
        <FloatingLabel controlId="floatingSelect" label="Works with selects">
          <Form.Select aria-label="Floating label select example">
            <option>Select the amount of horns you want to see.</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="100">A lot</option>
            <option value="all">All</option>
          </Form.Select>
        </FloatingLabel>
      </Form>
    )
  }
}