import { getShoppingCart } from "../utilities/fakedb";

const cartProductLoader =async ()=>{
    const cartLoader= await fetch('http://localhost:7000/products');
    const products= await cartLoader.json();

    let savedCart=[];
    const storedCart= getShoppingCart();
    console.log(storedCart);
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