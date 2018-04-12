import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../../logo.svg';

import './ResultPanel.css';

class ResultPanel extends Component {
  render() {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

ResultPanel.propTypes = {
  value: PropTypes.string
}

export default ResultPanel;