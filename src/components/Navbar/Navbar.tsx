import React from 'react';
import styles from './Navbar.module.scss';
import logo from '../../logo.svg';

const Navbar: React.FC = () => (
    <nav className="navbar" data-testid="Navbar">
        <div className="container">
            <a className="navbar-brand" href="./">
                <img src={logo} alt="Logo"/>
            </a>
        </div>
    </nav>
);

export default Navbar;
