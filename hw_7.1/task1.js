function handleNum(num, handleEvenCb, handleOddCb) {
    if (num % 2 === 0)
        handleEvenCb();
    else
        handleOddCb();
};

function handleEven() {
    console.log('number is even');
};

function handleOdd() {
    console.log('number is odd');
};

handleNum(2, handleEven, handleOdd);
handleNum(1, handleEven, handleOdd);