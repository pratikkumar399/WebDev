const p1 = (data, time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, time)
    })
}
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello from promise 2");
    })
})

p1("hello", 1000).then(() => {
    // p1("herllo", 1000);
    console.log(`Promise 1: ${p1}`)
    return p2;
}).then((data) => {
    p1("herllo", 0);
    console.log(`Promise 2: ${data}`)
})