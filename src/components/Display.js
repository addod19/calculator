import React from 'react';
import propTypes from 'prop-types';

const Display = ({ total, next, operation }) => (
  <div className="Display common-width">
    <div className="result">
      { total }
      { ' ' }
      { operation }
      { ' ' }
      { next }
      { ' ' }
    </div>
  </div>
);

Display.propTypes = {
  total: propTypes.string,
  next: propTypes.string,
  operation: propTypes.string
};

Display.defaultProps = {
  total: '0',
  next: '',
  operation: ''
};

export default Display;
