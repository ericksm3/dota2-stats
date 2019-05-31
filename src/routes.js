import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main'
import Hero from './pages/hero';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}></Route>
            <Route path="/hero/:id" component={Hero}></Route>
        </Switch>
    </BrowserRouter>
)

export default Routes;