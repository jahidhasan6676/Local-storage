// products key and value add
const addProducts = () =>{
    const productInputField = document.getElementById("product-name");
    const quantityInputField = document.getElementById('product-quantity');
    const productValue = productInputField.value;
    const quantityValue = quantityInputField.value;
    productInputField.value = '';
    quantityInputField.value ='';
    
    displayShowProducts(productValue, quantityValue);
    saveProductLocalStorage(productValue, quantityValue);
    // console.log(productValue, quantityValue);
}

// display show products
 const displayShowProducts = (productValue, quantityValue) =>{
    console.log(productValue, quantityValue)
    const productList = document.getElementById('product-list');
    const li = document.createElement('li');
    li.innerText = `${productValue}: ${quantityValue}`;
    productList.appendChild(li)
}

// get local storage cart
const getShoppingCart = () =>{
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart)
    }
    return cart;
}

// save local storage product data
const saveProductLocalStorage = (productValue, quantityValue) =>{
    const cart = getShoppingCart();
    cart [productValue] = quantityValue;
    const stringified = JSON.stringify(cart);
    localStorage.setItem('cart', stringified)
    
}

// display show product list from local storage
const displayShowProductListFromLocalStorage = () =>{
    const saveCart = getShoppingCart();
    for(const product in saveCart){
        const quantity = saveCart[product];
        console.log(product, quantity)
    }

}
displayShowProductListFromLocalStorage();