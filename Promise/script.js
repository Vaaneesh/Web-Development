//create
function kalsepinaband(){
    return new Promise(function(resolve,reject){
        resolve("Thik hai bhai chodh di");
    })
    ;
}
//consume
//1.then
let p=kalsepinaband();
console.log(p);
p.then(
    function(){
        
    },
    function(){

    }
)