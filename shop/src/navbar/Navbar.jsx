import React, { useState } from 'react';
import "./navbarStyle.css"

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(prevState => !prevState);
    };
  
    const closeMenu = () => {
      setIsMenuOpen(false);
    };



    return (
        <header className='layers'>
            <div className="container"> 
                <nav className="navbar" id='nav-menu'>
                    <a href="/" className="nav-branding">THS</a>
                    <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                        <li className="navItem">
                            <a className='navLink' onClick={closeMenu}>test</a>
                        </li>
                        <li className="navItem">
                            <a className="navLink" onClick={closeMenu}>test2</a>
                        </li>
                        <li className="navItem">
                            <a className="navLink" onClick={closeMenu}>test3</a>
                        </li>
                        <li className="navItem">
                            <a className='navLink' >
                                test4
                            </a>
                        </li>
                    </ul>
                    <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} id='hamburger'>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </nav>
            </div>
        </header>
      );
      
}

export default Header