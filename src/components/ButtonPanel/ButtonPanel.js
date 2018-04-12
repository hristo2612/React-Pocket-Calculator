import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ButtonPanel.css';

import Button from './Button/Button';

class ButtonPanel extends Component {
  render() {
    return (
      <div>
        <Button value={"0"} />
        <Button value={"1"} />
        <Button value={"2"} />
        <Button value={"3"} />
        <Button value={"4"} />
      </div>
    );
  }
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func
}

export default ButtonPanel;