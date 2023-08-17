// const byId=document.getElementById("sample");
// console.log(byId)
// const form=document.querySelector(".myForm")
console.log(myHello.innerHTML);
// by id

const byId = document.getElementById("hello");
console.log(byId);

// by className

const byClass = document.getElementsByClassName("byClass");
console.log(byClass);

// by tagName

const byTag = document.getElementsByTagName("h3");
console.log(byTag);
// query selector
const query = document.querySelector(".hello");
console.log(query);

// DOM properties
// innerHTML
document.getElementsById("hello").innerHTML="Hello World";


console.log(myHello.innerHTML);
myHello.innerHTML="<div>Hello</div><p>world</p>";
myHello.innerText="hello world";
myHello.textContent="Hello world! learning dom"

//styling

myHello.style.color="blue";
myHello.style.fontSize="100px";

//getAtr
console.log(myHello.getAttribute("id"));
//setAtr
myHello.setAttribute("clas","myClass");

//class List
//1) add
//2) remove
//3) toggle

