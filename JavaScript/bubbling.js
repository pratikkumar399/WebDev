const grandParent =  document.querySelector(".grandparent");
const parent =  document.querySelector(".parent");
const child =  document.querySelector(".child");

child.addEventListener("click" , (e)=> {
    console.log("You Clicked on Child! ") ;
});
parent.addEventListener("click" , (e)=> {
    console.log("You Clicked on parent! ") ;
})
