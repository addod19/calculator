import React from 'react';
import propTypes from 'prop-types';

const Button = ({ name, onClick }) => (
  <button onClick={onClick} type="button">
    {name}
  </button>
);

Button.propTypes = {
  name: propTypes.string.isRequired,
  onClick: propTypes.string.isRequired,
};
export default Button;
