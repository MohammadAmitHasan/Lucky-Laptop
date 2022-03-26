import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Laptop House</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item mx-3">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item  mx-3">
                                <a class="nav-link active" aria-current="page" href="#">Products</a>
                            </li>
                            <li class="nav-item  mx-3">
                                <a class="nav-link active" aria-current="page" href="#">About</a>
                            </li>
                            <li class="nav-item mx-3">
                                <a class="nav-link active" aria-current="page" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;