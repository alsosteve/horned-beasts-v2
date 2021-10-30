import React, { Component } from 'react';
import Header from './components/Header.js';
import Main from './components/Main';
import Footer from './components/Footer.js';
import Modal from './components/SelectedBeast';
import HornForm from './components/HornForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import allBios from './data.json';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      beastBios: allBios,
      selectedBeast: {},
      modal: false,
    }
  }

  handleChange = (event) => {
    let selection = event.target.value;
    let newBios;
    if (selection === "all") {
      this.setState({ beastBios: allBios })
    } else {
      newBios = allBios.filter(beast => {
        return (beast.horns === parseInt(selection));
      });
      this.setState({ beastBios: newBios })
    }
  }

  // function that changes the state of the selected beast
  changeBeast = (beast) => {
    this.setState({ selectedBeast: beast })
  }
  // function that changes showModal to true
  showModal = () => {
    this.setState({ modal: true })
  }

  hideModal = () => {
    this.setState({ modal: false })
  }

  render() {
    return (
      <div>
        <Header />
        <HornForm handleChange={this.handleChange}/>
        <Main beastBios={this.state.beastBios} changeBeast={this.changeBeast} showModal={this.showModal}/>
        <Footer />
        <Modal beast={this.state.selectedBeast} hideModal={this.hideModal} showModal={this.state.modal}/>
      </div>
    )
  }
}