import { useSelector, useDispatch } from 'react-redux';
import { breakTimeSaver } from '../../store/break/actions';

const useBreakTime = () => {
  const { breakTime } = useSelector(state => ({
    breakTime: state.break.breakTime
  }))
  const dispatch = useDispatch();

  const saveBreakTime = (time) => {
    dispatch(breakTimeSaver(time));
  }

  return {
    breakTime,
    saveBreakTime
  }
};

export default useBreakTime;