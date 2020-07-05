import React from 'react';
import useTimerControl from '../../hooks/timerControl/useTimerControl';

const Timer = () => {
  const { activeTime } = useTimerControl();

  return (
    <div>
      <h1>Время {`${activeTime.minutes}:${activeTime.seconds}`}</h1>
    </div>
  );
};

export default Timer;