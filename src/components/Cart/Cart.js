import React from 'react';
import CartItem from '../CartItem/CartItem';
import './Cart.css';

const Cart = ({ cart }) => {
    return (
        <div>
            <h4 className='text-center my-4'>Selected Products</h4>
            {
                cart.map(cartItem => <CartItem
                    key={cartItem.id}
                    cartItem={cartItem}
                ></CartItem>)
            }
        </div>
    );
};

export default Cart;