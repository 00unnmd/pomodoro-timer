export const SAVE_WORK_TIME = 'SAVE_WORK_TIME';

export const workTimeSaver = (time) => ({
  type: SAVE_WORK_TIME,
  payload: time
});