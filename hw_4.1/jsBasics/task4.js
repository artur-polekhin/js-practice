// 4.1
const radius = Math.ceil((Math.random() * 10));
const circleRadius = Number(((Math.PI * Math.pow(radius, 2)).toFixed(2)));

console.log(circleRadius);


// 4.2
const length = Math.ceil((Math.random() * 10));
const width = Math.ceil((Math.random() * 10));
const square = length * width;
console.log(square);

// 4.3
const cylinderRadius = Number(((Math.random() * 10) + 1).toFixed(2));
const cylinderHight = Number(((Math.random() * 10) + 1).toFixed(2));
const cylinderSquare = Number((Math.PI * Math.pow(cylinderRadius, 2) * cylinderHight).toFixed(2));
console.log(cylinderSquare);