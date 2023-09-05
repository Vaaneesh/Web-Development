//yeh hrbaar particular time ke baad print krvata hai
let returnValue=setInterval(()=>{
    console.log("Inside SetInterval");
},2000)
console.log(returnValue);
let second=setInterval(() => {
    console.log("Inside second")
}, 20);
// console.log(second);
// clearInterval(returnValue);
setTimeout(()=>{
    clearInterval(returnValue);
},5000);

setTimeout(() => {
    clearInterval(second);
}, 5000);
clearInterval(second);
// let foo=sub(20,5);