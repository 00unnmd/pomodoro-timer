import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { breakReducer } from './break/reducers';
import { workReducer } from './work/reducers';

const rootReducer = combineReducers({
  break: breakReducer,
  work: workReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;