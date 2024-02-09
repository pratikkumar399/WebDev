// const promises = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         reject('Error');
//         // resolve('Success');
//         // console.log("Promise is resolved")
//         console.log("Error in promise")
//     }, 1000);
// })

// promises
//     .then(function (value) {
//         console.log(value);
//     })
//     .catch(function (error) {
//         console.log("OOPs ", error);
//     });


// const promise1 = new Promise((resolve, reject) => {
//     resolve("Promise 1 Resolved");
// });

// const promise2 = new Promise((resolve, reject) => {
//     resolve("Promise 2 Resolved");
// });

// const promise3 = new Promise((resolve, reject) => {
//     resolve("Promise 3 Resolved");
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//     console.log(values);
// }).catch((error) => {
//     console.log(error);
// });

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Prmose gets setteled after 5 sec");
//     }, 5000)
// })



// p1.
//     then((res) => {
//         return res
//     }).
//     then((data) => console.log(data))
//     .catch(function (error) {
//         console.log(`There is an error ${error}`)
//     })

// const data = "size";

// const obj = {
//     size: "Hello"
// }

// // const objData = JSON.stringify(obj);

// console.log(obj.size); 

// function sum(a, b) {
//     return a + +b;
// }

// console.log(sum(1, "2"));

let x = 10;

function foo() {
    var x = 20;
    console.log(x);
}

foo();
console.log(x); // Output: 10
