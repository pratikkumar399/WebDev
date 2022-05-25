// const todoList = document.querySelector(".todo-list");
// todoList.innerHTML += "<li>New Todo</li>";
// console.log(todoList.innerHTML);

// const newTodoItem =  document.createElement("li");
// // const newTodoItemText =  document.createTextNode("Teach Students");
// newTodoItem.textContent =  "Teach Students";
// // newTodoItem.appendChild(newTodoItemText);
// const todoList = document.querySelector(".todo-list");
// // todoList.append(newTodoItem);
// todoList.prepend(newTodoItem);
// console.log(newTodoItem);

// const todo1 = document.querySelector(".todo-list>li");
// todo1.remove();
// console.log(todo1);

// static list vs live list 
//  querySelectorAll gives static list 
// getElementsBySomething gives a live list 

// getting dimension of an element 

const height = document.querySelector(".section-todo") ;
const info = height.getBoundingClientRect(height);
console.log(info);