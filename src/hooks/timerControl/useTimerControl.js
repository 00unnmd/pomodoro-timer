import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import {
  timerToggler,
  timerReset,
  timerUpdate,
  breakTimeSaver,
  workTimeSaver,
  cycleNameUpdate,
  notificationToggler
} from '../../store/timer/actions';
import store from '../../store/store';

const useTimerControl = () => {
  const {
    isStarted,
    isPaused,
    breakTime,
    workTime,
    activeTime,
    cycle,
    notificationIsVisible
  } = useSelector(state => ({
    isStarted: state.timer.isStarted,
    isPaused: state.timer.isPaused,
    breakTime: state.timer.breakTime,
    workTime: state.timer.workTime,
    activeTime: state.timer.activeTime,
    cycle: state.timer.cycle,
    notificationIsVisible: state.timer.notificationIsVisible
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
          dispatch(timerUpdate({ minutes: breakTime, seconds: '00' }));
          dispatch(cycleNameUpdate());
          calculateTimer({ minutes: breakTime, seconds: '00' });
        }
        else {
          toggleNotification(true);
          resetTimer();
        }
      }
      else {
        duration = moment.duration(duration._milliseconds - interval, 'milliseconds');

        let minutes = duration._data.minutes < 10 ? `0${duration._data.minutes}` : duration._data.minutes;
        let seconds = duration._data.seconds < 10 ? `0${duration._data.seconds}` : duration._data.seconds;
        dispatch(timerUpdate({ minutes: minutes, seconds: seconds }));
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
    time = time < 10 ? `0${time}` : time;
    dispatch(breakTimeSaver(time));
  }
  const saveWorkTime = (time) => {
    time = time < 10 ? `0${time}` : time;
    dispatch(workTimeSaver(time));
  }

  const toggleNotification = (visibility) => {
    dispatch(notificationToggler(visibility));
  }

  return {
    isStarted,
    isPaused,
    breakTime,
    workTime,
    activeTime,
    cycle,
    notificationIsVisible,
    startTimer,
    pauseTimer,
    resetTimer,
    saveBreakTime,
    saveWorkTime,
    toggleNotification
  }
};

export default useTimerControl;