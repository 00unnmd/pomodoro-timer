import React from 'react';
import useBreaktime from '../../hooks/breakTime/useBreakTime';
import useWorkTime from '../../hooks/workTime/useWorkTime';

const Timer = () => {
  const { breakTime } = useBreaktime();
  const { workTime } = useWorkTime();

  return (
    <div>
      <h1>Время перерыва {breakTime}</h1>
      <h1>Время работы {workTime}</h1>
    </div>
  );
};

export default Timer;