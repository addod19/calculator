

const Calculate = (data = {}, btnName) => {
    let { total, next, operation } = data;

    if (btnName === '+/-') {
        total *= -1;
        next *= -1;
        return total;
    }


    return(
        {
            total,
            next,
            operation
        }
    )
}

export default Calculate;