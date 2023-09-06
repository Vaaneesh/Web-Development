// let h2=document.querySelector(".time");
// let time=new Date();
// time=time.toLocaleTimeString();
// h2.innerText=time;
// console.log(time.toLocaleString());
function getTime(){
    var date=new Date();
    var hrs=date.getHours();
    var min=date.getMinutes();
    var sec=date.getSeconds();
    if(hrs>12){
        session.innerHTML="PM";
    }
    else{
        session.innerHTML="AM";
    }
    document.getElementById('hours').innerHTML=hrs;
    document.getElementById('minutes').innerHTML=min;
    document.getElementById('sec').innerHTML=sec;
}
setInterval(getTime,10);