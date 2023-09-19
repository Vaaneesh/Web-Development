let url="https://jsonplaceholder.typicode.com/todos/1";
fetch(url).then((data)=>{
    return data.json();
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})

async function getData(){
    let data=await fetch(url);
    let resultData=await data.json();
    // data.json();

}