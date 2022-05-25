# How JavaScript works ?

**1. First the Code is compiled .**
   
        * Compilation phase tokenization , parsing , code generation
        * Tokenization -> Code is broken into small chunks 
        * Parsing -> Small chunks are made into Abstract syntax tree(AST) and then the code is generated       

**2. Code execution phase :** 

        > In javascript code executes inside execution context .
        > The first execution context that is created is known as global execution context.
        > Global Execution Context
          * creation phase
          * code execution phase
        > When control enters execution context , variable is initialised and [this] value is determined
        > this keyword poinds to window object in the browser

*Please Note* :)
```txt
JavaScript is a synchronous programming language and single threaded . 
- Synchronous: It can perform only one command at a time.
- Single threaded: It can perform command only in a particular sequence. Once the previous command is completed.
```

**Hoisting in Javascript** 

        When we run the program the variables values gets stored in the global execution memory even before they are declared . In Other words we can say that JavaScript lets us access the variables even before they are delared .

```
Hoisting in JavaScript allows you to access functions and variables before they have been created.

There are two things in JavaScript that are hoisted:

1. function declarations
2. variable declarations.

```
> Note : Only variables declared with var are hoisted , varaibles with let and const gives Reference Error . Also only function declarations  are hoisted , function expression are not hoisted.

## Closures in JavaScript 

* A closure is the ability to access a parent level scope from a child scope, even after parent function has been terminated 
* Closures are the ability of a child function, or an inner function, to access variables from a higher level scope even after the functions have been called or closed or closed over.


## DOM IN JAVASCRIPT 
```txt
The term element and element nodes are used interchangeably but when people say that the DOM is working wiht an element , it is actually working with an element that represent the element.   
```
```JavaScript
// selecting an individual element node 
// 1. 
const id = document.getElementById("main-heading");
console.log(id);

// 2.
const query = document.querySelector(".headline");
console.log(query);
// Note --> an important point to note is that one can also selece individual elements by traversing from one element to another within the DOM tree .  

// Select multiple elements 

// 1. 
const className = document.getElementsByClassName(".headline");
console.log(className);

// 2. 
const tagName = document.getElementsByTagName('main-heading');
console.log(tagName);

// 3.
const querySelector = document.querySelectorAll('.headline');
console.log(querySelector);


// TRAVERSING BETWEEN ELEMENT NODES 

const parents = document.body.parentNode;
console.log(parents);

// previousSibling/ nextSibling
// firstChild/lastChild
```

>Accesing/updating the node 

        DOM queries may return one element, or they may return a NodeList, which is a collection of nodes .
        
        Elements that return one or more elements (as a nodeList).

        1. getElementByClassName('class) 
        2. getElementsByTagName('tagName')
        3. querySelectorAll('css selector)

