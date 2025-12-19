function isEven(number) {
    if (number === Math.ceil(number)) {
        return number % 2 === 0;
    }
    return false;
}

console.log(isEven(2));
console.log(isEven(-1));
console.log(isEven(1,24));
console.log(isEven(-2));

