const superhero = require('./superhero');

console.log(superhero);

const batman = new superhero("Batman");
console.log(batman);
console.log(batman.getName());
batman.setName("Bruce Wayne");
console.log(batman.getName());

const superman = new superhero("Superman");
console.log(superman.getName());