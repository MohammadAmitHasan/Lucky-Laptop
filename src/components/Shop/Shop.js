import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='row'>
            <div className='col col-8 col-lg-9'>
                <h3 className='text-center mt-4'>Best Products</h3>
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 ps-3' id='product-container'>
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                        ></Product>)
                    }
                </div>
            </div>

            {/* cart */}
            <div className='col col-4 col-lg-3' id='cart'>
                hasan
            </div>
        </div>
    );
};

export default Shop;