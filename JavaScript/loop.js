// outer: for (let i = 0; i < 3; i++) {

//     for (let j = 0; j < 3; j++) {

//         let input = prompt(`Value at coords (${i},${j})`, '');

//         // if an empty string or canceled, then break out of both loops
//         if (!input) break outer; // (*)

//         // do something with the value...
//     }
// }
// console.log('done');

let fruits = ["apple", "oranges", "pineapple"];
for (let fruit in fruits) {
    console.log(fruits[fruit]);
}
console.log('\n');
for (let fruit of fruits) {
    console.log(fruit);
}