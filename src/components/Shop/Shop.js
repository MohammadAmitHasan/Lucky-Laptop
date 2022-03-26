import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    // add to cart button handler
    const addToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='row container-fluid pe-0'>
            <div className='col col-8 col-lg-9'>
                <h3 className='text-center my-3'>Best Products</h3>
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4' id='product-container'>
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            addToCart={addToCart}
                        ></Product>)
                    }
                </div>
            </div>

            {/* cart */}
            <div className='col col-4 col-lg-3' id='cart'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;