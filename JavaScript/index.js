/* // dom - document object  model

console.log(document.getElementById("main-heading"));
const header = document.querySelector('.header');
console.log(header);
const nav = document.querySelector(".nav-item");
console.log(nav);

const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading.textContent)
console.log(mainHeading.innerText)

// mainHeading.textContent = "This is something else"

const getHeading = document.querySelector("div.headline>h2");
console.log(getHeading);

// changing the style
console.log(mainHeading.style);
// mainHeading.style.backgroundColor = "blue " ;
// mainHeading.style.border = "20px solid green" ;

// get and set attributes
const link = document.querySelector("a");
link.setAttribute("href", "http://kontentkreator.tech");
console.log(link.getAttribute("href"));


// const input = document.querySelector(".form-todo input");
// console.log(input) ;

// get multple items by class name
// const navItem = document.getElementsByClassName("nav-item") ; //gives html collection
// const navItem = document.querySelectorAll(".nav-item") ; //gives nodeList 
// console.log(navItem) ; //

const navItems = document.getElementsByTagName("a"); //gives nodeList 

// cannot use foreach method to iterate html collection
/* for (let i = 0; i < navItems.length; i++) {
    // const navItems = navItem[i] ;
    // navItems.style.backgroundColor = "black" ;
    // navItems.style.color = "green" ;
    navItems[i].style.color = "blue";
    navItems[i].style.backgroundColor = "black";
    navItems[i].style.fontWeight = "bold";
}

for (let navItem of navItems) {
    navItem.style.color = "green";
    navItem.style.fontWeight = "bold";
    navItem.style.backgroundColor = "black";

}
 */

// innerHtml
// const headline = document.querySelector(".headline") ;
// // headline.innerHTML = "<h1>Inner Html Changed<h1>"
// console.log(headline.innerHTML) ;

// selecting an individual element node 
// 1. 
// const id = document.getElementById("main-heading");
// console.log(id);


// // 2.

// const query = document.querySelector(".headline");
// console.log(query);
// // Note --> an important point to note is that one can also select individual elements by traversing from one element to another within the DOM tree .  


// // Select multiple elements 

// // 1. 

// const className = document.getElementsByClassName(".headline");
// console.log(className);

// // 2. 

// const tagName = document.getElementsByTagName('main-heading');
// console.log(tagName);

// // 3.

// const querySelector = document.querySelectorAll('.headline');
// console.log(querySelector);


// // TRAVERSING BETWEEN ELEMENT NODES 

// const parents = document.body.parentNode;
// console.log(parents);

// previousSibling/ nextSibling
// firstChild/lastChild

const rootNode = document.getRootNode();
const htmlElementNode =  rootNode.childNodes[0];
console.log(htmlElementNode.childNodes) ;
// const headElementNode = htmlElementNode.childNodes ;
console.log(htmlElementNode.nextSibling) ;

const heading = document.querySelector("h1") ;
console.log(heading.parentNode);


const sectionTodo = document.querySelector(".section-todo") ;
// console.log(sectionTodo.classList)
// sectionTodo.classList.add("bg-dark") ;
// sectionTodo.classList.remove(".container") ;
// const existClass = sectionTodo.classList.contains("bg-dark") ;
// console.log(existClass) ;
// sectionTodo.classList.toggle("bg-dark") ;
// toggle --> removes a class if present and adds it if not present

