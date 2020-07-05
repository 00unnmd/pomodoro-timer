import React from 'react';
import useTimerControl from '../../hooks/timerControl/useTimerControl';

import './Timer.scss';

const Timer = () => {
  const { activeTime, cycle } = useTimerControl();
  const status = cycle === 'work' ? 'Рабочая сессия' : 'Перерыв';

  return (
    <div className='timer'>
      <h1 className='timer__count'>{`${activeTime.minutes}:${activeTime.seconds}`}</h1>
      <span className='timer__title'>{status}</span>
    </div>
  );
};

export default Timer;