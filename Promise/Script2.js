function kalsepadhnashuru(){
    return new Promise(function(resolve,reject){
        let marks=1000;
        if(marks>500){
            resolve("bahut shi bro");
        }
        else{
            reject("padhle gandu");
        }
    });
}
let p=kalsepadhnashuru();
p.then(
    function(msg){
        console.log(msg);
    },
    function(msg){
        console.log(msg);
    }
)