import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Reviewitem = ({product,deleteCartProduct}) => {
    const {id,name,img,quantity,price} =product;

    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-info'>
                <h5 className='product-title'>{name}</h5>
                <h5> price:<span className='orange-text'>${price}</span></h5>
                <h5> order quantity:<span className='orange-text'>{quantity}</span></h5>

            </div>
            <button onClick={()=>deleteCartProduct(id)} className='btn-delete'>
            <FontAwesomeIcon className='dlt-con' icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default Reviewitem;