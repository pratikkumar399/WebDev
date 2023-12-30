// "any" type, can be used to represent any type of value
// ts will disable type checking for variables declared with "any" type

// warning -> avoid using "any" type as much as possible
// because it will lead to code without any type checking and this can lead 
// to bugs and errors during production


let color : any = "red";
console.log(color); // valid
color = 10;
console.log(color); // valid