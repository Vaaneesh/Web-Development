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
        // if(true){
        //     return reject("Cooking nhi hogi!!");
        // }
        setTimeout(() => {
            resolve("Cooking hori bhut bayankr");
        }, 2000);  
    })
}
// 1) sync
//chopping("Potato",30).then((data) => {
//     console.log(data);
//     return cooking(data);
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// });

//2)async /await
async function myTask(){
    let data=await chopping("onion",75);  //await is always used with async func
    console.log(data);
    let data2=await cooking(data);
    console.log(data2);
}
myTask();

//3) try{}catch(){}block
async function myTask(){
    try{
        let data=await chopping("onion",75);  //await is always used with async func
        console.log(data);
        let data2=await cooking(data);
        console.log(data2);
    }
    catch(err){
        console.log(err);
    }
}
myTask();