import React from 'react';
import {BrowserRouter as Router, NavLink, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import Offer from '../components/Offer';
import Schedule from '../components/Schedule';
import Description from '../components/Description';
import Trainers from '../components/Trainers';
import Contact from '../components/Contact';
import Home from '../components/Home';

import './App.css';

const App = () => {
    return ( 
        <Router>
<nav className="navbar navbar-dark bg-danger navbar-expand-md">
<div className="container">
<div className="navbar-header">
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainmenu"
 aria expanded="false" aria-label="rozwijane menu">
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
<Switch>
<Route path="/"exact component={Home}/>
<Route path="/Offer" component={Offer}/>
<Route path="/Schedule" component={Schedule}/>
<Route path="/Description" component={Description}/>
<Route path="/Trainers" component={Trainers}/>
<Route path="/Contact" component={Contact}/>
</Switch>
        </Router>
     );
}


export default App;
