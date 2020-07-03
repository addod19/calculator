import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  color, name, wide, handleClick,
}) => (

  <button
    className="bold-size focus"
    onClick={() => handleClick(name)}
    type="button"
    style={{
      backgroundColor: color,
      width: (wide === true ? '50%' : '25%'),
    }}
  >
    {name}
  </button>
);

Button.defaultProps = {
  color: '#9a9a9a',
  wide: 1,
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};
export default Button;
