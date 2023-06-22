function add(a, b) {
    console.log(a + b);
}

setImmediate(() => {
    add(1, 2);
    // console.log('setImmediate');
})

setTimeout(() => {
    add(3, 4);
    // console.log('setTimeout');
}, 0);

process.nextTick(() => {
    add(5, 6);
    // console.log('process.nextTick');
});

console.log('Program has ended')