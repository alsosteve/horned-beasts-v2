import { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import HornedBeast from './HornedBeast';
import '../css/Main.css';

export default class Main extends Component {


  render() {
    return(
      <>
      <h2>
        Look at these horns!
      </h2>
      <Container id="mainContainer">
        <Row xs={1} sm={2} md={3} lg={4}>
          {this.props.beastBios.map(beast => (
            <HornedBeast beast={beast} changeBeast={this.props.changeBeast} showModal={this.props.showModal}/>
          ))}
        </Row>
      </Container>
      </>
    )
  }
}
