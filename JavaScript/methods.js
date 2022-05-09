// const person = {
//     firstName: "Pratik",
//     age: 8,
//     about: function()  {
//         console.log(`Person name is ${this.firstName} and age is ${this.age}`); 
//     }
// };

// person.about();

function personInfo() {
    console.log(`Person name is ${this.firstName} and age is ${this.age}`);
}


const person = {
    firstName: "Manisha",
    age: 21,
    about: personInfo 
};
const person1 = {
    firstName: "Ankit",
    age: 22,
    about: personInfo 
};
const person2 = {
    firstName: "Mayank",
    age: 20,
    about: personInfo 
};

person1.about() ;
person2.about() ;
person.about() ;
console.log(this) ;

function myFunc(){
    "use strict"; //use strict method is used to avoid getting window as object 
    console.log(this) ; //directly using this gives us window object in the browser 

}
myFunc() ;

