//objects=> combination of key value pairs

let obj={
    key:"value",
    key2:"value2"
}
console.log(obj);

let arr=[1,2,3];
console.log(arr)

//accessing values using dot notation
let details={
    "first":"Vaaneesh",
    second:"Prabhakar"
}
//changing using dot notation
details.first="Vasu"
console.log(details.first)

//deletion using dot notation
delete details.first;
console.log(details.first+' '+details.second)

let sample={
    "": 10,
    ' ':20
}
console.log(sample);
console.log(sample[""]);
console.log(sample[' ']);