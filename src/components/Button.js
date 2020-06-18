import React from 'react';
import propTypes from 'prop-types';


const Button = ( props ) => {

  return(
    <button onClick={props.onClick}
            type="button"
            color={props.color}
            style={{ backgroundColor: props.color,
                    width: (props.width === true ? '50%' : '25%')
                  }}
    >
      {props.name}
    </button>
  );
}

Button.defaultProps = {
  name: null,
  onClick: null,
  color: '#9a9a9a',
  wide: true,
}

Button.propTypes = {
  name: propTypes.string.isRequired,
  onClick: propTypes.func,
  color: propTypes.string,
  wide: propTypes.bool,
};
export default Button;
