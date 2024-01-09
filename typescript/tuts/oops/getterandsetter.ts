class MyClass{
    private myDetails : number = 0;

    get myDetailsUtil() :number{
        return this.myDetails;
    }

    set myDetailsUtil(myDetails : number){
        this.myDetails = myDetails;
    }

    // public setDetail(myDetails : number)  { 
    //     this.myDetails = myDetails;
    // }
};


const myClass = new MyClass();
// myClass.setDetail(10);
myClass.myDetailsUtil = 10;

console.log(myClass.myDetailsUtil);