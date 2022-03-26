import React from 'react';
import CartItem from '../CartItem/CartItem';
import RandomItem from '../RandomItem/RandomItem';
import './SelectedProduct.css';

const SelectedProduct = ({ cart, clearCart, selectRandomOne, chosenItem, deleteItem }) => {
    return (
        <div id='selected-items-container'>
            <h4 className='my-4 text-center'>Selected Products</h4>
            {
                cart.map(cartItem => <CartItem
                    key={cartItem.id}
                    cartItem={cartItem}
                    deleteItem={deleteItem}
                ></CartItem>)
            }

            {/* Select 1 random item button */}
            <RandomItem
                selectRandomOne={selectRandomOne}
                chosenItem={chosenItem}
            ></RandomItem>

            {/* button of Clearing the selected product list */}
            <button className='btn btn-danger mt-3' onClick={clearCart}>Choose Again</button>
        </div>
    );
};

export default SelectedProduct;