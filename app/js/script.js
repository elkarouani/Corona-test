// Better they be constants
const FIRST_NUMBER = 1;
const SECOND_NUMBER = 2;

// named function
function sum_two_numbers(x,y) {
    return x+y;
}
console.log(sum_two_numbers(x,y));

// anonymous function mixing with arrow function
console.log( ( (x, y) => x + y )(x, y) )

console.log('it works');
console.log("changed");
