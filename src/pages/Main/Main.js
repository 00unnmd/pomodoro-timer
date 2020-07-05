import React from 'react';

import useTimerControl from '../../hooks/timerControl/useTimerControl';

import TimePicker from '../../components/TimePicker/TimePicker';
import Timer from '../../components/Timer/Timer';
import CustomButton from '../../components/CustomButton/CustomButton';
import './Main.scss';

const WorkBreakPickers = () => {
  const { isStarted, saveBreakTime, saveWorkTime } = useTimerControl();

  return (
    <div className='timepicker'>
      <TimePicker
        title='Время перерыва между рабочими сессиями'
        min={0}
        max={10}
        default={5}
        onChange={saveBreakTime}
        disabled={isStarted}
      />
      <TimePicker
        title='Время рабочей сессии'
        min={1}
        max={30}
        default={15}
        onChange={saveWorkTime}
        disabled={isStarted}
      />
    </div>
  );
};

const StartStopButtons = () => {
  const { isPaused, startTimer, pauseTimer, resetTimer } = useTimerControl();

  return (
    <div className='custom-button'>
      <CustomButton
        variant='success'
        title={isPaused ? 'Старт' : 'Пауза'}
        handleOnClick={isPaused ? startTimer : pauseTimer}
      />
      <CustomButton
        variant='danger'
        title='Сброс'
        handleOnClick={resetTimer}
      />
    </div>
  );
};

const Main = () => {
  return (
    <div className='container main'>
      <WorkBreakPickers />
      <Timer />
      <StartStopButtons />
    </div>
  );
}

export default Main;