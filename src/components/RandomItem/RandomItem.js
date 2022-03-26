import React from 'react';
import './RandomItem.css';

const RandomItem = ({ selectRandomOne, chosenItem }) => {

    const { img, name, price } = chosenItem ? chosenItem : '';
    return (
        <div>
            <button className='btn btn-success mt-2'
                onClick={selectRandomOne}
                data-bs-toggle="modal"
                data-bs-target="#randomProduct"
            >Select 1 For Me</button>

            {/* Modal containing random selected item */}
            <div class="modal fade" id="randomProduct" tabindex="-1" aria-labelledby="randomProductLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="randomProductLabel">Chosen For You</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <img className='w-50' src={img} alt="" />
                        </div>
                        <h4>{name ? name : 'No product selected yet'}</h4>
                        <h5>Price: {price ? price : '0'}</h5>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default RandomItem;