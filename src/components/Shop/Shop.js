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
        <div className='row container-fluid mt-5'>
            <div className='col col-9'>
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                        ></Product>)
                    }
                </div>
            </div>

            {/* cart */}
            <div className='col col-3' id='cart'>
                hasan
            </div>
        </div>
    );
};

export default Shop;