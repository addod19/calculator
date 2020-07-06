import Operate from './operate'; /* eslint prefer-const: "error" */

const Calculate = (data, btnName) => {
  let { total, next, operation } = data;
  const btnNums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const operators = ['+', '-', 'x', '÷'];

  if (btnName === '+/-') {
    total *= -1;
    next *= -1;
  }
  if (btnName === '=') {
    while (next !== null) {
      total = Operate(total, next, operation);
      next = null;
    }
  }
  if (btnName === 'AC') {
    total = null;
    next = null;
    operation = null;
  }

  if (btnName === '.') {
    if (!next.includes('.')) {
      next += btnName;
    }
  }

  if (btnName === '%') {
    total /= 100;
    next /= 100;
  }

  if (btnNums.includes(btnName)) {
    while (next === null) {
      next = '';
    }
    next += btnName;
  }

  if (operators.includes(btnName)) {
    while (next !== null && operation !== null) {
      total = Operate(total, next, operation);
      operation = btnName;
      next = null;
      operation = null;
    }
    while (next !== null) {
      total = next;
      next = null;
    }
    if (next == null || operation == null) {
      operation = btnName;
    }
  }

  return { total, next, operation };
};

export default Calculate;
