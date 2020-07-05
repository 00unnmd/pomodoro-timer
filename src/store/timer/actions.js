export const TOGGLE_TIMER = 'TOGGLE_TIMER';
export const RESET_TIMER = 'RESET_TIMER';
export const UPDATE_TIME = 'UPDATE_TIME';
export const SAVE_BREAK_TIME = 'SAVE_BREAK_TIME';
export const SAVE_WORK_TIME = 'SAVE_WORK_TIME';
export const UPDATE_CYCLE_NAME = 'UPDATE_CYCLE_NAME';

export const timerToggler = (timerIsRunning) => ({
  type: TOGGLE_TIMER,
  payload: timerIsRunning
})

export const timerReset = () => ({
  type: RESET_TIMER
})

export const timerUpdate = (time) => ({
  type: UPDATE_TIME,
  payload: time
});

export const breakTimeSaver = (time) => ({
  type: SAVE_BREAK_TIME,
  payload: time
});

export const workTimeSaver = (time) => ({
  type: SAVE_WORK_TIME,
  payload: time
});

export const cycleNameUpdate = () => ({
  type: UPDATE_CYCLE_NAME
})