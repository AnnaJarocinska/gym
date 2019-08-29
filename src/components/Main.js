import React from 'react';
import { Hashrouter, Switch, Route } from 'react-router-dom';

import Offer from './Offer';
import Schedule from './Schedule';
import Description from './Description';
import Trainers from './Trainers';
import Contact from './Contact';
import Home from './Home';

const Main = () => {
    return (
        <Hashrouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Offer" component={Offer} />
                <Route path="/Schedule" component={Schedule} />
                <Route path="/Description" component={Description} />
                <Route path="/Trainers" component={Trainers} />
                <Route path="/Contact" component={Contact} />
            </Switch>
        </Hashrouter>
    );
}

export default Main;