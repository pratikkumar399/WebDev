const person12 : {firstName : string , lastName : string, 
    age : number} = {
    firstName : "John",
    lastName : "Doe",
    age : 30,
}

console.log(person12);

const printUser = (user : any) => {
    console.log(`${user.firstName} ${user.lastName} is ${user.age} years old`);
} 

printUser(person12);


// function returning object type
function myObj () : object{
    return{
        name : "John",
        age : 30
    };
};

console.log(myObj());


