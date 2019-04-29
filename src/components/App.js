ggimport React from 'react';
import './App.css';
import {BrowserRouter as Router, NavLink, Switch, Route} from 'react-router-dom'
import Offer from '../components/Offer';
import Schedule from '../components/Schedule';
import Description from '../components/Description';
import Trainers from '../components/Trainers';
import Contact from '../components/Contact';
import Home from '../components/Home';

function App() {
  return (
    <Router>
<nav>
<ul>
  <li><NavLink to="/"exact>Start</NavLink></li>
  <li><NavLink to="/Offer">Oferta</NavLink></li>
  <li><NavLink to="/Schedule">Grafik</NavLink></li>
  <li><NavLink to="/Description">Opis zajęć</NavLink></li>
  <li><NavLink to="/Trainers">Instruktorzy</NavLink></li>
  <li><NavLink to="/Contact">Kontakt</NavLink></li>
</ul>
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
