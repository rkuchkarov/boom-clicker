import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app/App';
import ErrorBoundry from './components/error-boundry';
import BoomClickerSerivce from './services/boom-clicker-service';
import { BoomClickerServiceProvider } from "./boom-clicker-serivce-context";

import store from './store';
import { BrowserRouter as Router } from "react-router-dom";

const boomClickerService = new BoomClickerSerivce();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <BoomClickerServiceProvider value={boomClickerService}>
                <Router>
                    <App />
                </Router>
            </BoomClickerServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);