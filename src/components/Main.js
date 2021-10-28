import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import beastBios from '../data.json';
import HornedBeast from './HornedBeast';
import Modal from './SelectedBeast';
import '../css/Main.css';

export default class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedBeast: {},
      showModal: false
    }
  }

  // function that changes the state of the selected beast
  changeBeast = (beast) => {
    this.setState({ selectedBeast: beast })
  }
  // function that changes showModal to true
  showModal = () => {
    this.setState({ showModal: true })
  }

  hideModal = () => {
    this.setState({ showModal: false })
  }

  render() {
    return(
      <>
      <h2>
        Look at these horns!
      </h2>
      <Container id="mainContainer">
        <Row xs={1} sm={2} md={3} lg={4}>
          {beastBios.map(beast => (
            <HornedBeast beast={beast} changeBeast={this.props.changeBeast} showModal={this.props.showModal}/>
          ))}
        </Row>
      </Container>
      <Modal beast={this.state.selectedBeast} hideModal={this.hideModal} show={this.state.showModal}/>
      </>
    )
  }
}
