import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Offer from './Offer';
import Schedule from './Schedule';
import Description from './Description';
import Trainers from './Trainers';
import Contact from './Contact';
import Home from './Home';
import Playlist from './Playlist';

const Main = () => {
    return (  
        <Switch>
        <Route path="/"exact component={Home}/>
        <Route path="/Offer" component={Offer}/>
        <Route path="/Schedule" component={Schedule}/>
        <Route path="/Description" component={Description}/>
        <Route path="/Trainers" component={Trainers}/>
        <Route path="/Contact" component={Contact}/>
        <Route path="/Playlist" component={Playlist}/>
        </Switch> 
    );
}
 
export default Main;