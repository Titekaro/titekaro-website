import React from 'react';
import './Navbar.module.scss';
import {Link} from 'react-router-dom';
import logo from '../../logo.svg';

const Navbar: React.FC = () => (
    <nav className="navbar" data-testid="Navbar">
        <div className="container">
            <Link className="navbar-brand" to="./">
                <img src={logo} alt="Logo"/>
            </Link>
        </div>
    </nav>
);

export default Navbar;
