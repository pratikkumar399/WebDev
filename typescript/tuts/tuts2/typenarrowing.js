// typeof
function exampleFunction(value) {
    if (typeof value === "string") {
        console.log(value === null || value === void 0 ? void 0 : value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
exampleFunction(10);
// instanceof 
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Driving a car");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Driving a truck");
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("Loading cargo ... " + amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v2);
var animal = {
    type: "bird",
    flyingSpeed: 10,
    runningSpeed: 20
};
console.log(animal.runningSpeed);
