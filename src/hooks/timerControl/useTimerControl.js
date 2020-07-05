import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import {
  timerToggler,
  timerReset,
  timerUpdate,
  breakTimeSaver,
  workTimeSaver,
  cycleNameUpdate
} from '../../store/timer/actions';
import store from '../../store/store';

const useTimerControl = () => {
  const {
    isStarted,
    isPaused,
    breakTime,
    workTime,
    activeTime,
    cycle
  } = useSelector(state => ({
    isStarted: state.timer.isStarted,
    isPaused: state.timer.isPaused,
    breakTime: state.timer.breakTime,
    workTime: state.timer.workTime,
    activeTime: state.timer.activeTime,
    cycle: state.timer.cycle
  }));
  const dispatch = useDispatch();
  const intervalId = useRef(null);

  const calculateTimer = (time) => {
    var duration = moment.duration({
      minutes: time.minutes,
      seconds: time.seconds,
    });
    var interval = 1000;

    intervalId.current = setInterval(() => {
      if (duration._milliseconds === 0) {
        let upd_cycle = store.getState().timer.cycle;

        if (upd_cycle === 'work') {
          clearInterval(intervalId.current);
          dispatch(timerUpdate({ minutes: breakTime, seconds: '0' }));
          dispatch(cycleNameUpdate());
          calculateTimer({ minutes: breakTime, seconds: '00' });
        }
        else {
          resetTimer();
        }
      }
      else {
        duration = moment.duration(duration._milliseconds - interval, 'milliseconds');
        dispatch(timerUpdate({ minutes: duration._data.minutes, seconds: duration._data.seconds }));
      }
    }, interval);
  }

  const startTimer = () => {
    dispatch(timerToggler(true));
    calculateTimer(activeTime);
  }
  const pauseTimer = () => {
    dispatch(timerToggler(false));
    clearInterval(intervalId.current);
  }
  const resetTimer = () => {
    dispatch(timerReset());
    clearInterval(intervalId.current);
  }

  const saveBreakTime = (time) => {
    dispatch(breakTimeSaver(time));
  }
  const saveWorkTime = (time) => {
    dispatch(workTimeSaver(time));
  }

  return {
    isStarted,
    isPaused,
    breakTime,
    workTime,
    activeTime,
    cycle,
    startTimer,
    pauseTimer,
    resetTimer,
    saveBreakTime,
    saveWorkTime
  }
};

export default useTimerControl;