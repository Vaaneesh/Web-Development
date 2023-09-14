let productId=document.querySelector("#productID");
let name=document.querySelector("#productName");
let category=document.querySelector("#Category");
let quantity=document.querySelector("#Quantity");
let price=document.querySelector("#price");
let form=document.querySelector(".productForm");

form.addEventListener("submit",function(ev){
    ev.preventDefault();
    let productData=localStorage.getItem("products")|| [];
    if(productData.length>0){
        productData=JSON.parse(productData);
    }
    productData.forEach((product,idx)=>{
        if(product.productId==productId.value){
            productData[idx].quantity+=quantity.value;
        }
    })
    let newProduct={productId:productId.value,name:name.value,category:category.value,quantity:quantity.value,price:price};
    productData.push(newProduct);
    localStorage.setItem("products",JSON.stringify(productData));
    form.reset();
})