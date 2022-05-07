// objects are reference type 
// creaating an object

const person = {
    "name": "Pratik",
    "age": 21,
    "likes": ["hellow", "world"]
};

// access the value of the key(or properties) using dot operator or []
// console.log(person["name"]); 
person.gender = "male";

const key = "hello";
person[key] = "world";
console.log(person);


// console.log(typeof person);

// how to iterate objects

// for in loop
/* for (let key in person) {
    console.log(key); -- > to get the keys
    console.log(person[key]); // --> to get the values
    console.log(`${key} : ${person[key]}`); // --> prints the key value pair 
} */

console.log(Object.keys(person)); // --> prints the keys
console.log(Object.values(person)); // --> prints the values

for (let key of Object.keys(person)) {
    console.log(person[key]);
}

// computed properties in objects

const key2 = "object1";
const key1 = "object2";

const value1 = "values";
const value2 = "values";

const obj = {

    [key1]: value1,
    [key2]: value2

};

// obj[key1] = value1;
// obj[key2] = value2;
console.log(obj);

// spread operator

const object1 = {
    "firstName": "Pratik"
};

const object2 = {
    "lastName": "Rai"
}

// const newObject = {...object1, ...object2, key69: "value 69" };
const newObj = {... "abc" };
console.log(newObj);

// object destructuring

const details = {
    nameq: 'Pratik',
    age: 21,
    likes: ['hellow', 'world'],
    gender: 'male',
    hello: 'world'
}

let { nameq, age, ...restDetails } = details;
console.log(nameq, age, restDetails);