import React from 'react';
import './Main.scss';

import TimePicker from '../../components/TimePicker/TimePicker';

const WorkBreakPickers = () => {
  return (
    <div className='timepicker'>
      <TimePicker
        title='Время перерыва между рабочими сессиями'
        min={0}
        max={10}
        default={5}
      />
      <TimePicker
        title='Время рабочей сессии'
        min={1}
        max={30}
        default={15}
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