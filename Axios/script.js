let url="https://jsonplaceholder.typicode.com/todos/1";
// axios.get(url).then((response) => {
//     console.log(response.data);
// })

//async
async function myTask(){
    let response=await axios.get(url)
    console.log(response.data);
}
myTask();