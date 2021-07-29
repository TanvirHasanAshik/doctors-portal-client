import React from 'react';
import './Navbar.css';
const Navbar = () => {
    return (
        <nav class=" navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item ">
                            <a className="nav-link active" aria-current="page" href="/home">Home</a>
                        </li>
                        <li class="nav-item ">
                            <a className="nav-link" href="/appointment">Appointment</a>
                        </li>
                        <li class="nav-item ">
                            <a className="nav-link" href="/dentalServices">Dental Services</a>
                        </li>
                        <li class="nav-item ">
                            <a className="nav-link text-white" href="/review">Review</a>
                        </li>
                        <li class="nav-item ">
                            <a className="nav-link text-white" href="/doctor/appointment">Dashboard</a>
                        </li>
                        <li class="nav-item ">
                            <a className="nav-link text-white" href="/contact">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;