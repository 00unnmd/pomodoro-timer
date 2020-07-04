import { SAVE_WORK_TIME } from './actions';

const defaultState = {
  workTime: 15,
}

export const workReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SAVE_WORK_TIME:
      return {
        ...state,
        workTime: action.payload,
      }
    default:
  }

  return state;
};