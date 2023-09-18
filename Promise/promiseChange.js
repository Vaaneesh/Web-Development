function chopping(veg){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let choppedVeg=veg+" chopped ";
            resolve(choppedVeg+"hori bhut bayankr");
        }, 2000);
    })
}
function cooking(choppedVeg){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Cooking hori bhut bayankr");
        }, 2000);  
    })
}
chopping("Potato").then((data) => {
    console.log(data);
    return cooking(data);
}).then((data)=>{
    console.log(data);
})