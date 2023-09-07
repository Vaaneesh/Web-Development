// let arr=[1,2,3,4,5];
// arr.forEach(myfun);
// function myfun(value,index,arr){
//     console.log(value);
// }

// //2 using annonymous function
// arr.forEach(function (value,index,arr){
//     console.log(value);
// });
// //3 arrow
// arr.forEach((value)=>{
//     console.log(value);
// })
// //to find sum=>
// let sum=0;
// arr.forEach((value)=>{
//     sum+=value;
// })
// console.log(sum);

///////////////////////////////         MAP             ////////////////////

let arr1=[1,2,3,4,5,6,7];
let mul=arr1.map((val,index,arr1)=>{
    return val*2;
})
console.log(arr1);
console.log(mul);

//filter()
let even_arr=arr1.filter((val,indx,arr)=>{
    if(val%2==0) return val;
})
console.log(even_arr);