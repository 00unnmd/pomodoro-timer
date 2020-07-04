import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const CustomButton = (props) => {
  return (
    <Button
      variant={props.variant}
      size={props.size ? props.size : 'md'}
    //onClick={props.handleOnClick()}
    >{props.title}</Button>
  );
};

export default CustomButton;

CustomButton.propTypes = {
  variant: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleOnClick: PropTypes.func.isRequired,
  size: PropTypes.string,
};