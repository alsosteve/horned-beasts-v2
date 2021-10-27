import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import beastBios from '../data.json';
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
          {beastBios.map(beast => (
            <HornedBeast beast={beast} />
          ))}
        </Row>
      </Container>
      </>
    )
  }
}
