let h2=document.querySelector(".time");
let time=new Date();
time=time.toLocaleTimeString();
h2.innerText=time;
console.log(time.toLocaleString());