/* // intro to events 
// click 
 const btn = document.querySelector(".btn-headline");
// btn.onclick = () =>{
//     console.log("You Clicked me") ;
// }

// method --> addeventListener
// function clickMe (){
//     console.log("You clicked Me") ;
// }
btn.addEventListener("click" , () => {
    console.log("You Clicked me Again") ;
}) ;




*/

const body = document.body ;
body.addEventListener("keypress" ,(e)=>{
console.log(e.key) ;
}) ;
