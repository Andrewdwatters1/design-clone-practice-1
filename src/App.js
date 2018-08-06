import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Services from './components/Services';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar/>
      <div className="header-outer">
        <Header/>
        <Services/>
      </div>
    
        {/* 
        Nav
        Header
        Section
        Section
        Section
        Section
        Section
        Section
        Footer
           */}
      </div>
    );
  }
}

export default App;
