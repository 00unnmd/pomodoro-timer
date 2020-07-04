import { useSelector, useDispatch } from 'react-redux';
import { workTimeSaver } from '../../store/work/actions';

const useWorkTime = () => {
  const { workTime } = useSelector(state => ({
    workTime: state.work.workTime,
  }));
  const dispatch = useDispatch();

  const saveWorkTime = (time) => {
    dispatch(workTimeSaver(time));
  }

  return {
    workTime,
    saveWorkTime
  }
}

export default useWorkTime;