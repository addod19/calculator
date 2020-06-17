import React, {Component} from 'react';
// import Big from './big.mjs';

import Display from './Display';
import ButtonPanel from './ButtonPanel';


class App extends Component {

    render() {
        return(
            <div className="wrapper">
                <Display />
                <ButtonPanel />
            </div>
        );
    }
}

export default App;