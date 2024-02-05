const promises = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Success');
        console.log("Promise is resolved")
    }, 1000);
})

promises.then(function (value) {
    console.log(value);
});


const promise1 = new Promise((resolve, reject) => {
    resolve("Promise 1 Resolved");
});

const promise2 = new Promise((resolve, reject) => {
    resolve("Promise 2 Resolved");
});

const promise3 = new Promise((resolve, reject) => {
    resolve("Promise 3 Resolved");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
}).catch((error) => {
    console.log(error);
});