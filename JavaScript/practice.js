let array = [1, 2, 3, 4, 5, 6];

const array2 = array.map((value, index) => {
    return value * 2;
})

const array3 = array.forEach((value, index) => {
    value = value * 2;
    return value;
})

console.log(array2);
console.log(array3);