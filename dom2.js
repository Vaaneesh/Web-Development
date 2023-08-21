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