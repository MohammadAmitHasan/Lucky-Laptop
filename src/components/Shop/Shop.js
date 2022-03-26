import React, { useEffect, useState } from 'react';
import SelectedProduct from '../SelectedProduct/SelectedProduct';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState([]);
    const [chosenItem, setChosenItem] = useState({});

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    // add to cart button handler
    const addToCart = product => {
        const newCart = [...selectedProduct, product];
        setSelectedProduct(newCart);
    }

    // Clear Cart button handler
    const clearCart = () => {
        setSelectedProduct([]);
    }

    // Random product selection button handler
    const selectRandomOne = () => {
        const random = Math.floor(Math.random() * selectedProduct.length);
        setChosenItem(selectedProduct[random]);
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

            {/* Selected Product */}
            <div className='col col-12 col-md-5 col-lg-4 col-xl-3 order-1 order-md-2' id='cart'>
                <SelectedProduct
                    cart={selectedProduct}
                    chosenItem={chosenItem}
                    clearCart={clearCart}
                    selectRandomOne={selectRandomOne}
                ></SelectedProduct>
            </div>
        </div>
    );
};

export default Shop;