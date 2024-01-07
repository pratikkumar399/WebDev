type Person11 = {
    name :string,
    age : number,
};

function printPerson(person : Person11){
    console.log(`${person.name} is ${person.age} years old`);
};

// printPerson({name : "John", age : 30});

const printPerson2 = (person :Person11) => {
    console.log(`${person.name} is ${person.age} years old`);
}

const myPerson : Person11 = {
    name : "John",
    age : 30
};

printPerson(myPerson);
printPerson2(myPerson);



type car = {
    model : string,
    madeIn : number,
    color : string,
}

function printCarType(car : car){
    console.log(`The car model is ${car.model} and it is made in ${car.madeIn} and it is ${car.color} in color`);
}

const myCar : car = {
    model : "BMW",
    madeIn : 2019,
    color : "Black",
};

printCarType(myCar);


type optionalCar = {
    model : string,
    madeIn : number,
    color ?: string,
}

function printOptionalCarType(car : optionalCar) : void{
    console.log(`The car model is ${car.model} and it is made in ${car.madeIn} and it is ${car.color} in color`);
}

const myOptionalCar : optionalCar = {
    model : "BMW",
    madeIn : 2019,
};
    
printOptionalCarType(myOptionalCar);

