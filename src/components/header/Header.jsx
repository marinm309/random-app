import './header.css'
import { useState } from "react";
import MobileMenu from './MobileMenu';

function Header(){

    const [showMobileMenu, setShowMobileMenu] = useState(false)

    return(
        <header className='header-wrapper'>
            {showMobileMenu ? <MobileMenu setShowMobileMenu={setShowMobileMenu} /> : ''}
            <div className='hamburger-menu'>
                <i className="fa-solid fa-bars" onClick={() => setShowMobileMenu(prev => !prev)}></i>
            </div>
            <div className='logo-wrapper'>
                <img src='/logo-placeholder.jpg' alt='LOGO' />
            </div>
            <div className='search-wrapper'>
                <input type='text' placeholder='Search Name' name='search' />
                <button><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <div className='toolbox-wrapper'>
                <div className='myaccount-wrapper'>
                    <a href="/">
                        <i className="fa-regular fa-user"></i>
                        <span>
                            <p>My account</p>
                            <i className="fa-solid fa-caret-down"></i>
                        </span>
                    </a>
                </div>
                <div className='favorites-wrapper'>
                    <a href="/">
                        <i className="fa-regular fa-heart"></i>
                        <span>
                            <p>Favorites</p>
                            <i className="fa-solid fa-caret-down"></i>
                        </span>
                    </a>
                </div>
                <div className='cart-wrapper'>
                    <a href="/">
                        <i className="fa-solid fa-basket-shopping"></i>
                        <span>
                            <p>My cart</p>
                            <i className="fa-solid fa-caret-down"></i>
                        </span>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header