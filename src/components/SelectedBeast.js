import { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default class SelectedBeast extends Component {

  render() {
    return (
      <>
        <Modal
          show={this.props.showModal}
          onHide={this.props.hideModal}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.props.beast.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Card>
              <Card.Img variant="top" src={this.props.beast.image_url} alt={this.props.beast.description} />
              <Card.Body>
                <Card.Title>{this.props.beast.keyword}</Card.Title>
                <Card.Text>
                 {this.props.beast.description}
                </Card.Text>
                <Card.Text>Horns attached to this beast: {this.props.beast.horns}</Card.Text>
              </Card.Body>
            </Card>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}