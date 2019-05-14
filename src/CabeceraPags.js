import React, { Component } from 'react';
import './Division_pags.css';
import './App.css';
import Titulo from './Titulo';
import logo from './logo_RQRSDA.png';



class CabeceraPags extends Component { 
  render() {
    return (
      <div>
       <div className="Division-Header">
          <Titulo />
       </div>
 
          <img src={logo}  alt="logo"  className="Division-logo"/> 
         
      </div>
      
    );
  }
}

export default CabeceraPags;
