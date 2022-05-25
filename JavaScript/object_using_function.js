// function (that function create object)
// 2.) add key value pair 
// 3.) object ko return krega 

// const userMethods = {
//     about: function () {
//         return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18: function () {
//         return this.age >= 18;
//     }
// }

function createUser(firstName, lastName, email, age, address) {
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;


    return user;
}

createUser.prototype.about = function () {
    return `${this.firstName} is ${this.age} years old.`;
};

createUser.prototype.is18 = function () {
    return this.age >= 18;
};

const user1 = createUser('patrick', 'rai', 'harshit@gmail.com', 19, "my address");
const user2 = createUser('pratik', 'raii', 'harshit@gmail.com', 19, "my address");
const user3 = createUser('ankit', 'raiii', 'harshit@gmail.com', 19, "my address");

console.log(user1.about());
console.log(user2.about());
console.log(user3.about());

// console.log(user1.__proto__.about()) ;


// __proto__ , [[prototype]]
// __proto__ is a refrence to object in a function call

function hello() {
    console.log("hello world");
}

console.log(hello.name);