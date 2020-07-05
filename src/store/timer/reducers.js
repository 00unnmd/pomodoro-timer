import {
  TOGGLE_TIMER,
  RESET_TIMER,
  UPDATE_TIME,
  SAVE_BREAK_TIME,
  SAVE_WORK_TIME,
  UPDATE_CYCLE_NAME,
  TOGGLE_NOTIFICATION
} from './actions';

const defaultState = {
  isStarted: false,
  isPaused: true,

  //minutes only
  breakTime: 5,
  workTime: 15,

  activeTime: {
    minutes: 15,
    seconds: '00',
  },

  cycle: 'work',

  notificationIsVisible: false
}

export const timerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_TIMER:
      //start timer
      if (action.payload) {
        return {
          ...state,
          isStarted: true,
          isPaused: false,
        }
      }
      //pause timer
      else {
        return {
          ...state,
          isPaused: true,
        }
      }
    case RESET_TIMER:
      return {
        ...state,
        isStarted: defaultState.isStarted,
        isPaused: defaultState.isPaused,
        activeTime: {
          minutes: state.workTime,
          seconds: '00'
        },
        cycle: defaultState.cycle
      }
    case UPDATE_TIME:
      return {
        ...state,
        activeTime: {
          minutes: action.payload.minutes,
          seconds: action.payload.seconds,
        }
      }
    case SAVE_BREAK_TIME:
      let breakMinutes = action.payload;
      return {
        ...state,
        breakTime: breakMinutes
      }
    case SAVE_WORK_TIME:
      return {
        ...state,
        workTime: action.payload,
        activeTime: {
          minutes: action.payload,
          seconds: '00'
        }
      }
    case UPDATE_CYCLE_NAME:
      return {
        ...state,
        cycle: 'break',
      }
    case TOGGLE_NOTIFICATION:
      return {
        ...state,
        notificationIsVisible: action.payload
      }
    default:
  }

  return state;
}