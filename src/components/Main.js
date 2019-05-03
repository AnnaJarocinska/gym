import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Offer from '../components/Offer';
import Schedule from '../components/Schedule';
import Description from '../components/Description';
import Trainers from '../components/Trainers';
import Contact from '../components/Contact';
import Home from '../components/Home';

const Main = () => {
    return (  
        <Switch>
        <Route path="/"exact component={Home}/>
        <Route path="/Offer" component={Offer}/>
        <Route path="/Schedule" component={Schedule}/>
        <Route path="/Description" component={Description}/>
        <Route path="/Trainers" component={Trainers}/>
        <Route path="/Contact" component={Contact}/>
        </Switch> 
    );
}
 
export default Main;