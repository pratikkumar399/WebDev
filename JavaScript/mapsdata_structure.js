// maps
// map is an iterable

// stores data in an ordered fashion
// stores key value pairs (like object )
// duplicate keys are not allowed like objects
// difference between maps and objects
// objects can only have string or symbol as key
// in map you can use anything as key like array , string ans number

// obejct literal
// key --> string
// or key --> symbol
// const person = {
//     firstname: "Pratik",
//     age: 22
// };

// console.log(person.firstname);
// console.log(person["firstname"]);

// creating a map

const person = new Map();
person.set("firstname", "Pratik");
person.set("age", 7);
person.set(1, "one");
person.set([1, 2, 3], "one");
person.set({ 1: "one" }, "onetwothree");
console.log(person);

// accesing the values in the map
console.log(person.get("firstname"));
console.log(person.keys());
console.log(person.values());

for (let key of person.keys()) {
  console.log(key, "=> ", typeof key);
}

const person1 = {
  id: 1,
  firstName: "Pratik",
};

const userInfo = new Map();
// mapping an object literal as key to a new object
userInfo.set(person1, { age: 22, gender: "male" });
console.log(userInfo);

// to get the values from the object value using object key
console.log(userInfo.get(person1).age);

const object = {
  "key 1": "item1",
  key2: "item2",
};

const obj2 = object;
object.key3 = "item3";
console.log(object);

// to avoid copying by reference we can just clone the object

const object1 = { ...object };
// another way to clone the object
const obj3 = Object.assign({}, object);
object.key4 = "item-4";

console.log(object);
console.log(object1);
console.log(obj2);
console.log(obj3);


