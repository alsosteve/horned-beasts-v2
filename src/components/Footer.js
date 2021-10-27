import {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import '../css/Footer.css';

export default class Footer extends Component {
  render() {
    return(
      <Navbar expand="lg" bg="dark" variant="dark" id="navbarFooter">
         <Navbar.Brand>Author: Steve Ngo</Navbar.Brand>
      </Navbar>
    )
  }
}
