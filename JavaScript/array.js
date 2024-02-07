let array = [1, 2, 3, 4, 5];
// console.log(array);
// console.log(array.length);
// let i = 0;
// while (i < array.length) {
//     console.log("elem at index", i, " is ", array[i]);
//     i++;
// }
//push , unshift , pop , splice , slice, indexof 
array.push(6);
console.log(array);
// array.unshift(0);
// console.log(array);

array.pop();
console.log(array);

// splice modifies the original array
array.splice(2, 1);
console.log(array);

// slice does not modify the original array
let newArray = array.slice(1, 4);
console.log(newArray);

// check if an array contains a particular element
if (array.includes(2)) {
    console.log("2 is present in the array");
}


