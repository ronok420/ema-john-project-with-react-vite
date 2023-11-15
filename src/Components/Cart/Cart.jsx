import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
let total=0;
let shipping=0;
for(const product of cart)
{
    total += product.price;
    shipping += product.shipping;


}
let tax=total * 0.7;
let grandTotal= tax + total + shipping ;



    return (
        <div className='cart'>
              <h2>Order Summary</h2>
                <p>Selectred item:{cart.length}</p>
                <p>Total Price:{total}</p>
                <p>Total shipping:{shipping}</p>
                <p>Tax:{tax.toFixed(2)}</p>
                <h6>Grand Total: ${grandTotal}</h6>
              
        </div>
    );
};

export default Cart;