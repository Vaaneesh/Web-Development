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
    let flag=1;
    productData.forEach((product,idx)=>{
        if(product.productId==productId.value){
            productData[idx].quantity+=quantity.value;
            flag=0;
        }
    })
    if (flag==0){
        localStorage.setItem("products",JSON.stringify(productData));
    }
    else{
        let newProduct={productId:productId.value,name:name.value,category:category.value,quantity:quantity.value,price:price.value};
        productData.push(newProduct);
        localStorage.setItem("products",JSON.stringify(productData));
    }
    form.reset();
})