/**************************************************************************************************
 * Copyright (c) 2022 Justin Erdmier - All Rights Reserved                                        *
 * Licensed under the MIT License - See LICENSE in repository root.                               *
 **************************************************************************************************/

import logo from './images/logo.svg';
import './index.css';

function Header() {
    return (
        <header>
            <nav className='nav'>
                <img src={logo} className='app-logo' alt='logo' />
                <ul className='nav-items'>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
