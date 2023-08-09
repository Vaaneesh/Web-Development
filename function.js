function add(a,b){
    return a+b;
}
console.log(add(10,20));
var sub=function(a,b){
    return a-b;
}
console.log(sub(10,20));

var a=10;
function foo(){
    console.log(a);
    var a=20;
    function foo1(){
        a++;
        console.log(a);
        var a=30;
        console.log(a);
    }
    foo1();
}
foo();