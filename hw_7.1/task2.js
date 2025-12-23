function reduceNumberToZero(num) {
    console.log(num);
    if (num === 0)
        return;
    else
        return reduceNumberToZero(num - 1);
};

reduceNumberToZero(5);