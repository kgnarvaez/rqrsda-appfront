import React, { Component } from 'react';
import {Route, Switch, BrowserRouter as Router  } from 'react-router-dom'
import PagePrincipal from './PagePrincipal';
import FormEntrada from './FormEntrada';
import NouveauEmploye from './nouveauEmploye';


class App extends Component { 
  render() {
    return (

    <div>  
      <div >
        <Router>
           <Switch>
              <Route exact path="/" component={FormEntrada} />
              <Route path="/PagePrincipal" component={PagePrincipal} />
              <Route path="/NouveauEmploye" component={NouveauEmploye} />
            </Switch>
        </Router>
      </div>       
    </div>
    );
  }
}

export default App;
