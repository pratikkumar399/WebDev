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

// const height = document.querySelector(".section-todo") ;
// const info = height.getBoundingClientRect(height);
// console.log(info);


const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTodoText = todoInput.value;
    const newLi = document.createElement("li");
    const newLiInnerHtml = `
    <span class="text">${newTodoText}</span>
    <div class="todo-buttons">
    <button class="todo-btn done">Done</button>
    <button class="todo-btn remove">Remove</button>
    </div>
    ` ;
    newLi.innerHTML = newLiInnerHtml;
    todoList.append(newLi);
    todoInput.value = "";


});

todoList.addEventListener("click", (e) => {
   if(e.target.classList.contains("done")){
       const liSpan =  e.target.parentNode.previousElementSibling ;
       liSpan.style.textDecoration = "line-through";
   }
   if(e.target.classList.contains("remove")){
       const liSpan =  e.target.parentNode.parentNode ;
       liSpan.remove();
   }
})
