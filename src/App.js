import React, { Component } from 'react';
import logo from './logo_RQRSDA.png';
import './App.css';
import FormEntrada from './FormEntrada';
import Titulo from './Titulo';



class App extends Component { 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Titulo/>
          <img src={logo} className="App-logo" alt="logo" /> 
          <FormEntrada />
        </header>
      </div>
    );
  }
}

export default App;
