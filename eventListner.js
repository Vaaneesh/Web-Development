let btn=document.querySelector(".btn");
console.log(btn);
//First way to create event=>

// btn.addEventListener("click",function(ev){
//     console.log(ev);
//     console.log("event success!!");
// });

//Second way=>
function clickEvent(){
    console.log("click!!!");
}
btn.addEventListener("click",clickEvent);
//another Way=>
// btn.addEventListener("click",function(){
//     clickEvent();
// });

//removing event=>
btn.removeEventListener("click",clickEvent);

function addElement(){
    let ul=document.querySelector("ul");
    let li=document.createElement("li");
    console.log(li);    
    li.classList.add("listItem");
    li.innerText="Digital Marketing";
    //append
    ul.append(li);
}
// btn.addEventListener("click",addElement);

function deleteLastElement(){
    let list=document.querySelector(".list");
    list.lastElementChild.remove();
}
btn.addEventListener("click",deleteLastElement);