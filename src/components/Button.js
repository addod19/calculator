import React from 'react';
import propTypes from 'prop-types'

const Button = ({ name, onClick}) => {

    return(
        <button onClick={onClick}>
            {name}
        </button>
    );
}

Button.propTypes = {
    name: propTypes.string.isRequired,
    onClick: propTypes.string
}
export default Button;