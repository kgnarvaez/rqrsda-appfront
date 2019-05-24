import React, { Component } from 'react';
import CabeceraPags from'./CabeceraPags.js';
import MenuHorizontal from './MenuHorizontal.js';
import PiePagina from './PiePagina.js';
import Content from './Content.js';


class PagePrincipal extends Component { 
    render() {
      return (
         <div>
           <div>
            <CabeceraPags />
           </div>          
          <div>
              <Content />
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
  
export default PagePrincipal;
  