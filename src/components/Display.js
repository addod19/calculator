import React from 'react';
// import styled from 'styled-components';

// import PropTypes from 'prop-types';

// const Result = styled.div`
//     width: 50%;
//     height: 3em;
//     backgroundColor: black;
//     color: white;
// `;

const Display = ( { result } ) => 
    (
        <div className="displayWrap">
            <div className="result">
                { result }
            </div>
        </div>
    );


// Display.propTypes = {
//     result: result.propTypes.string
// }

Display.defaultProps = {
    result: '0'
}

export default Display;