// const heading1 = document.querySelector(".heading1");

// setTimeout(() => {
// heading1.textContent = "Heading 1" ;
// heading1.style.color = "violet" ;
// },1000)


// Using promises 
const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");


const changeText = (element, text, color, time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (element) {
        element.textContent = text;
        element.style.color = color;
        resolve();
      } else {
        reject("element not found");
      }
    }, time)
  })
}

changeText(heading1, "one", "red", 1000)
  .then(() => changeText(heading2, "two", "purple", 1000))
  .then(() => changeText(heading3, "three", "green", 1000))
  .then(() => changeText(heading4, "four", "orange", 1000))
  .then(() => changeText(heading5, "five", "orange", 1000))
  .then(() => changeText(heading6, "six", "orange", 1000))
  .then(() => changeText(heading7, "seven", "orange", 1000))
  .then(() => changeText(heading8, "eight", "orange", 1000))
  .then(() => changeText(heading9, "nine", "orange", 1000))
  .then(() => changeText(heading10, "ten", "orange", 1000))
  .catch((error) => {
    alert(error);
  })