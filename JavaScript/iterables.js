// iterables 
// entities on which for each loop is aplicable
// example --> string and array are iterables

const firstName = "Pratik";

for (let char of firstName) {
    console.log(char);
}

const items = ["item1", "item2", "item3"];
for (let item of items) {
    console.log(item);
}

const users = {
    'key1': "value1",
    'key2': "value2",
    'key3': "value3"
}

// gives error as obejects are not iterable
// for (let user of users) {
//     console.log(user);
// }

// array like objects
// which cann be accessed by length property

const name1 = "Pratik";
console.log(name1.length);
console.log(name1[1]);

// set is also a type of iterable 
// stores data 
// sets also have its own methods 
// no index based access
// order is not guaranteed
// unique items only(no duplicates allowed)

const item = [5, 6, 7];
const numbers = new Set([1, 2, 3]);
numbers.add(1);
numbers.add(2);
numbers.add(4);
numbers.add(item);
numbers.add(item); //gets added ony one type , because sets do not take duplicates
numbers.add(["item1", "item2"]);
numbers.add(["item1", "item2"]); //gets added because it points to different memory location then the above array ;

// if (numbers.has(1)) {
//     console.log("1 is present ");
// }

for (let number of numbers) {
    console.log(number);
}

console.log(numbers);