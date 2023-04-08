// // new 
// function createUser(firstname ,age){
//     this.firstname = firstname;
//     this.age = age;
// }

// const user1 = new createUser("Pratik" ,22) ;
// console.log(user1) ;

/*  new keyword 
        1. empty object this = {}
        2. return this  

 
 */

class createUser {
    constructor(firstName, lastName, email, age, address) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }
    about() {
        return `${this.firstName} is ${this.age} years old.`;
    }
    is18() {
        return this.age >= 18;
    }
}



const user1 = new createUser('patrick', 'rai', 'harshit@gmail.com', 19, "my address");
const user2 = new createUser('pratik', 'raii', 'harshit@gmail.com', 19, "my address");
const user3 = new createUser('ankit', 'raiii', 'harshit@gmail.com', 19, "my address");

console.log(user1.about());
console.log(user2.about());
console.log(user3.about());
