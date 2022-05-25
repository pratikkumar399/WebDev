const allButtons =  document.querySelectorAll(".buttonClass button") ;

// for(let button of allButtons){
//     button.addEventListener("click",function(){
//         console.log(this.textContent) ;
//     })
// } 

// for(let button of allButtons){
//     button.addEventListener("click",(e) => {
//         console.log(e.target) ;
//         console.log(e.currentTarget) ;
//     })
// } 


// for(let i=0 ; i< allButtons.length ; i++){
//     allButtons[i].addEventListener("click",function(){
//         console.log(this.textContent) ;
//     })
// }

allButtons.forEach(function(button){
    button.addEventListener("click",(e)=>{
                console.log(e.textContent) ;
            })
})

// event object 
// const firstButton = document.querySelector("#one") ;
// firstButton.addEventListener("click" , function(e){
//     console.log(e) ;
// })