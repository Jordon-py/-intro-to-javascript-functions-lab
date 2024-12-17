/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers.
It sh
const isAdult = (x) => {
    if (x >= 21) {
        return 'Adult';
    else {
        return 'minor';
        }
    }
}


console.log('Exercise 2 Result:', isAdult(21));
*/


const isAdult = (x) => {
    if (x >= 18) {
        return 'Adult';
    } else {
        return 'Minor';
    }
}

console.log(isAdult(21)); // Adult
console.log(isAdult(16)); // Minor


/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings:
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com')
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/




/*
Function Definition:

It takes two parameters: name and domain.

Combining Name and Domain:

Use template literals (backticks `) and the name and domain with an @ symbol in between.
 you can use string concatenation with the + operator.

The function returns the combined string representing the email address.
*/

const generateEmail = (name, domain) => {
    // Combine name and domain with '@' to form the email address
    //return `${name}@${domain}`;

    // using string concatenation:
    return name + "@" + domain;
};

// Test
console.log(`Exercise 4 Result:)`, generateEmail("johnsmith", "example.com")); // johnsmith@example.com
console.log('Exercise 4 Result:', generateEmail("janedoe", "mail.com"));    // janedoe@mail.com
console.log('Exercise 4 Result:', generateEmail("user123", "domain.org"));  // user123@domain.org


console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));



    // ====================NOTES
// ============ const generateEmail = (name, domain) => { ... };
// const generateEmail: Declares a constant named generateEmail to store the function.
// (name, domain): The function takes two parameters:
// name: Represents the username part of the email.
// domain: Represents the domain part of the email.
// =>: Denotes an arrow function, a concise way to write functions in JavaScript.


//==================    return `${name}@${domain}`;
// =================    return name + "@" + domain;


/*
Exercise 5: Insert an element between two others
1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.
*/

foods.splice(2, 0, 'tofu');
console.log('Exercise 5 result:', foods);


/*
Exercise 6: Replace elements
1) Replace 'pizza' in the `foods` array with 'sushi' and 'cupcake'.
*/

foods.splice(1, 1, 'sushi', 'cupcake');
console.log('Exercise 6 result:', foods);


/*
Exercise 7: Using the `slice()` method
1) Use the `slice()` method to create a new array containing 'sushi' and 'cupcake'.
2) Assign it to a variable named `yummy`.
*/

const yummy = foods.slice(1, 3);
console.log('Exercise 7 result:', yummy);


/*
Exercise 8: Finding an index
1) Find the index of 'tofu' in the `foods` array using `indexOf()`.
2) Assign it to a variable named `soyIdx`.
*/

const soyIdx = foods.indexOf('tofu');
console.log('Exercise 8 result:', soyIdx);


/*
Exercise 9: Joining elements
1) Use the `join()` method to concatenate the strings in the `foods` array, separated by ' -> '.
2) Assign the result to `allFoods`.
*/

const allFoods = foods.join(' -> ');
console.log('Exercise 9 result:', allFoods);


/*
Exercise 10: Check for an element
1) Using the .includes() method, check if the `foods` array contains 'soup'.
2) Assign the result to a variable called `hasSoup`.
*/

const hasSoup = foods.includes('soup');
console.log('Exercise 10 result:', hasSoup);


/*
Exercise 11: Odd numbers from an array
1) Iterate through `nums` and push odd numbers to `odds`.
*/

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const odds = [];
for (const n of nums) {
  if (n % 2 !== 0) {
    odds.push(n);
  }
}
console.log('Exercise 11 result:', odds);


/*
Exercise 12: FizzBuzz with arrays
1) Iterate through `nums`.
2) If divisible by 3, push to `fizz`.
3) If divisible by 5, push to `buzz`.
4) If divisible by 3 and 5, push to `fizzbuzz`.
*/

const fizz = [];
const buzz = [];
const fizzbuzz = [];
for (const n of nums) {
  if (n % 3 === 0) fizz.push(n);
  if (n % 5 === 0) buzz.push(n);
  if (n % 15 === 0) fizzbuzz.push(n);
}
console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);


/*
Exercise 13: Retrieve the Last Array
1) Assign the last nested array of `numArrays` to `numList`.
Assume we don't know how many nested arrays there are.
*/

const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];

const numList = numArrays[numArrays.length - 1];
console.log('Exercise 13 result:', numList);


/*
Exercise 14: Accessing within nested arrays
1) Retrieve the number `66` from the `numArrays` array.
2) Assign it to a variable called `num`.
*/

const num = numArrays[2][1];
console.log('Exercise 14 result:', num);


/*
Exercise 15: Nested array sum
1) Sum all numbers in `numArrays`.
2) Assign the sum to `total`.
*/

let total = 0;
numArrays.forEach(row => {
  row.forEach(n => {
    total += n;
  });
});
console.log('Exercise 15 result:\n', total);
