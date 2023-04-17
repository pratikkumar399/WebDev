class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let p1 = new Person("Pratik", 19);
let p2 = new Person("Himanshi", 20);

class Couple {
    constructor(love, kiss, couples) {
        this.love = love;
        this.kiss = kiss;
        this.couples = couples;
    }

    getLove = () => {
        return this.love;
    }

    getKiss = () => {
        return this.kiss;
    }

    getCouples = () => {
        return this.couples;
    }

}

let couples = new Couple("I love you", "Meet me to get a kiss", [p1, p2]);

console.log(couples.couples[0].name);

