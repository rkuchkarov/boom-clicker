import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers';
import battleSaga from './sagas/battle.page';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(battleSaga);

export default store;