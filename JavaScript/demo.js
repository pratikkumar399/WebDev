const mainButton = document.querySelector("button");
const body = document.body ;
const currentColor = document.querySelector(".currentColor") ;

function randomColor(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const randColor = `rgb(${red} ,${green} ,${blue})` ;
    return randColor;
}

mainButton.addEventListener("click" , (e)=> {
    const randColor = randomColor();
    body.style.backgroundColor =randColor;
    currentColor.textContent = randColor;

})