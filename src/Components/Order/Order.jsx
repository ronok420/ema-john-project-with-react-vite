import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import './Order.css'
import { Link, useLoaderData } from 'react-router-dom';
import Reviewitem from '../ReviewItem/Reviewitem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons'


const Order = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);




    const deleteCartProduct = (id) => {
        console.log(id);
        const deleteCart = cart.filter(pd => pd._id !== id);
        setCart(deleteCart);
        removeFromDb(id);

    }

    // const deleteCartProduct = (id) => {
    //     console.log(id);
    //     const updatedCart = cart.filter((pd) => pd._id !== id);
    //     setCart([...updatedCart]); // Use the spread operator to create a new array reference
    // };

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }


    return (
        <div className='shop-container'>

            <div className="review-container">

                <h2>Distinct Order item:{cart.length} </h2>
                {
                    cart.map(product => <Reviewitem
                        key={product._id} product={product} deleteCartProduct={deleteCartProduct}
                        handleClearCart={handleClearCart}
                    ></Reviewitem>)
                }


            </div>
            <div className="cart-container">
                <Cart cart={cart} handleClearCart={handleClearCart}>
                    <Link to="/checkout" className='link-text'><button className='btn-procced-cart2'>Procced to chekout
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </button></Link>
                </Cart>

             

            </div>
        </div>
    );
};

export default Order;