import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(rest => rest.json())
        .then(data =>setProducts(data))
    },[])
    const handleCartToAdd=(product) =>{
        console.log(product);
        const newCart=[...cart,product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>

            <div className="product-container">
                {/* <h2>product from here length id: {products.length}</h2> */}
                {
                
                    products.map(product => <Product  product={product}  key={product.id}  handleCartToAdd={handleCartToAdd}  ></Product>)
                }
            

            </div>
            <div className="cart-container">
                <h2>cart container</h2>
                <p>order summary:{cart.length}</p>

            </div>
        </div>
    );
};

export default Shop;