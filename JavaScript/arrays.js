let fruits = ["apple", 'oranges', "mango"];

// to push elements to the end use the push operator
fruits.push("banana");
console.log(fruits);

// pop method removes elements from the last of the array and returns it
let poppedFruit = fruits.pop();
console.log(fruits);
console.log("Popped fruits is : ", poppedFruit);

// to add elements in the  beginning --> use unshift

fruits.unshift("mango");
fruits.unshift("pear");
console.log(fruits);

// shift removes elements from the beginning and returns it 
let removedFruit = fruits.shift();
console.log(fruits);
console.log(removedFruit);
// push and pop are faster than shift and unshift because , shift and unshift uses extra space for shifting while doing their operation

// refernce type in the array , here means that all the items are 


// CLONING AN ARRAY 

let array = ['a', 'b', 'c', 'd'];
// slice method is used to clone an array . This create a seprate array in the heap with different memory location 
// method 1 
// let array2 = array.slice(0)  --> faster as per performance

// method 2 
// [].concat --> creates and empty array and concatenates(adds)  the given array elements in the newly created array
// let array2 = [].concat(array);

// method 3 
// using spread opearator [...array]
// let array2 = [...array].concat("item 3", "item 4");
let array2 = [...array, "item 3", "item 4"];
array.push("item 3");

console.log(array, " ", array2);

// arrays destructuring --> new concept from es6
let myArray = [1, 2, 3, 4, 5];

// all the values of the array are destructured to a new variable , if a variable from out of bound tries to access any element than it gets an undefined value 
// let [value1, value2, value3, value4, value5, value6] = myArray;  --> by defualt assigns corresponding index to the variables
// let [value1, , , , value5] = myArray; // if we wan to skip an index , we can use comma in place of that and move onto next  step 

// applying the spreead operator copies the rest of the values into a new array 
let [var1, var2, ...newArray] = myArray;
console.log(var1, var2, newArray);