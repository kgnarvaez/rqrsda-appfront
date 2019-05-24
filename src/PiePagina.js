import React, { Component } from 'react';
import './Division_pags.css';
import logo from './logo_pg.png';
import logo1 from './quebec.png';



class PiePagina extends Component{

    render(){ 
        return (
        <div>
            <div className= "Division-Footer" style={{ top:  this.props.top}}>
                <img src={logo}  alt="logo"  className="Division-logo-pg"/> 
                <img src={logo1}  alt="logo"  className="Division-logo-qc"/>  
            </div>   
               
        </div>
 
);
}  

}
export default PiePagina;