let array = [1, 2, 3, 4, 5, 6];

const array2 = array.map((value, index) => {
    return value * 2;
})

array.forEach((value, index) => {
    value = value * 2;
    // console.log(value);
})

// console.log(array2);


// const pr = new Promise((resolve, reject) => {
//     const intervalId = setInterval(() => {
//         console.log("This runs every 1 second");
//     }, 1000); // Interval runs every 1 second

//     // Stop the setInterval after 10 seconds
//     setTimeout(() => {
//         clearInterval(intervalId);
//         resolve(); // Resolve the promise after stopping the interval
//     }, 10000); // 10 seconds
// });

// pr.then(() => {
//     console.log("Promise is resolved");
// }).catch((error) => {
//     console.log(error);
// });


// fetch("https://jsonplaceholder.typicode.com/posts").then(response => {
//     if (response.ok) {
//         return response.json();
//     } else {
//         throw new Error("Something went wrong");
//     }
// }).then(data => {
//     console.log(data[0]);
// }).catch(error => {
//     console.log(error);
// });

// lets do that with async await
async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        console.log(data[0]);
    }
    catch (error) {
        console.log(error);
    }
}

fetchData();


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr.map((val) => val * 2));
// console.log(arr.filter((val) => val > 5));

let max = 0;

arr.forEach((val) => {
    max = Math.max(val, max);
})

console.log(max);


function a() {
    b();
    function b() {
        console.log(c);
    }
}

var c = 10;
a();


// promise chaining

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise 1 Resolved");
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise 2 Resolved");
    }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise 3 Resolved");
    }, 3000);
});

promise1.then(() => {
    return promise2;
}).then(() => {
    return promise3;
}).then(() => {
    console.log("All promises resolved");
}).catch((error) => {
    console.log(error);
});
