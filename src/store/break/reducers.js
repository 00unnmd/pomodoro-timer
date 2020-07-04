import { SAVE_BREAK_TIME } from './actions';

const defaultState = {
  breakTime: 5,
}

export const breakReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SAVE_BREAK_TIME:
      return {
        ...state,
        breakTime: action.payload,
      }
    default:
  }

  return state;
};