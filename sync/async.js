console.log("Hi");
function wait(){
    console.log("Inside Loop");
    let currentTime=new Date().getTime();
    while(currentTime+5000>new Date().getTime()){
        
    }
};
//2000 means 2 sec
setTimeout(wait,2000);

console.log("Function be baad");
console.log("yooo");
console.log("sup");
sub(20,5);
function sub(c,d){
    console.log(c-d);
}