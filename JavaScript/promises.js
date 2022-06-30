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