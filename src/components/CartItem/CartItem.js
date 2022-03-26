import React from 'react';
import './CartItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const CartItem = ({ cartItem, deleteItem }) => {
    const { id, img, name } = cartItem;
    return (
        <div className='cart-item d-flex align-items-center my-3 p-2 position-relative'>
            <div className='d-flex align-items-center me-4'>
                <img className='me-2' src={img} alt="" />
                <p className='m-0'>{name}</p>
            </div>
            <span className='position-absolute'>
                <button onClick={() => deleteItem(id)}>
                    <FontAwesomeIcon icon={faTrashCan} /></button>
            </span>
        </div>
    );
};

export default CartItem;