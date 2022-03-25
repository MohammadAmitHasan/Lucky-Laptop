import React from 'react';
import './Product.css';

const Product = ({ product }) => {
    const { img, name, price } = product;
    console.log(img)
    return (
        <div className='col'>
            <div className="card h-100">
                <img className="card-img-top" src={img} alt="" />
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <p className="card-text">Price: {price}</p>
                </div>

                <button className='add-cart-btn'>Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;