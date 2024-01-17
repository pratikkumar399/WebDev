function printPerson(person) {
    console.log("".concat(person.name, " is ").concat(person.age, " years old"));
}
;
// printPerson({name : "John", age : 30});
var printPerson2 = function (person) {
    console.log("".concat(person.name, " is ").concat(person.age, " years old"));
};
var myPerson = {
    name: "John",
    age: 30
};
printPerson(myPerson);
printPerson2(myPerson);
function printCarType(car) {
    console.log("The car model is ".concat(car.model, " and it is made in ").concat(car.madeIn, " and it is ").concat(car.color, " in color"));
}
var myCar = {
    model: "BMW",
    madeIn: 2019,
    color: "Black",
};
printCarType(myCar);
function printOptionalCarType(car) {
    console.log("The car model is ".concat(car.model, " and it is made in ").concat(car.madeIn, " and it is ").concat(car.color, " in color"));
}
var myOptionalCar = {
    model: "BMW",
    madeIn: 2019,
};
printOptionalCarType(myOptionalCar);
