import {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import '../css/Header.css';

export default class Header extends Component {
  render() {
    return(
      <Navbar expand="lg" bg="dark" variant="dark" id="navbarHeader">
         <Navbar.Brand>Horned Beasts</Navbar.Brand>
      </Navbar>
    )
  }
}
