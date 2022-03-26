import React from 'react';
import './RandomProduct.css'

const RandomProduct = ({ chosenItem, removeGivenProduct }) => {
    const { img, name, price } = chosenItem ? chosenItem : '';
    // give warning if no data in the cart

    if (price) {
        return (
            <div className='shadow col-12 col-sm-8 col-md-6 mx-auto text-center p-3 pb-4 mb-3' id='random-item-container'>
                {/* Random product display section */}
                <h3>Chosen For You</h3>
                <img className='w-75' src={img} alt="" />
                <h4 className='my-2'>{name}</h4>
                <h5>Price: {price}</h5>
                <button onClick={removeGivenProduct} className='btn btn-danger'>Remove</button>
            </div>
        );
    }
    else {
        return (
            <div></div>
        )
    }


};

export default RandomProduct;