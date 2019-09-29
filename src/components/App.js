import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BattlePage from "../pages/battle-page";

const App = () => {
    return (
        <Switch>
            <Route
                path="/"
                component={BattlePage}
                exact />
        </Switch>
    );
};

export default App;
