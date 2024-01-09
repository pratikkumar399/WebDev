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