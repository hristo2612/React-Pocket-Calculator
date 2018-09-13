import React from 'react';
import PropTypes from 'prop-types';

import './Result.css';

class Result extends React.Component {
  render() {
    return (
      <div className="Result">{this.props.result}</div>
    );
  }
}

Result.propTypes = {
  result: PropTypes.string
}

export default Result;