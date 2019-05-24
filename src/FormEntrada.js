import React, { Component } from 'react';
import './App.css';
import './Division_pags.css';
import logo from './logo_RQRSDA.png';
import Titulo from './Titulo';





class FormEntrada extends Component{
    constructor(props){
    super(props);
    this.state = {
        courriel : '',
        motPasse : '',
        formsError: {},
        isValid: false

    }
   }
   handleValidation (){
    let courriel = this.state.courriel;
    let motPasse = this.state.motPasse;
    let isValid = this.isValid;
    let formsError = {};

        if((!courriel) && (!motPasse)){
            formsError["courriel"] = "Il ne peut pas etre vide";
            formsError["motPasse"] = "Il ne peut pas etre vide";
            this.setState({formsError: formsError});
            return false;
          
        }
        else if(!motPasse){
            formsError["motPasse"] = "Il ne peut pas etre vide";
            this.setState({formsError: formsError});
            return false;
        }
        else if(!courriel) {
            formsError["motPasse"] = "Il ne peut pas etre vide";
            this.setState({formsError: formsError});
            return false;

        }
       // this.setState(isValid:true);
        isValid= true;
        return isValid;
   
   }
 

   async fetchPost(){
        const response = await fetch('http://localhost:3011/credential', {
                    method: "POST",
                    headers: {
                        Accept: 'application/json',
                                'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(this.state)})
                   //.catch(error => error);
    
        //const json = await response.json();
       // console.log("Log aysnc : " + response.status);
        return response;
         
    }       

    
    handleSubmit = async (e) => {
         e.preventDefault();
        if (this.handleValidation()){
            var respuesta = await this.fetchPost();
            if (respuesta.status === 200){
               console.log('si esta');
              this.props.history.push('/PagePrincipal') 
            }
            else{
                console.log(this.props.FormEntrada);
                this.props.history.push('/error') 
            }
            
            
        }else{
            alert("Le nom d'utilisateur ou le mot de passé n'est pas correct.");         
        }      
    } 
      
    render(){
       
        return (
 <div>
        <div>
            <Titulo/>
        </div>
        <div className="App-logo">
            <img src={logo} className="App-logo" alt="logo" /> 
        </div>
        <div>
            <form className="form-1" onSubmit= {this.handleSubmit}>
                <div>
                    <p className="field">
                        <input type="text" 
                        ref="courriel" 
                        placeholder="Courriel"
                        value={this.state.courriel}
                        onChange={evt => this.setState({ courriel: evt.target.value })}/>
                        <span style={{color: "red"}}>{this.state.formsError["courriel"]}</span>
                    </p>
                    <p  className="field">
                        <input type="text"
                        ref="motPasse" 
                        placeholder="Mot Passe"
                        onChange={evt => this.setState({ motPasse: evt.target.value })}/> 
                        <span style={{color: "red"}}>{this.state.formsError["motPasse"]}</span>
                    </p>
                    <p > 
                        <button> Login
                        </button>
                    </p>
                </div>
            </form>
        </div>
        </div>
        )
    }
}

export default (FormEntrada) ;