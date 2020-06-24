import React from 'react';
import Calculate from '../logic/calculate';

import Display from './Display';
import ButtonPanel from './ButtonPanel';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      nextVal: null,
      operation: null
    };

    this.buttonClick = this.buttonClick.bind(this);
  }

  render() {
    return(
      <div className="App common-width">
        <Display />
        <ButtonPanel />
      </div>
    )
  }
}
export default App;
