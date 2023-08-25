let form=document.querySelector(".Myform");
form.addEventListener("submit",function(ev){
    ev.preventDefault();
    console.log(ev);
    let input=document.querySelector("#inp");
    console.log(input.value);
    let value=input.value;
    Add(value);
})

function Add(value){
    let ul=document.querySelector("ul");
    let li=document.createElement("li");
    li.classList.add
}