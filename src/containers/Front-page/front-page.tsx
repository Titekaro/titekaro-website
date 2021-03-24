import React from 'react';
import './front-page.module.scss';

import NavBar from "../../components/Navbar/Navbar";
import Intro from "../../components/Intro/Intro";

const frontPage: React.FC = () => {
    return (
        <React.Fragment>
            <header>
                <NavBar/>
            </header>
            <main>
                <header className="header">
                    <div className="container">
                        <Intro/>
                    </div>
                </header>
            </main>
            <footer>
            </footer>
        </React.Fragment>
    )
};

export default frontPage;
