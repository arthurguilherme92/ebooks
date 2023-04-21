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
// Form 2 - With Initial Value
const sum2 = numbers.reduce(function(acumulator, actualValue) {
    console.log(acumulator, actualValue);
    return acumulator + actualValue
}, 12);
console.log("Now, with initial value", sum2);


/* Study better this topic after!


console.log('________________Compose______________');
const add = x => x + 1;

const multiply = x => x * 2;

const testCompose = (func1, func2) => {
    return function(value) {
        return func1(func2(value));
    };
};

console.log(testCompose(2));*/

console.log('________________Recursion______________');
function factorial(n) {
    if(n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    };
};

console.log(factorial(6))

console.log('________________Currying______________');
const add = x => y => x + y;
let increment = add(1);
console.log(increment(2));

// p.586 fibonacci