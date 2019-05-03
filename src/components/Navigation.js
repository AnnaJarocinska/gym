import React from 'react';
import {NavLink} from 'react-router-dom'


const Navigation = () => {
    
    return ( 
        <nav className="navbar navbar default-navbar navbar-fixed-top navbar-dark bg-danger navbar-expand-md">
        <div className="container">
        <div className="navbar-header">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainmenu"
        aria-controls="mainmenu"
         aria expanded="false" aria-label="toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        </div>
        <div className="collapse navbar-collapse" id="mainmenu">
        <ul className="navbar-nav">
          <li className="nav-item " ><NavLink to="/"exact className="nav-link">Start</NavLink></li>
          <li className= "nav-item"><NavLink to="/Offer"className="nav-link" >Oferta</NavLink></li>
          <li className= "nav-item"><NavLink to="/Schedule"className="nav-link" >Grafik</NavLink></li>
          <li className= "nav-item" ><NavLink to="/Description" className="nav-link">Opis zajęć</NavLink></li>
          <li className= "nav-item"><NavLink to="/Trainers" className="nav-link">Trenerzy</NavLink></li>
          <li className= "nav-item"><NavLink to="/Contact" className="nav-link">Kontakt</NavLink></li>
        </ul>
        </div>
        </div>
        </nav>
        );
}
 
export default Navigation;