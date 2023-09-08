function starter(cb){
    console.log("starter order");
    setTimeout(() => {
        console.log("starter eaten");
        cb(maincourse);//callback function for next function to run
    }, 2000);
}
function drinks(cb){
    console.log("Drinks order");
    setTimeout(() => {
       console.log("Drinks given") 
       cb(desert);
    }, 1000);
}
function maincourse(cb){
    console.log("Main course order");
    setTimeout(()=>{
        console.log("Main course eaten");
        cb(bill);
    },4000);
}
function desert(cb){
    console.log("desert order");
    setTimeout(() => {
        console.log("Desert given!!");
        cb();
    }, 5000);
}
function bill(cb){
    console.log("Bill given");
    setTimeout(()=>{
        console.log("bill paid");
    },1200);
}
starter(drinks);