import React, { Component } from 'react';
import Header from './components/Header.js';
import Main from './components/Main';
import Footer from './components/Footer.js';
import Modal from './components/SelectedBeast';
import HornForm from './components/HornForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedBeast: {},
      modal: false,
    }
  }

  // function that changes the state of the selected beast
  changeBeast = (beast) => {
    this.setState({ selectedBeast: beast })
  }
  // function that changes showModal to true
  showModal = () => {
    this.setState({ modal: true })
    console.log("stuff");
  }

  hideModal = () => {
    this.setState({ modal: false })
    console.log("hide stuff");
  }

  render() {
    return (
      <div>
        <Header />
        <HornForm />
        <Main changeBeast={this.changeBeast} showModal={this.showModal}/>
        <Footer />
        <Modal beast={this.state.selectedBeast} hideModal={this.hideModal} showModal={this.state.modal}/>
      </div>
    )
  }
}