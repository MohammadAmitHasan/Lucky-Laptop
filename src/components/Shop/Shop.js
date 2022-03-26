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

    // Clear Cart button handler
    const clearCart = () => {
        setCart([]);
    }

    return (
        <div className='row container-fluid pe-0'>
            <div className='col col-12 col-md-7 col-lg-8 col-xl-9 order-2 order-md-1'>
                <h3 className='text-center my-3'>Best Products</h3>
                <div className='row row-cols-1 row-cols-sm-2 row-cols-xl-3 g-4' id='product-container'>
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
            <div className='col col-12 col-md-5 col-lg-4 col-xl-3 order-1 order-md-2' id='cart'>
                <Cart
                    cart={cart}
                    clearCart={clearCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;