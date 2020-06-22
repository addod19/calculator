import Operate from './operate'; /* eslint prefer-const: "error" */

const Calculate = (data = {}, btnName) => {
  let { total, next } = data;
  const { operation } = data;
  if (btnName === '+/-') {
    total *= -1;
    next *= -1;
    return total;
  }

  return Operate(total, next, operation);
};

export default Calculate;
