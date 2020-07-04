export const SAVE_BREAK_TIME = 'SAVE_BREAK_TIME';

export const breakTimeSaver = (time) => ({
  type: SAVE_BREAK_TIME,
  payload: time
});