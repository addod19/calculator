import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ handleClick }) => {
  const group1 = ['AC', '+/-', '%', '÷'];
  const group2 = ['7', '8', '9', 'x'];
  const group3 = ['4', '5', '6', '-'];
  const group4 = ['1', '2', '3', '+'];
  const group5 = ['0', '.', '='];

  const terFunc = (button, group) => ((button === group[group.length - 1])
  // if the button is the last element in group
    ? (
      <Button
        name={button}
        key={button}
        wide={false}
        color="#ff8000"
        handleClick={handleClick}
      />
    ) // set the color
    : (
      <Button
        name={button}
        key={button}
        wide={false}
        handleClick={handleClick}
      />
    ));// default color

  const buttonGroups = group => group.map(button => (

    (button === '0') // If button is 0 set the width to 50%
      ? <Button name={button} key={button} wide handleClick={handleClick} />
      : terFunc(button, group)
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

ButtonPanel.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
export default ButtonPanel;
