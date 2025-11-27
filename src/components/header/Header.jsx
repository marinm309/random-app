import './header.css'

function Header(){
    return(
        <header className='header-wrapper'>
            <div className='hamburger-menu'>
                <i class="fa-solid fa-bars"></i>
            </div>
            <div className='logo-wrapper'>
                <img src='/logo-placeholder.jpg' alt='LOGO' />
            </div>
            <div className='search-wrapper'>
                <input type="text" />
                <button><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <div className='toolbox-wrapper'>
                <div className='myaccount-wrapper'>
                    <a href="/">
                        <i class="fa-regular fa-user"></i>
                        <span>
                            <p>My account</p>
                            <i class="fa-solid fa-caret-down"></i>
                        </span>
                    </a>
                </div>
                <div className='favorites-wrapper'>
                    <a href="/">
                        <i class="fa-regular fa-heart"></i>
                        <span>
                            <p>Favorites</p>
                            <i class="fa-solid fa-caret-down"></i>
                        </span>
                    </a>
                </div>
                <div className='cart-wrapper'>
                    <a href="/">
                        <i class="fa-solid fa-basket-shopping"></i>
                        <span>
                            <p>My cart</p>
                            <i class="fa-solid fa-caret-down"></i>
                        </span>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header