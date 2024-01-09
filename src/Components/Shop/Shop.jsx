import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { Link, useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const  productLength =useLoaderData();
    console.log(productLength);
    useEffect(() => {
        fetch('http://localhost:7000/products')
            .then(rest => rest.json())
            .then(data => setProducts(data))
    }, [])
    useEffect(() => {
        const savedCart = [];
        const storedCart = getShoppingCart();
        console.log(storedCart);
        for (const id in storedCart) {
            const addedProduct = products.find(pd => pd._id === id)
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                console.log(addedProduct);
                savedCart.push(addedProduct);


            }
        }
        setCart(savedCart);
    }, [products]

    )
    const handleCartToAdd = (product) => {
        // console.log(product);
        // const newCart=[...cart,product];

        // if exist product.quantity=1
        // if not  the product.quantity+=1;
        let newCart = [];
        const exist = cart.find(pd => pd._id === product._id);
        if (!exist) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else {
            exist.quantity += 1;
            const remaining = cart.filter(pd => pd._id != product._id);
            newCart = [...remaining, exist];
        }


        addToDb(product._id);
        setCart(newCart);
    }
    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>

            <div className="product-container">
                {/* <h2>product from here length id: {products.length}</h2> */}
                {

                    products.map(product => <Product product={product} key={product._id} handleCartToAdd={handleCartToAdd}  ></Product>)
                }


            </div>
            <div className="cart-container">
                <Cart cart={cart} handleClearCart={handleClearCart}>
                    <Link to="/order" className='link-text'><button className='btn-procced-cart2'>Review Orders
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button></Link>                </Cart>


            </div>
        </div>
    );
};

export default Shop;