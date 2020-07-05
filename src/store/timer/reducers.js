import {
  TOGGLE_TIMER,
  RESET_TIMER,
  UPDATE_TIME,
  SAVE_BREAK_TIME,
  SAVE_WORK_TIME,
  UPDATE_CYCLE_NAME
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
      let time = action.payload;
      return {
        ...state,
        activeTime: {
          minutes: time.minutes < 10 ? `0${time.minutes}` : time.minutes,
          seconds: time.seconds < 10 ? `0${time.seconds}` : time.seconds,
        }
      }
    case SAVE_BREAK_TIME:
      return {
        ...state,
        breakTime: action.payload
      }
    case SAVE_WORK_TIME:
      let workMinutes = action.payload;
      return {
        ...state,
        workTime: workMinutes < 10 ? `0${workMinutes}` : workMinutes,
        activeTime: {
          minutes: workMinutes < 10 ? `0${workMinutes}` : workMinutes,
          seconds: '00'
        }
      }
    case UPDATE_CYCLE_NAME:
      return {
        ...state,
        cycle: 'break',
      }
    default:
  }

  return state;
}