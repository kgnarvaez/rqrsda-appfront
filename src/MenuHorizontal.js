import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Division_pags.css';
import NouveauEmploye from './nouveauEmploye';



class MenuHorizontal extends Component{



    render(){ 
        return (
        <div className="Division-navBar">
            <ul className="Division-navBar ul">
                <li id="Employes" ><a href="#Employes">Employes</a>
                    <ul>
                        <li><Link to="/modifiEmploye">Modification Employe</Link></li>
                        <li><Link to="/NouveauEmploye">Registre Employe</Link></li>
                        <li><Link to="/eliminEmploye">Eliminer Employe</Link></li>
                    </ul>
                </li>
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
                <li id="Rapport"><a href="#about">Rapports</a>
                    <ul>
                        <li id="news" className =".Division-navBar ul ul li"><a href="#news">Karol</a></li> 
                        <li id="news"><a href="#news">Jorge</a></li>  
                    </ul>
                </li>
            </ul>
        </div>

    
);
}  

}
export default MenuHorizontal;