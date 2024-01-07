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
console.log(line.trim());