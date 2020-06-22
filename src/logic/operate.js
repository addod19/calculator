import Big from 'big-js';

const Operate = (num1, num2, operation) => {
    const num1Val = Big(num1);
    const num2Val = Big(num2);
    let result = 0;

    switch(operation) {
        case '+':
            result = num1Val.plus(num2Val).toString();
            break;
        case '-':
            result = num1Val.minus(num2Val).toString();
            break;
        case '÷':
            if (num1Val.toString() === '0' || num2Val.toString() === '0') {
                result = "Can't divide by 0";
            } else {
                result = num1Val.div(num2Val).toString();
            }
            break;
        case 'x':
            result = num1Val.times(num2Val).toString();
            break;
        default:
            result = "Sorry, we can't manipulate the data";
    }
}

export default Operate;