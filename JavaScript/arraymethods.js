// important methods 

// forEach
// map 
// filter
// reduce

/* const numbers = [2, 4, 5, 6, 7, 8, 64];

function printNumber(number, index) {
    console.log("index is", index);
    console.log(`${number}*2 = ${number * 2}`);
}

// print(numbers[0], 0);

for (let i = 0; i < numbers.length; i++) {
    printNumber(numbers[i], i);
}

numbers.forEach(function(number, index) {
    console.log(number * 2, " ", index);
}) */

// map method 
// takes input as a callback function

const arr = [1, 2, 3, 4, 5];

const square = (number) => {
    return number * number;
}

console.log(arr.map(square));

const users = [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'John', lastName: 'Sanga' },
    { firstName: 'Sanga', lastName: 'John' },
    { firstName: "Pratik", lastName: "Rai" }
];

const firstName = users.map((user) => {
    return user.firstName;
})

console.log(firstName);

// filter 

const n = [1, 2, 3, 4, 5];

const even = n.filter((number) => {
    return number % 2 === 0;
})

console.log(even);


// reduce method 
const sum = n.reduce((accumulator, currenValue) => {
    return accumulator + currenValue;
});

console.log(sum);

// sort method 

const num = [3000, 1200, 5, 9, 6, 4];
num.sort(); //by defualt the array is sorted according to the ascii codes , because javaScript takes the array elements as string
console.log(num);

// to sort the number acc to number 
// num.sort((a, b) => a - b); //ascending order 
num.sort((a, b) => b - a); //descending order 
console.log(num);

// how a-b works
// a-b -->  positive , then b is placed before a 
// a- b --> negative , then a is placed before b

const products = [
    { id: 1, productName: 'p1', price: 1000 },
    { id: 2, productName: 'p2', price: 200 },
    { id: 3, productName: 'p3', price: 3000 },
    { id: 4, productName: 'p4', price: 100 }
]

const lowTohigh = products.slice(0).sort((a, b) => {
    return a.price - b.price;
})

console.log(lowTohigh);
console.log(products);

// find method 

const myArray = ["hello", "cat", "dog", "goat"];

const ans = myArray.find((string) => {
    return string.length === 3; //if there is no string with length 3 then find method returns undefined 
})

console.log(ans);

// every method 

const arrayq = [2, 4, 5, 6, 8];

const ans2 = arrayq.every((number) => number % 2 === 0);
// evey method --> return true if all the elements satisfies the given condition in the callback function 
console.log(ans2);

// some method 
// retruns true if there is any element which satisfies the given conditions in the callback function

const result1 = arrayq.some((number) => number % 2 !== 0);
console.log(result1);

// fill method -- >Changes all array elements from start to end index to a static value and returns the modified array
// value , start ,end 

// const mYArray = new Array(10).fill(-1);
// console.log(mYArray);

const mYArray = [1, 2, 4, 5, 6, 7, 8];
mYArray.fill(0, 2, 4);
console.log(mYArray);


// splice method --> helps to delete or insert elment inside an array
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// start , delete , insert 


// delete 
// mYArray.splice(2, 2);
// console.log(mYArray);

// insert
let deletedItem = mYArray.splice(2, 2, "inserted item");
console.log(mYArray);
console.log(deletedItem);