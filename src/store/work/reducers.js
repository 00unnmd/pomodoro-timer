import { SAVE_WORK_TIME } from './actions';

const defaultState = {
  workTime: null,
}

export const workReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SAVE_WORK_TIME: {
      return {
        ...state,
        workTime: action.payload,
      }
    }
  }

  return state;
};