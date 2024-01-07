const singleD : number[] = [1, 2, 3, 4, 5];

const multiD : number[][] = [
    [1, 2, 3],
    [4, 5, 6]
];

const multi2D : Array<Array<number>> = [
    [1, 2, 3],
    [4, 5, 6]
];

console.log(singleD);
console.log(multiD);
// console.log(multi2D);


let line = "";
for (let i = 0; i < multi2D.length; i++) {
    for (let j = 0; j < multi2D[i].length; j++) {
        line += `${multi2D[i][j]} `;
    }
}

let line2 = "";

// for(let num in multi2D){
//     for(let num2 in multi2D[num]){
//         line2 += `${multi2D[num][num2]} `;
//     }
// }


for(let num of multi2D){
    for(let num2 of num){
        line2 += `${num2} `;
    }
}

console.log(line2.trim());
console.log(line.trim());