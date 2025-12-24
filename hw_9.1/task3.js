const car1 = {
    brand: 'Audi',
    model: 'TT',
    year: 2005
}

const car2 = {
    brand: 'Audi',
    model: 'Q7',
    owner: 'Some Owner'
}

const car3 = { ...car1, ...car2 };

console.log(car3);