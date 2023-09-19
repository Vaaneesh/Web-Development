let url="https://swapi.dev/api/people/1";
let container=document.querySelector(".container");
// fetch(url).then(data=>data.json()).then((data)=>showPeopleData(data)).catch(err=>console.log(err));
function showPeopleData(people){
    container.innerHTML="";
    let div=document.createElement("div");
    div.innerHTML=`<div class="name">${people.name}</div>
    <div class="height">${people.height}</div>
    <div class="gender">${people.gender}</div>`
    container.append(div);
}

//async await
async function getpeopleData(){
    let data=await fetch(url);
    let resultData=await data.json();
    showPeopleData(resultData);
}
getpeopleData();    