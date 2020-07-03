import React from 'react';
import propTypes from 'prop-types';

const Display = ({ total }) => (
  <div className="Display common-width">
    <div className="result">
      { total }
    </div>
  </div>
);

Display.propTypes = {
  total: propTypes.string,
};

Display.defaultProps = {
  total: '0',
};

export default Display;
