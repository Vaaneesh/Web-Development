//create
function kalsepinaband(){
    return new Promise(function(resolve,reject){
        let accountBalance=11000;
        if(accountBalance<10000){
            resolve("Thik hai bhai chodh di "+accountBalance);
        }
        else{
            reject("control kr bhai");
        }
    })
    ;
}
//consume
//1.then
let p=kalsepinaband();
// console.log(p);


// p.then(
//     function(msg){
//         console.log(msg);
//     },
//     function(msg){
//         console.log(msg);
//     }
// )

//              or

// kalsepinaband().then(
//     function(msg){
//         console.log(msg);
//     },
//     function(msg){
//         console.log(msg);
//     }
// )

//2. then().catch()
kalsepinaband().then((msg)=>{
    console.log(msg);
}).catch(err=>console.log(err)); //then mei resolve jayega and catch mei reject part
