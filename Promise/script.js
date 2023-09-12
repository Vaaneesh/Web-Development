//create
function kalsepinaband(){
    return new Promise(function(resolve,reject){
        let accountBalance=12000;
        if(accountBalance<10000){
            resolve("Thik hai bhai chodh di");
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
p.then(
    function(msg){
        console.log(msg);
    },
    function(msg){
        console.log(msg);
    }
)