let add = 5;
let notAdd = 6;
let sum = 3;


function showMessage() {
    console.log("Hello world from Javascript");
}

function updateVariables(updateBy) {

    sum = add + updateBy;
    return; // the line below it does not gets executed 
    sum = updateBy;
}
updateVariables(5)
console.log(sum);

// showMessage();