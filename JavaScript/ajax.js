// ajax --> asynchrounous javascript and XML

// ajax is a set of web development techiniques using many web technologies on the client side to create asynchrounous web applications

// with ajax , web applications can send and retrieve data from a server asynchronously(in the background)  wihtout interfering with the display and behaviour of the existing page     

// we dont use data in the xml format anymore
// we ise JSON now

// We have 3 most common ways to create and send request to server and
// 1. xmlHTTPRequest (old way of doing) -->xHR
// 2. fetch API(new way of doing)
// 3. axios (this is third party library)

// const URL = "https://jsonplaceholder.typicode.com/posts" ;
// const xhr = new XMLHttpRequest() ;
// // console.log(xhr) ;

// // -->
// xhr.open("GET", URL);
// /* xhr.onreadystatechange= function(){
//     if(xhr.readyState ==4){
//         const response = xhr.response ;
//         const data = JSON.parse(response) ;
//         console.log(data) ;
//     }
// } */

// xhr.onload = () => {
//     const response = xhr.response ;
//         const data = JSON.parse(response) ;
//         console.log(data) ;
// }
// xhr.send();


// practice

const URL = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();

xhr.open("GET", URL);
xhr.onload = () => {
    if(xhr.status >= 200 && xhr.status < 300) {
        const data = JSON.parse(xhr.response);
        console.log(data);
        const id = data[3].id;
        const xhr2 = new XMLHttpRequest();
        const URL2 = `${URL}/${id}`
        console.log(URL2);
        xhr2.open("GET", URL2);
        xhr2.onload = () => {
            const data2 = JSON.parse(xhr2.response);
            console.log(data2);
        }
        xhr2.send();
    }
   else{
       console.log("something went wrong");
   }
}

xhr.onerror = () => {
    console.log("network error");
}
xhr.send();
