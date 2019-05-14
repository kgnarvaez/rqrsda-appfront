import React, { Component } from 'react';
import './Division_pags.css';



class MenuHorizontal extends Component{
    render(){ 
        return (
        <div className="Division-navBar">
            <ul className="Division-navBar ul">
                <li id="Dossier" ><a href="#home">Dossiers</a></li>>
                <li id="Notes"><a href="#about">Notes d'observation</a></li>
                <li id="Rendez"><a href="#services">VS/ECG/CTS</a>
                    <ul>
                        <li id="news" ><a href="#news">Valeria</a></li> 
                        <li id="news"><a href="#news">Jorge</a></li>  
                    </ul>
                </li>
                <li id="Appels"><a href="#contact">Appels Téléphoniques</a>
                    <ul>
                        <li id="news" className =".Division-navBar ul ul li"><a href="#news">Karol</a></li> 
                        <li id="news"><a href="#news">Jorge</a></li>  
                    </ul>
                </li>
                <li id="Rapport"><a href="#about">Rapports</a></li>
            </ul>
        </div>

    
);
}  

}
export default MenuHorizontal;