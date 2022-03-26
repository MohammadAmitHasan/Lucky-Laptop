import React from 'react';
import './CartItem.css';

const CartItem = ({ cartItem }) => {
    const { img, name } = cartItem;
    return (
        <div className='cart-item'>
            <img src={img} alt="" />
            <p>{name}</p>
        </div>
    );
};

export default CartItem;