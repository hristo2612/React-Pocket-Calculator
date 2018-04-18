import React from 'react';
import PropTypes from 'prop-types';

import './Result.css';

class Result extends React.Component {
  render() {
    return (
      <div>{this.props.value}</div>
    );
  }
}

Result.propTypes = {
  value: PropTypes.string
}

export default Result;