import { getShoppingCart } from "../utilities/fakedb";

const cartProductLoader =async ()=>{
    const storedCart = getShoppingCart();
    const storedCartIds = Object.keys(storedCart)
    console.log( storedCartIds)

    const loadedProducts = await fetch('http://localhost:7000/productByIds', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(storedCartIds)
    });

    const products = await loadedProducts.json();
    
    const savedCart = [];
    for(const id in storedCart){
        const addedProduct=products.find(pd => pd._id === id);
        if(addedProduct){
            const quantity=storedCart[id];
            addedProduct.quantity=quantity;
            savedCart.push(addedProduct);
        }
        // console.log(savedCart);
    }
    return savedCart;
}
export default cartProductLoader;