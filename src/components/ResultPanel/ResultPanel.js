import React from 'react';
import PropTypes from 'prop-types';

import Result from './Result/Result';

import './ResultPanel.css';

class ResultPanel extends React.Component {
  render() {
    return (
      <div className="ResultPanel">
        <Result value={this.props.value} />
      </div>
    );
  }
}

ResultPanel.propTypes = {
  value: PropTypes.string
}

export default ResultPanel;