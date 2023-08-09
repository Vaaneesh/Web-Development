function outerfun(fun){
    console.log(fun);
    console.log("Inside outerfun"+fun());
}
function anotherfun(){
    console.log("Inside another fun");
}
outerfun(anotherfun);