const number = Math.ceil(Math.random(10) * 10);

console.log(number);

for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

console.log()

let counter = 1;
while(counter <= 10) {
    console.log(`${number} x ${counter} = ${number * counter}`);
    counter++;
}