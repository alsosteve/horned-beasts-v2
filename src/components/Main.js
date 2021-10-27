import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import beastBios from '../data.json';
import HornedBeast from './HornedBeast';

export default class Main extends Component {
  render() {
    return(
      <Container>
        <h1>Look at these animals!</h1>
        <Row xs={1} sm={2} md={3} lg={4}>
          {beastBios.map((beast, index) => (
            <HornedBeast key={index} beast={beast} />
          ))}
        </Row>
      </Container>
    )
  }
}

