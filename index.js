// const setAge = () =>{
//     localStorage.setItem('age', 21)
// }

// product key and value add
const addProduct = () =>{
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';


    console.log(product, quantity)
    displayProduct(product, quantity)
    saveProductToLocalStorage(product, quantity)
}

// product value and key display show
const displayProduct = (product, quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;
    productContainer.appendChild(li);
}

// local storage e cart item check
const getStoredShoppingCart = () =>{
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
        return cart;
    
}

// local storage product save 
const saveProductToLocalStorage = (product, quantity) =>{
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    console.log(cart)
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringify)


}

// local storage product display show
const displayProductsFromLocalStorage = () =>{
    const savedCart = getStoredShoppingCart();
    console.log(savedCart);
    for(const product in savedCart){
        const quantity = savedCart[product];
        console.log(product, quantity)
        displayProduct(product, quantity)
    }
}

displayProductsFromLocalStorage();