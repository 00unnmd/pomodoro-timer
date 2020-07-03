import React, { useState } from 'react';
import './TimePicker.scss';

const TimePicker = props => {
  const [inputVal, setInputVal] = useState(props.default);

  const DataListArr = () => {
    //creating an array for option list
    let optionArr = [];
    for (let i = props.min; i <= props.max; i++) {
      optionArr.push(i);
    }

    return (
      <datalist id={props.title}>
        {optionArr.map(item => (
          <option value={item} label={item} key={item}></option>
        ))}
      </datalist>
    )
  }

  return (
    <div className='timepicker__item'>
      <label>{`${props.title}: ${inputVal} мин.`}</label>
      <input
        type='range'
        min={props.min}
        max={props.max}
        defaultValue={props.default}
        step={1}
        onChange={(e) => { setInputVal(e.target.valueAsNumber) }}
        disabled={props.disabled}
        list={props.title}
      />
      <DataListArr />
    </div>
  );
};

export default TimePicker;