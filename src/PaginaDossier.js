import React, { Component } from 'react';
import CabeceraPags from'./CabeceraPags.js';
import MenuHorizontal from './MenuHorizontal.js';
import PiePagina from './PiePagina.js';


class PaginaDossier extends Component { 
    render() {
      return (
         <div>
           <div>
            <CabeceraPags />
           </div>
          <div>
              <MenuHorizontal />
          </div>
          <div>
              <PiePagina />
          </div>        
        </div>
      );
    }
  }
  
export default PaginaDossier;
  