const numbers = [1, 2, 3, 4, 5];
console.log(`Matrix is [${numbers}]`);
console.log('________________Map______________');

const squares = numbers.map(n => n* n);
console.log(squares);

console.log('________________Filter______________');

const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log(evenNumbers);

console.log('________________Reduce______________');

//Form 1 - Without Initial Value
const sum = numbers.reduce(function(acumulator, actualValue) {
    return acumulator + actualValue;
});
console.log("Without Initial Value", sum);
