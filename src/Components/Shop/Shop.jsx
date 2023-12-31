import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(rest => rest.json())
            .then(data => setProducts(data))
    }, [])
    useEffect(() => {
        const savedCart = [];
        const storedCart = getShoppingCart();
        console.log(storedCart);
        for (const id in storedCart) {
            const addedProduct = products.find(pd => pd.id === id)
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
        const exist = cart.find(pd => pd.id === product.id);
        if (!exist) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else {
            exist.quantity += 1;
            const remaining = cart.filter(pd => pd.id != product.id);
            newCart = [...remaining, exist];
        }


        addToDb(product.id);
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

                    products.map(product => <Product product={product} key={product.id} handleCartToAdd={handleCartToAdd}  ></Product>)
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