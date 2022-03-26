import React, { useEffect, useState } from 'react';
import SelectedProduct from '../SelectedProduct/SelectedProduct';
import Product from '../Product/Product';
import './Shop.css';
import RandomProduct from '../RandomProduct/RandomProduct';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [chosenItem, setChosenItem] = useState({});

    // Load data
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    // add to cart button handler
    const addToCart = product => {

        // Get the value if already in selected list
        const productInCart = selectedProducts.find(selectedProduct => selectedProduct.id === product.id);

        // Restricting user to select more than 4 products
        if (selectedProducts.length < 4) {

            // Restricting user to select a product twice
            if (!productInCart) {
                const newCart = [...selectedProducts, product];
                setSelectedProducts(newCart);
            }
            else {
                alert('Already selected');
            }
        }
        else {
            alert('You can select maximum 4 items');
        }

    }

    // Clear Cart button handler
    const clearCart = () => {
        setSelectedProducts([]);
    }


    // Random product selection button handler
    const selectRandomOne = () => {
        const random = Math.floor(Math.random() * selectedProducts.length);
        setChosenItem(selectedProducts[random]);
        // window.scrollTo({
        //     top: 0,
        //     behavior: 'smooth'
        // });
    }

    // Remove the random product
    const removeGivenProduct = () => {
        setChosenItem({});
    }

    // Delete an item from selected list button handler
    const deleteItem = (id) => {
        const restProducts = selectedProducts.filter(selectedProduct => selectedProduct.id !== id);
        setSelectedProducts(restProducts);
    }

    // Random selected data


    return (
        <div className='row container-fluid pe-0 mb-5'>

            <div className='col col-12 col-md-7 col-lg-8 col-xl-9 order-2 order-md-1'>

                <RandomProduct
                    chosenItem={chosenItem}
                    removeGivenProduct={removeGivenProduct}
                ></RandomProduct>

                <h3 className='text-center mb-3 mt-4'>Best Products</h3>
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
                    selectedProducts={selectedProducts}
                    chosenItem={chosenItem}
                    clearCart={clearCart}
                    selectRandomOne={selectRandomOne}
                    deleteItem={deleteItem}
                ></SelectedProduct>
            </div>
        </div>
    );
};

export default Shop;