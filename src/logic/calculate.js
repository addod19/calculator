import Operate from './operate';

const Calculate = (data = {}, btnName) => {
    let { total, next, operation } = data;

    if (btnName === '+/-') {
        total *= -1;
        next *= -1;
        return total;
    }


    return Operate(total, next, operation)
}

export default Calculate;