// typeof

type myType = string | number;

function exampleFunction(value : myType) :void{
    if(typeof value === "string"){
        console.log(value?.toUpperCase());
    }
    else{
        console.log(value.toFixed(2));
    }
}

exampleFunction(10);

// instanceof 

class Car{
    drive(){
        console.log("Driving a car");
    }
}

class Truck{
    drive(){
        console.log("Driving a truck");
    }
    loadCargo(amount: number){
        console.log("Loading cargo ... " + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle){
    vehicle.drive();
    if(vehicle instanceof Truck){
        vehicle.loadCargo(1000);
    }
}

useVehicle(v2);

//intersection type

type Bird = {
    type: string;
    flyingSpeed: number;
}

type Horse = {
    type: string;
    runningSpeed: number;
}

type Animal = Bird & Horse;

const animal:  Animal  = {
    type: "bird",
    flyingSpeed: 10,
    runningSpeed: 20
}

console.log(animal.runningSpeed);



