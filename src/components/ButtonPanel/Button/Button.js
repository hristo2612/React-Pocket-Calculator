import React from 'react';
import './Button.css'
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.clickHandler(this.props.name)
  }

  render() {
    return (
      <span>
        <button className="Button" onClick={this.handleClick}>{this.props.name}</button>
      </span>
    );
  }
}

Button.propTypes = {
  clickHandler: PropTypes.func,
  name: PropTypes.string
}

export default Button;