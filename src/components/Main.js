import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import Offer from './Offer';
import Schedule from './Schedule';
import Description from './Description';
import Trainers from './Trainers';
import Contact from './Contact';
import Home from './Home';

const Main = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path={process.env.PUBLIC_URL + "/Offer"} component={Offer} />
                <Route path="/Schedule" component={Schedule} />
                <Route path="/Description" component={Description} />
                <Route path="/Trainers" component={Trainers} />
                <Route path="/Contact" component={Contact} />
            </Switch>
        </HashRouter>
    );
}

export default Main;