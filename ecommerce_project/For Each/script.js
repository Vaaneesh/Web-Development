let arr=[1,2,3,4,5];
arr.forEach(myfun);
function myfun(value,index,arr){
    console.log(value);
}

//2
arr.forEach(function (value,index,arr){
    console.log(value);
});
