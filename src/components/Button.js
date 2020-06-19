import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const {
    onClick, color, wide, name,
  } = props;

  return (

    <button
      className="bold-size "
      onClick={onClick}
      type="button"
      style={{
        backgroundColor: color,
        width: (wide === true ? '50%' : '25%'),
      }}
    >
      {name}
    </button>
  );
};

Button.defaultProps = {
  color: '#9a9a9a',
  wide: 1,
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};
export default Button;
