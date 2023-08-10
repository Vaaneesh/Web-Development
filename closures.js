function outer(){
    var a=10;
    function inner(){
        a++;
        console.log(a);
    }
    return inner;
}
let f1=outer();
console.log(f1);