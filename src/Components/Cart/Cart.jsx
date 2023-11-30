import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart,handleClearCart,children}) => {
    console.log(cart);
let total=0;
let shipping=0;
let quantity=0;
for(const product of cart)
{  
    // product.quantity=product.quantity || 1; 
     quantity += product.quantity;
    total += product.price * product.quantity;
    shipping += product.shipping;


}
let tax=total * 0.7;
let grandTotal= tax + total + shipping ;



    return (
        <div className='cart'>
              <h2>Order Summary</h2>
                <p>Selected item:{quantity}</p>
                <p>Total Price:{total}</p>
                <p>Total shipping:{shipping}</p>
                <p>Tax:{tax.toFixed(2)}</p>
                <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
                <button onClick={handleClearCart} className='btn-clear-cart'>Clear Cart
                <FontAwesomeIcon  icon={faTrashAlt} />

                </button>
                {children}
              
        </div>
    );
};

export default Cart;