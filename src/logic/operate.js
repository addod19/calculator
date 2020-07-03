import Big from 'big-js';

const Operate = (num1, num2, operation) => {
  // const num1Val = Big(num1);
  // const num2Val = Big(num2);
  let result = 0;

  switch (operation) {
    case '+':
      result = Big(num1).plus(Big(num2)).toString();
      break;
    case '-':
      result = Big(num1).minus(Big(num2)).toString();
      break;
    case '÷':
      if (Big(num2).toString() === '0') {
        result = "Can't divide by 0";
      } else {
        result = Big(num1).div(Big(num2)).toString();
      }
      break;
    case 'x':
      result = Big(num1).times(Big(num2)).toString();
      break;
    case '%':
      result = Big(num1).mod(Big(num2)).toString();
      break;
    default:
      result = 'Sorry, invalid operator';
      break;
  }
  return result;
};

export default Operate;
