import React from 'react';
import { Link } from 'react-router-dom';
import IMG from '../images/download.png'
import './Navbar.css'

const Navbar = () => { 
    return (
        <div className="header">
            <nav class="navbar navbar-expand-lg navbar-light container">
                <div class="container-fluid try">
                    <Link to="/home"><img src={IMG} alt="" /></Link>
                    <div class="" id="navbarSupportedContent">
                        <ul class=" align">
                            <li class="nav-item mr-auto">
                                <Link class="link" to="/profile">Profile</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;