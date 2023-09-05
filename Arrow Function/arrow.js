function sub(c,d){
    console.log(c-d);
}
//arrow function
let sub2=(c,d)=>{
    console.log(c-d);
}

//if single , no parenthesis required
let mul=x=>{
    console.log("Multiply by X");
}

//if only one line of code inside block, no need of curly brackets
let mul2=x=>console.log("Multiply by x");

//if curly brackets hai phir return keyword likhna pdega
let sub3=(c,d)=>{
    return c-d;
}

//if no {}, then there is no need of return keyword
let sub4=(c,d)=>c-d;

//
let add=(a,b,c)=>a+b+c;
console.log(add(2,3,4));