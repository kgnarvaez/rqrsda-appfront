import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { useAsync } from "react-async"
import './App.css';
import './Division_pags.css';
import PagePrincipal from './PagePrincipal';
import { async } from 'q';



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

        if(!courriel){
            formsError["courriel"] = "Cannot be empty";
            this.setState({formsError: formsError});
            return false;
          
        }
        if(!motPasse){
            formsError["motPasse"] = "Cannot be empty";
            this.setState({formsError: formsError});
            return false;
        }
       // this.setState(isValid:true);
        isValid= true;
        return isValid;
   
   }

   async fetchPost(){
    const response = await fetch('http://localhost:3011/credential', {
                    crossDomain:true,
                    method: "POST",
                    mode: 'cors',
                    body: JSON.stringify(this.state),
                    headers: {
                        // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                            'Content-Type' : 'application/json'}
                    })
                    .then (res => res.statusText);
        if (!response.ok){
            return (response.statusText);
        }
        else{
            return response.json;
        }
         
    }       


    
    handleSubmit= (e) => {
        e.preventDefault();
        if (this.handleValidation()){
            var respuesta= this.fetchPost();
            console.log(respuesta.status);
            
        }else{
            alert("Le nom d'utilisateur ou le mot de passé n'est pas correct.");         
        }      
    } 
        
    render(){
       
        return (
            <form name="App-form" className="App-form" onSubmit= {this.handleSubmit.bind()}>
                <div>
                    <label>Courriel</label>
                    <div>
                        <input className = "" 
                        ref = "courriel"
                        type = "text"
                        value={this.state.courriel}
                        onChange={evt => this.setState({ courriel: evt.target.value })}/>
                        <span style={{color: "red"}}>{this.state.formsError["courriel"]}</span>
                    </div>
                    <label>Mot Passe </label>
                    <div>
                        <input className = "" 
                        ref = "mot passe"
                        type = "text"
                        onChange={evt => this.setState({ motPasse: evt.target.value })}/> 
                        <span style={{color: "red"}}>{this.state.formsError["motPasse"]}</span>
                    </div>
                    <div>
                        <button >connexion</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default FormEntrada;