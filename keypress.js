let input=document.querySelector("input");
input.addEventListener("keypress",function(ev){
    console.log(ev.key);
})

let form=document.querySelector(".myform");
console.log(form);
form.addEventListener("submit",function(ev){
    ev.preventDefault();
    let inp=document.querySelector("#inp");
    console.log(inp.value);
    addElement2(inp.value);
    // console.log(ev);
})
function addElement2(value){
    let ul=document.querySelector("ul");
    let li=document.createElement("li");
    li.classList.add("listItem");
    li.innerText=`${value}`;
    // li.innerText=inp.value;
    ul.append(li);
}