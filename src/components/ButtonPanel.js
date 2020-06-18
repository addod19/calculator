import React from 'react';

import Button from './Button';


const ButtonPanel = () => {
  const group1 = ['AC', '+/-', '%', '÷'];
  const group2 = ['7', '8', '9', 'X'];
  const group3 = ['3', '4', '5', '-'];
  const group4 = ['1', '2', '3', '+'];
  const group5 = ['0', '.', '='];

  const buttonGroups = group => group.map(button => ((button)
    ? <Button name={button} key={button} />
    : <Button name={button} key={button} />
  ));

  return (

    <div className="calculatorPanel bPanel-width">
      <div className="group1">
        { buttonGroups(group1)}
      </div>
      <div className="group2">
        { buttonGroups(group2)}
      </div>
      <div className="group3">
        { buttonGroups(group3)}
      </div>
      <div className="group4">
        { buttonGroups(group4)}
      </div>
      <div className="group5">
        { buttonGroups(group5)}
      </div>
    </div>
  );
};

export default ButtonPanel;
