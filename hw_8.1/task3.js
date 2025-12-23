const numbers = [10, 20, 30, 40, 50];

const result = numbers.reduce((acc, curVal) => {
    return acc + curVal;
}, 0);

console.log(result);