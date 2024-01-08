class Person {
    public name : string;
    private age : number;
    protected gender : string;

    constructor(name : string ,age : number ,  gender : string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    public getName(): string{
        return this.name;
    }

    public getAge(): number{
        return this.age;
    }

    protected getGender(): string{
        return this.gender;
    }
}

class Man extends Person {
    constructor(name : string , age : number , gender : string){
        super(name , age , gender)
    }

    public getInformation(): string{
        return `${this.getName()} ${this.getAge()} ${this.getGender()}`;
    }

}


// const person = new Person("Pratik", 21, "male");
// console.log(person); 

const ManOne = new Man("Person" , 21 , "male");
console.log(ManOne.getInformation());