//Spread
/*const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mixed = [...arr1, ...arr2];

console.log(mixed)
console.log("___________");

//Destructuring
const arthur = {
    n: "Arthur Guilherme",
    years: 31
};

const {n, years} = arthur;
console.log(arthur);
console.log(n, years);

const testArr = [2, 4, 6];
const [a, b, c] = testArr;

console.log(testArr);
console.log(c, b, a);
console.log("___________");

//Literal Improviment
const n = "Arthur";
const y = 31;
const person = {n, y};
console.log(person);
console.log(n, y);


//More about Spread
const numbers = [4, 3, 2];
function sum(a, b, c) {
    return a + b + c;
};

console.log(sum(...numbers));
class Person {
    constructor(n, y) {
    this.name = n;
    this.age = y;
    };

    sayHello() {
        console.log(`My name is ${this.name}, I am ${this.age} years old!`);
    };
};

const Arthur = new Person("Arthur Guilherme", 31);
console.log(typeof Arthur);
console.log(Arthur);

Arthur.sayHello();

class Student extends Person {
    constructor(n, y, m) {
        super(n, y);
        this.major = m;
    };

    sayHello() {
        super.sayHello();
        console.log(`I am studying ${this.major}`);
    };
};

const StudentArthur = new Student("Arthur Guilherme", 31, "Web Developer");
console.log(typeof StudentArthur);
console.log(StudentArthur);
StudentArthur.sayHello();
*/

//Modules ES6
