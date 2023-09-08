function chopping(cb){
    console.log("sabzi katna shuru");
    setTimeout(() => {
        console.log("sabzi kat gyi");
        cb(roti);//callback function for next function to run
    }, 4000);
}
function cooking(cb){
    console.log("Sabzi banna start");
    setTimeout(() => {
       console.log("Sabzi banna khtm") 
       cb(serve);
    }, 3000);
}
function roti(cb){
    console.log("roti banna shuru");
    setTimeout(()=>{
        console.log("Roti banana khtm");
        cb();
    },4000);
}
function serve(){
    console.log("Serving start");
    setTimeout(() => {
        console.log("Serve hogya!!");
    }, 1000);
}
chopping(cooking);
// cooking();
// roti();
// serve();