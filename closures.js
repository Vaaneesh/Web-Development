function outer(){
    var a=10;
    function inner(){
        a++;
        console.log(a);
    }
    return inner;
}
let f1=outer();
let f2=outer();
// console.log(f1);
f1();
f1();
f1(); //means closure mei agr value change hogi toh maintain rhegi value. e.g- 11,12,13;
f2();
f2();
f2();