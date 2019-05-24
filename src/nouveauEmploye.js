import React, { Component } from 'react';
import CabeceraPags from'./CabeceraPags.js';
import PiePagina from './PiePagina.js';
import Titulo from './Titulo';
import './App.css';
import { ButtonBackToHome } from './buttonHome.js';


class NouveauEmploye extends Component { 
    constructor(props){
        super(props);
        this.state = {
            prenom : '',
            nom : '',
            courriel: '',
            role: '',
            active: false
    
        }
       }
    render() {
        return (
           <div>
            <div> 
                <CabeceraPags/>  
            </div>
            <div>
                  <p className="Label"> Formulaire de registre des nouveaux Employes</p>
            </div>
            <div>
                <form className="form-2" onSubmit= {this.handleSubmit}>
                    <div>
                        <p className="field">
                            <label> Prenom:</label>
                            <input type="text" 
                            ref="prenom" 
                            placeholder="Prenom"
                            value={this.state.prenom}
                            onChange={evt => this.setState({ prenom: evt.target.value })}/>

                            <label>  Nom de Famille:</label>
                            <input type="text"
                            ref="nom" 
                            placeholder="Nom de famille"
                            onChange={evt => this.setState({ nom: evt.target.value })}/> 
                    
                        </p>
                        <p>
                            
                            
                            <label>Courriel Electronique:</label>
                            <input type="text"
                            ref="courriel" 
                            placeholder="Courriel Electronique"
                            onChange={evt => this.setState({ courriel: evt.target.value })}/> 


                            <label>Rôle:</label>
                            <input type="text"
                            ref="courriel" 
                            placeholder="Rôle"
                            onChange={evt => this.setState({ role: evt.target.value })}/> 
                    </p>
                    <p > 
                        <button> Registre
                        </button>
                    </p>
                </div>
            </form>
            <div> 
                <PiePagina top={"90%"}/>  
            </div>
        </div>
        <div>
              <ButtonBackToHome/>
        </div>
       
          </div>
        );
      }
    }
  
export default NouveauEmploye;
  