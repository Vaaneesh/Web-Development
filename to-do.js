let inputText=document.getElementById("input-text");
let list=document.getElementById("list");

function Add(){
    if(inputText.value===''){
        alert("Please write something!!!!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputText.value;
        list.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputText.value='';
}