import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../css/BeastCard.css';


export default class HornedBeast extends Component {

  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    }
  }

  handleClick = () => {
    this.setState({
      likes: this.state.likes + 1
    });
  }

  handleClickModal = () => {
    this.props.changeBeast(this.props.beast);
    this.props.showModal();
  }

  render() {
    return (
      <Card id="beastCard" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.beast.image_url} alt={this.props.beast.description} />
        <Card.Body>
        <Card.Title>{this.props.beast.title}</Card.Title>
        <Card.Text>
          {this.props.beast.description}
         </Card.Text>
         <Button variant="primary" onClick={this.handleClick}>{'❤ '}{this.state.likes}</Button>
         <Button onClick={this.handleClickModal} variant="primary">{'Info'}</Button>
        </Card.Body>
      </Card>
    )
  }
}

