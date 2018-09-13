import React from 'react';
import PropTypes from 'prop-types';

import Result from './Result';

import './ResultPanel.css';

class ResultPanel extends React.Component {
  render() {
    return (
      <div className="ResultPanel">
        <Result result={this.props.result} />
      </div>
    );
  }
}

ResultPanel.propTypes = {
  result: PropTypes.string
}

export default ResultPanel;