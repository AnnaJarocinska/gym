import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Offer from './Offer';
import Schedule from './Schedule';
import Description from './Description';
import Trainers from './Trainers';
import Contact from './Contact';
import Home from './Home';

const Main = () => {
    return (
        
            <Switch>
                <Route path={process.env.PUBLIC_URL + "/"} exact component={Home} />
                <Route path={process.env.PUBLIC_URL + "/Offer"} component={Offer} />
                <Route path={process.env.PUBLIC_URL + "/Schedule"} component={Schedule} />
                <Route path={process.env.PUBLIC_URL + "/Description"} component={Description} />
                <Route path={process.env.PUBLIC_URL + "/Trainers"} component={Trainers} />
                <Route path={process.env.PUBLIC_URL + "/Contact"} component={Contact} />
            </Switch>

    );
}

export default Main;