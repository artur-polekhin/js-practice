function rectangleSquare(width, height) {
    return width * height;
}

const rectangleSquareExpression = function (width, height) {
    return width * height;
}

const rectangleSquareArrow = (width, height) => {return width * height};

console.log(rectangleSquare(5, 10));
const resultExpression = rectangleSquare(5, 10);
console.log(resultExpression);
const resultArrow = rectangleSquareArrow(5, 10);
console.log(resultArrow);