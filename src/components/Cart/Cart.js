import React from 'react';
import CartItem from '../CartItem/CartItem';
import RandomItem from '../RandomItem/RandomItem';
import './Cart.css';

const Cart = ({ cart, clearCart, selectRandomOne, chosenItem }) => {
    return (
        <div className='text-center'>
            <h4 className='my-4'>Selected Products</h4>
            {
                cart.map(cartItem => <CartItem
                    key={cartItem.id}
                    cartItem={cartItem}
                ></CartItem>)
            }

            {/* Clear cart button */}
            <button className='btn btn-danger' onClick={clearCart}>Clear Cart</button>
            <br />

            {/* Select 1 random item button */}
            <RandomItem
                selectRandomOne={selectRandomOne}
                chosenItem={chosenItem}
            ></RandomItem>

        </div>
    );
};

export default Cart;