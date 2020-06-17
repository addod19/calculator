import React from 'react';

import PropTypes from 'prop-types';

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