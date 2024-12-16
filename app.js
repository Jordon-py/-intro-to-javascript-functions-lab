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
