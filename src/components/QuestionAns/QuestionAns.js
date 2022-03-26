import React from 'react';

const QuestionAns = () => {
    return (
        <div className='container my-5'>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card border-0 shadow p-3">
                        <div class="card-body">
                            <h5 class="card-title">1. How does react work.?
                            </h5>
                            <p class="card-text">
                                React creates a virtual Dom while rendering a web page and keeps it in the memory. The virtual Dom is a virtual representation of the UI. When any change occurs, react creates a new virtual dom.
                                <br /><br />
                                Then react compares the new virtual dom with the previous one and find the changes. This process is done with the react Diff algorithm.
                                <br /><br />
                                After that, react renders only the changed portion in the UI.

                            </p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card border-0 shadow p-3">
                        <div class="card-body">
                            <h5 class="card-title">Props vs state
                            </h5>
                            <p class="card-text">
                                * Props are used to send data to a child node where state is used to maintain states of a website.
                                <br /><br />
                                * Props are immutable that means it is read only. so it cannot be modified but state is mutable hence it could be changed by interactions.
                                <br /><br />
                                The block of courts used for changing a state is called stateful component were state is sent we are props is called stateless component because it does not have any state of its own.

                            </p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card border-0 shadow p-3">
                        <div class="card-body">
                            <h5 class="card-title">How does useState() work?</h5>
                            <p class="card-text">
                                The useState() is a default function of react to handle the states of a website built using react. It returns a variable that contains the state value and a function called dispatcher to modify the state value.
                                <br /><br />
                                When the dispatcher function is called with a state value the function checks whether the value has changed or not. If the new value remains the same it does not do anything. If a modified state value is given then the dispatcher renders the new value on the UI.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionAns;