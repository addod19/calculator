import React from 'react';
import Calculate from '../logic/calculate';

import Display from './Display';
import ButtonPanel from './ButtonPanel';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      total: null,
      next: null,
      operation: null
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btnName) {
    const { total, next, operation } = this.state;
    this.setState( Calculate( { total, next, operation}, btnName) );
  }

  render() {
    const { total, next } = this.state;
    return(
      <div className="App common-width">
        <Display total={ total || next || '0'}/>
        <ButtonPanel handleClick={this.handleClick} />
      </div>
    )
  }
}
export default App;
