function chopping(veg,quality){
    return new Promise((resolve,reject)=>{
        if(quality<50){
            return reject("Lode veges jada de!!");
        }
        setTimeout(() => {
            let choppedVeg=veg+" chopped ";
            resolve(choppedVeg+"hori bhut bayankr");
        }, 2000);
    })
}
function cooking(choppedVeg){
    return new Promise((resolve, reject) => {
        if(true){
            return reject("Cooking nhi hogi!!");
        }
        setTimeout(() => {
            resolve("Cooking hori bhut bayankr");
        }, 2000);  
    })
}
chopping("Potato",30).then((data) => {
    console.log(data);
    return cooking(data);
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
});