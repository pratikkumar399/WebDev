"use strict"
let a = 3;
let b = 4;
// console.log(a + b)

// Naming a variable with let keyword (var was used in older versions and had limitations so let is used in modern javascript)
let message = "Hello, world!";
let message2 = "Hello World again";
console.log(message);
console.log(message2);

// copying the message from one varible to another
message = message2;
// prints the same value as in the message2 variable
console.log(message);

/* 
1 . variable with same name cannot be declared twice , it can be updated or changed but not redeclared
2 . let message2 = "Ye message galat hai mere bhai thik karlo isko "
3 . --> gives error == 'message2' has already been declared
4 .  javascript is a case sensitive language and mostly camelCasing is preferred for declaring the variables

5. There is a list of reserved words, which cannot be used as variable names because they are used by the language itself.
   For example: let, class, return, and function are reserved. 
   let let = 5; // can't name a variable "let", error!
   let return = 5; // also can't name it "return", error!             */

const unChangable =
    "The variable declared with const keyword cannot be changed , neither can be reassigned";

// const varibles are declared in capital as alaises for something known beforehand and which may be used multiple times throughout the program
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
console.log(color); // #FF7F00

/* There are 8 datatypes in javascript 
    1. Number 
        -->  Number contains integer and floating data types . It also contains some special numbers Infinity , -Infinity and Nan
        -->  Doing mathematical operations is easy in javascript . It gives simply Nan to the errors and doesnt exit the console due to some mathematical error 
        -->  In JavaScript, the “number” type cannot represent integer values larger than (253-1) (that’s 9007199254740991), or less than -(253-1) for negatives. 

    2. BigInt
        --> BigInt type was recently added to the language to represent integers of arbitrary length.
        --> A BigInt value is created by appending n to the end of an integer:                                 
 
    3. Strings
    4. Boolean 
        -- >  either true or false 
        --> In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.
        --> It’s just a special value which represents “nothing”, “empty” or “value unknown”.
        --> The special value undefined also stands apart. It makes a type of its own, just like null.
        --> The meaning of undefined is “value is not assigned”.
        --> If a variable is declared, but not assigned, then its value is undefined:
    
    5.  object for more complex data structures.
    6.  symbol for unique identifiers.
    7.  null for unknown values – a standalone type that has a single value null.
    8.  undefined for unassigned values – a standalone type that has a single value undefined.
    

*/

// the "n" at the end means it's a BigInt
// const bigInt = 12345678901234567890123456789012345678n;

// declaring strings
let str = "First";
let str2 = 'Second';
let str3 = `Third`;

let name = "John";

// embed a variable
console.log(`Hello, ${name}!`); // Hello, John!

// embed an expression
console.log(`the result is ${1 + 2}`); // the result is 3

// typdof
console.log(typeof "Hello");

/*
typeof Math // "object"  (1)
typeof null // "object"  (2)
typeof alert // "function"  (3)
    The typeof operator
        --> The typeof operator returns the type of the argument. It’s useful when we want to process values of different types differently or just want to do a quick check.
        --> A call to typeof x returns a string with the type name:

    The last three lines may need additional explanation:

    1. Math is a built-in object that provides mathematical operations. Here, it serves just as an example of an object.
    2. The result of typeof null is "object". That’s an officially recognized error in typeof, coming from very early days of JavaScript and kept for compatibility.
    3. Definitely, null is not an object. It is a special value with a separate type of its own. The behavior of typeof is wrong here.
    4. The result of typeof alert is "function", because alert is a function.there’s no special “function” type in JavaScript. Functions belong to the object type. But typeof treats them differently, returning "function". That also comes from the early days of JavaScript. Technically, such behavior isn’t correct, but can be convenient in practice.
 */

/*
Alert , prompt , confirm
 alert --> shows a message.
prompt  -->shows a message asking the user to input text.It returns the text or,  if Cancel button or Esc is clicked, null.
confirm --> shows a message and waits for the user to press“ OK” or“ Cancel”.It returns true for OK and false for Cancel / Esc.
*/

// without parentheses
// let area = (height ?? 100) * (width ?? 50);

// ...works this way (not what we want):
// let area1 = height ?? (100 * width) ?? 50;