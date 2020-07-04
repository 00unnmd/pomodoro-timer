import React from 'react';
import useBreakTime from '../../hooks/breakTime/useBreakTime';
import useWorkTime from '../../hooks/workTime/useWorkTime';

import TimePicker from '../../components/TimePicker/TimePicker';
import Timer from '../../components/Timer/Timer';
import CustomButton from '../../components/CustomButton/CustomButton';
import './Main.scss';

const WorkBreakPickers = () => {
  const { saveBreakTime } = useBreakTime();
  const { saveWorkTime } = useWorkTime();

  return (
    <div className='timepicker'>
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

const StartStopButtons = () => {
  return (
    <div className='custom-button'>
      <CustomButton
        variant='success'
        title='Старт'
      //handleOnClick={} start cycle
      />
      <CustomButton
        variant='danger'
        title='Сброс'
      //handleOnClick={} stop and refresh cycle
      />
    </div>
  );
};

const Main = () => {
  return (
    <div className='container'>
      <WorkBreakPickers />
      <Timer />
      <StartStopButtons />
    </div>
  );
}

export default Main;