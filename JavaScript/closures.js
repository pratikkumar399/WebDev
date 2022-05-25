// function outer() {
//     const outerVar = "Hey I am the outer Var";
//     function inner() {
//         const innerVar = "hey I am an inner var";
//         console.log(innerVar);
//         console.log(outerVar);
//     }
//     return inner;
// }

// const inner = outer();
// console.log(inner());

function createGame(gameName){
    let score = 0;
    return function win(){
      score ++;
      return `Your name ${gameName} score is ${score}`
    }
  }
const hockeyGame = createGame('Hockey');
console.log(hockeyGame());
