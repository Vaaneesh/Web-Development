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
list.addEventListener("click",function(click){
    if(click.target.tagName==="LI"){
        click.target.classList.toggle("checked");
    }
    else if(click.target.tagName==="SPAN"){
        click.target.parentElement.remove();
    }
});