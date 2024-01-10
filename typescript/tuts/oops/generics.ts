// what are generics? -> Generics are used to create reusable components.
//  -> These are used to create a component which can work over a variety of types rather than a single one.

// lets write a regular function

const addNumber = (a : number, b : number) : number => a + b;
const addString = (a : string, b : string) : string => a + " " +  b;

console.log(addNumber(10,20));
console.log(addString("Pratik", "Rai"));

// lets write a generic function

function priintt<T>(a: T): T {
    return a;
}

console.log(priintt<number>(10));
console.log(priintt<string>("Pratik"));
console.log(priintt<boolean>(true)); 

function identityType<T>(val : T) :T{
    return val;
}

console.log(identityType<number>(10));
console.log(identityType<string>("Pratik"));

interface DOG{
    name : string;
    breed : string;
}

function uniqueIdentifier<T>(val : T , defualttype : T):[T,T]{
    return [val , defualttype];
}

const dog1 = uniqueIdentifier<DOG>(
    {name : "hatt",breed : "German Shepherd"},
    {name : "bhakk",breed : "German Shepherd"}
);

console.log(dog1);


function getRandomValue<t>(obj : {[key : string] : t}) : {
    key : string , value : t
}{
    const keys = Object.keys(obj);
    const randomIndex = Math.floor(Math.random() * keys.length);
    const randomKey = keys[randomIndex];
    return {
        key : randomKey,
        value : obj[randomKey]
    }
}

const stringg = {a : "Apple" , b : "Banana" , 2 : "Cherry" , d : "Dew" , e : "Egg"};
const randomString = getRandomValue<string>(stringg);
console.log(randomString);


const fruits = ["Apple" , "Banana" , "Cherry" , "Dew" , "Egg"];
const filteredFruit = fruits.filter((fruit) => fruit.length > 4);
console.log(filteredFruit);

class Box<T>{
    value :T;

    constructor(value : T){
        this.value = value;
    }

    getValue() : T{
        return this.value;
    }

    setValue(value : T) : void{
        this.value = value;
    }
}

const box = new Box<string>("Himanshi");
console.log(box.getValue());

const box1 = new Box<number>(100);
console.log(box1.getValue());