import React from 'react';
import PropTypes from 'prop-types';
import './ButtonPanel.css';

import Button from './Button/Button';

class ButtonPanel extends React.Component {

  constructor(props) {
    super(props);
  }

  handleClick = (buttonName) => {
    this.props.clickHandler(buttonName);
  }

  render() {
    return (
      <div>
        <div>
          <Button name={"AC"} clickHandler={this.handleClick} />
          <Button name={"+/-"} clickHandler={this.handleClick} />
          <Button name={"%"} clickHandler={this.handleClick} />
          <Button name={"÷"} clickHandler={this.handleClick} />
        </div>
        <div>
          <Button name={"4"} clickHandler={this.handleClick} />
          <Button name={"5"} clickHandler={this.handleClick} />
          <Button name={"6"} clickHandler={this.handleClick} />
          <Button name={"/"} clickHandler={this.handleClick} />
        </div>
        <div>
          <Button name={"7"} clickHandler={this.handleClick} />
          <Button name={"8"} clickHandler={this.handleClick} />
          <Button name={"9"} clickHandler={this.handleClick} />
          <Button name={"+"} clickHandler={this.handleClick} />
        </div>
        <div>
          <Button name={"7"} clickHandler={this.handleClick} />
          <Button name={"8"} clickHandler={this.handleClick} />
          <Button name={"9"} clickHandler={this.handleClick} />
          <Button name={"-"} clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func
}

export default ButtonPanel;