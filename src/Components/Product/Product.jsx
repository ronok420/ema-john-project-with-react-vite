import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {img,name,seller,quantity,price,ratings} = props.product;
    const handleCartToAdd= props.handleCartToAdd;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h6 className='product-name'>{name}</h6>
            <div className="product-info">  
                <p>Price:${price}</p>
                <p>Manufacture:${seller}</p>
                <p>Rating:${ratings}</p>

            </div>
            <div className="btn-cart"  onClick={()=>handleCartToAdd(props.product)}>
                Add to cart
                <FontAwesomeIcon icon={faShoppingCart} />
            </div>

        </div>
    );
};

export default Product;