let productData=localStorage.getItem("products");
if(productData){
    productData=JSON.parse(productData);
    container.innerHTML="";
    productData.forEach(product=> {
        console.log(product);
        let productId=product.productId;
        let name=product.name;
        let category=product.category;
        let quantity=product.quantity;
        let price=product.price;
        createProduct(productId,name,category,quantity,price);
    });
}
function createProduct(pId,n,c,q,p){
    let div=document.createElement("div");
    div.classList.add("productContainer");
    div.innerHTML=`
    <div class="pID">${pId}</div>
    <div class="name">${n}</div>
    <div class="category">${c}</div>
    <div class="quantity">${q}</div>
    <div class="price">${p}</div>`
    container.append(div);
}