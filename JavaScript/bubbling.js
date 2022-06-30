const grandParent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
// event capturing
// child.addEventListener("click", (e) => {
//     console.log("capture !!! Child! ");
// }, true);
// parent.addEventListener("click", (e) => {
//     console.log("capture !!! parent! ");
// }, true);
// grandParent.addEventListener("click", (e) => {
//     console.log("capture !!! Grandparent! ");
// }, true);
// document.body.addEventListener("click", (e) => {
//     console.log("capture !!! Body! ");
// }, true);


// // not capturing
// child.addEventListener("click", (e) => {
//     console.log("capture !!! Child! ");
// });
// parent.addEventListener("click", (e) => {
//     console.log("capture !!! parent! ");
// })
// grandParent.addEventListener("click", (e) => {
//     console.log("capture !!! Grandparent! ");
// })
// document.body.addEventListener("click", (e) => {
//     console.log("capture !!! Body! ");
// })


grandParent.addEventListener("click", (e) => {
    console.log("capture !!! Grandparent! ");
}, true);