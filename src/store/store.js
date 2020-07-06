import { combineReducers, createStore } from 'redux';

import { timerReducer } from './timer/reducers';

const rootReducer = combineReducers({
  timer: timerReducer
});

const store = createStore(rootReducer);

export default store;