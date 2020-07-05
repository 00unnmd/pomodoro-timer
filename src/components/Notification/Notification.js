import React, { useState, useEffect } from 'react';
import useTimerControl from '../../hooks/timerControl/useTimerControl';
import CustomButton from '../CustomButton/CustomButton';

import './Notification.scss';

const NotificationContent = () => {
  const { breakTime, workTime, toggleNotification } = useTimerControl();
  const [workMin] = useState(workTime);
  const [breakMin] = useState(breakTime)

  useEffect(() => {
    setTimeout(() => {
      toggleNotification(false);
    }, 5000);
  }, [])

  return (
    <div className='notification'>
      <CustomButton
        variant='light'
        title='x'
        handleOnClick={() => { toggleNotification(false) }}
        className='notification__close'
      />
      <h5 className='notification__title'>
        {`Цикл с рабочей сессией в ${workMin}:00 и перерывом в ${breakMin}:00 завершен.`}
      </h5>
    </div>
  );
}

const Notification = () => {
  const { notificationIsVisible } = useTimerControl();

  return (
    notificationIsVisible ? <NotificationContent /> : null
  );
}

export default Notification;