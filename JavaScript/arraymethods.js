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