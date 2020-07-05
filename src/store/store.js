import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { timerReducer } from './timer/reducers';

const rootReducer = combineReducers({
  timer: timerReducer
});

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;