/*
parentElement
previousSibling
*/
let h3=document.querySelector("h3");
console.dir(h3);
let parent=h3.parentElement;
console.log(parent);
let h1=document.querySelector("h1");
let grandparent=h1.parentElement.parentElement;
console.log(grandparent);

//prevSibling
let prevsb=h1.previousElementSibling;
console.log(prevsb);

//nextSibling
let nextsb=h1.nextElementSibling;
console.log(nextsb);

let h1parent=h1.parentElement.nextElementSibling;
console.log(h1parent);

//child Element
let head=document.querySelector("header");
console.log(head);
let child=head.children;
console.log(child);

let first=head.firstChild;
console.log(first);

let ul=document.querySelector("ul");
let str=ul.innerHTML;
console.log(str);
str+="<li>AI</li>";
ul.innerHTML=str;

let li=document.createElement("li");
console.log(li);
li.innerText="Digital Marketing";

//append
ul.append(li);
// ul.appendChild("Digital");

//for removing child->
ul.removeChild(li);