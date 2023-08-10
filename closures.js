function outer(){
    var a=10;
    function inner(){
        var b=20;
        function innermost(){
            a++;
            b++;
            console.log(a);
            console.log(b);
        }
        return innermost;
    }
    return inner;
}
let f1=outer();
let f2=f1();
// console.log(f1);
// f1();
// f1();
// f1(); //means closure mei agr value change hogi toh maintain rhegi value. e.g- 11,12,13;
// f2();
f2();
f2();