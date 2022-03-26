import React from 'react';
import CartItem from '../CartItem/CartItem';
import './Cart.css';

const Cart = ({ cart, clearCart }) => {
    return (
        <div className='text-center'>
            <h4 className='my-4'>Selected Products</h4>
            {
                cart.map(cartItem => <CartItem
                    key={cartItem.id}
                    cartItem={cartItem}
                ></CartItem>)
            }
            <button className='btn btn-danger' onClick={clearCart}>Clear Cart</button>
        </div>
    );
};

export default Cart;