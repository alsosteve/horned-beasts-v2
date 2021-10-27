import React, { Component } from 'react';
import Header from './components/Header.js';
import Main from './components/Main';
import Footer from './components/Footer.js';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}