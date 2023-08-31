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
    li.classList.add("taskItem");
    li.innerHTML=`${value} <span> <button class="delete">Delete</button></span>`;
    ul.append(li);
}

//delete
let taskList=document.querySelector(".taskList");
taskList.addEventListener("click",function(ev){
    // console.log(ev.target);
    let currentElement=ev.target;
    let className=ev.target.className;
    console.log(className);
    if(className=="delete"){
        let item=currentElement.parentElement.parentElement;
        console.log(item);
        item.remove();
    }
    if(className=="up"){
        let listItem=currentElement.parentElement.parentElement;
        let prevItem=listItem.previousElementSibling;
        console.log(listItem);
        console.log(prevItem);
        //Insertbefore function
        taskList.insertBefore(listItem,prevItem);
    }
    if(className=="down"){
        let listItem=currentElement.parentElement.parentElement;
        let nextItem=listItem.nextElementSibling;
        taskList.insertBefore(nextItem,listItem);
    }
    if(className=="complete"){
        let listItem=currentElement.parentElement;
        listItem.classList.toggle("cut");
    }
})