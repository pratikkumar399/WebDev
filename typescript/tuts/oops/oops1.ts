class Person {
    name : string;
    age : number;

    constructor(name : string , age :number){
        this.name = name;
        this.age = age;
    }
}

const person = new Person("Pratik", 21);
console.log(person); // Person { name: 'Pratik', age: 21 }