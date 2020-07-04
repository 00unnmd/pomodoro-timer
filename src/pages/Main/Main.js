import React from 'react';
import useBreakTime from '../../hooks/breakTime/useBreakTime';
import useWorkTime from '../../hooks/workTime/useWorkTime';
import TimePicker from '../../components/TimePicker/TimePicker';

import './Main.scss';

const WorkBreakPickers = () => {
  const { saveBreakTime } = useBreakTime();
  const { saveWorkTime } = useWorkTime();

  return (
    <div className='timepicker container'>
      <TimePicker
        title='Время перерыва между рабочими сессиями'
        min={0}
        max={10}
        default={5}
        onChange={saveBreakTime}
      />
      <TimePicker
        title='Время рабочей сессии'
        min={1}
        max={30}
        default={15}
        onChange={saveWorkTime}
      />
    </div>
  );
};

const Main = () => {
  return (
    <WorkBreakPickers />
  );
}

export default Main;