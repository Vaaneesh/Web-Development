let products=[{
    pname:"mobile",
    pquant:20,
    price:30000
},{
    pname:"Laptop",
    pquant:20,
    price:60000
}]
//add
//always have to convert to json object then only we can add it in local storage
let productsJson=JSON.stringify(products);
localStorage.setItem("products",productsJson);

//get
let productsFromLocal=localStorage.getItem("products");
let productObject=JSON.parse(productsFromLocal);
console.log(productObject);