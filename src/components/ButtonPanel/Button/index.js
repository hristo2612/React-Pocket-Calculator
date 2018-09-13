import React from 'react';
import './Button.css'
import PropTypes from 'prop-types';

export const Button = ({ name, clickHandler }) => {

  if (name && clickHandler) {
    return (
      <span>
        <button className="Button" onClick={() => {clickHandler(name)}}>{name}</button>
      </span>
    );
  }
  
  return (
    <span>
      <button className="Button"><br/></button>
    </span>
  )
  
}

Button.propTypes = {
  clickHandler: PropTypes.func,
  name: PropTypes.string
}

export default Button;