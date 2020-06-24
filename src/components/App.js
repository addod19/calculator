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

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btnName) {
    const { result, nextVal, operation } = this.state;
    this.setState( Calculate({ result, nextVal, operation}, btnName) );
  }

  render() {
    const { result, nextVal } = this.state;
    return(
      <div className="App common-width">
        <Display />
        <ButtonPanel />
      </div>
    )
  }
}
export default App;
