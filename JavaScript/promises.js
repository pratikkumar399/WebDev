const bucket = ['coffee', 'chips', 'vegetables', 'rice'];


const saltPresentPromise = new Promise((resolve, reject) => {
    if (bucket.includes("vegetables") && bucket.includes("salt")) {
        resolve("Edible Salt");
    }
    else {
        reject("Couldn't do it");

    }
});


saltPresentPromise.then((tableSalt) => {
    console.log("tableSalt is ", tableSalt);
}).catch((error) => {
    console.log(error);
});

const arr = [1, 2, 3, 4, 5];

const newArr = new Promise((resolve, reject) => {
    if (arr.includes(1)) {
        resolve("Found 1");
    }
    else {
        reject("Nohing Found");
    }
})

newArr.
    then((index) => {
        console.log(index);
    })
    .catch((error) => {
        console.log("Error: " + error);
    })