import React from 'react';
import CartItem from '../CartItem/CartItem';
import './SelectedProduct.css';


const SelectedProduct = ({ selectedProducts, clearCart, selectRandomOne, deleteItem }) => {

    return (
        <div id='selected-items-container'>
            <h4 className='my-4 text-center'>Selected Products</h4>
            {
                selectedProducts.map(cartItem => <CartItem
                    key={cartItem.id}
                    cartItem={cartItem}
                    deleteItem={deleteItem}
                ></CartItem>)
            }

            <div className='text-center'>
                {/* Select 1 random item button */}
                <button className='btn btn-success my-2' onClick={selectRandomOne}>
                    <a id='go-to-random' href="#random-item-container">Choose 1 For me</a>
                </button>
                <br />
                {/* Clear cart button */}
                <button className='btn btn-danger' onClick={clearCart}>Clear Cart</button>
                <br />
            </div>
        </div>
    );
};

export default SelectedProduct;