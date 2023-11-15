import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart);
let total=0;
let shipping=0;
let quantity=0;
for(const product of cart)
{  
    product.quantity=product.quantity || 1; 
     quantity += product.quantity;
    total += product.price;
    shipping += product.shipping;


}
let tax=total * 0.7;
let grandTotal= tax + total + shipping ;



    return (
        <div className='cart'>
              <h2>Order Summary</h2>
                <p>Selectred item:{quantity}</p>
                <p>Total Price:{total}</p>
                <p>Total shipping:{shipping}</p>
                <p>Tax:{tax.toFixed(2)}</p>
                <h6>Grand Total: ${grandTotal}</h6>
              
        </div>
    );
};

export default Cart;