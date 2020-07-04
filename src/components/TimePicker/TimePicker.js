import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './TimePicker.scss';

const TimePicker = props => {
  const [inputVal, setInputVal] = useState(props.default);

  const DataListArr = () => {
    //creating an array for option list
    let optionArr = [];
    for (let i = props.min; i <= props.max; i++) {
      optionArr.push(i);
    };

    return (
      <datalist id={props.title}>
        {optionArr.map(item => (
          <option value={item} label={item} key={item}></option>
        ))}
      </datalist>
    );
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
        onChange={(e) => {
          setInputVal(e.target.valueAsNumber);
          props.onChange(e.target.valueAsNumber);
        }}
        disabled={props.disabled}
        list={props.title}
      />
      <DataListArr />
    </div>
  );
};

export default TimePicker;

TimePicker.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  default: PropTypes.number,
  disabled: PropTypes.bool,
};