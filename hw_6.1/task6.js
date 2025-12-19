function calculateRent(numberOfDays) {
    const costWithoutDiscount = 40 * numberOfDays;
    if (numberOfDays >= 7)
        return costWithoutDiscount - 50;

    if (numberOfDays >= 3)
        return costWithoutDiscount - 20;

    return costWithoutDiscount;
}

console.log(calculateRent(2));
console.log(calculateRent(3));
console.log(calculateRent(7));