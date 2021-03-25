import React from 'react';
import './Navbar.module.scss';
import {Link} from 'react-router-dom';
import logo from '../../logo.svg';
import SocialBar from "../Social-bar/Social-bar";

const Navbar: React.FC = () => (
    <nav className="navbar" data-testid="Navbar">
        <div className="navbar__content container">
            <Link className="navbar-brand" to="./">
                <img src={logo} alt="Logo"/>
            </Link>
            <SocialBar/>
        </div>
    </nav>
);

export default Navbar;
