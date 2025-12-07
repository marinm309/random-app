import { useState } from "react";
import { Link } from 'react-router-dom';

function MobileMenu({ setShowMobileMenu }) {

    const MENU = {
        root: [
            { label: "Computer", next: "computer" },
            { label: "Phones", next: "phones" },
            { label: "Accessories", href: "/accessories" },
        ],
        computer: [
            { label: "Monitors", href: "/computer/monitors" },
            { label: "Mice", href: "/computer/mice" },
            { label: "Keyboards", href: "/computer/keyboards" },
        ],
        phones: [
            { label: "Android", href: "/phones/android" },
            { label: "iPhone", href: "/phones/iphone" },
        ],
    };

    const [stack, setStack] = useState('root');

    return (
        <div className='menu-wrapper'>
            <button className='close-btn' onClick={() => setShowMobileMenu(prev => !prev)}>X</button>
            {stack != 'root' ? <button className='back-btn' onClick={() => setStack('root')}>{'<-'}Main Menu</button> : ''}
            <div className='stack-wrapper'>
                {MENU[stack].map(
                    item => {
                        return item.next ? 
                        (<Link className='stack-item' key={item.label} to='' onClick={() => setStack(item.next)}>{item.label}</Link>)
                        :
                        (<Link className='stack-item' key={item.label} to={item.href}>{item.label}</Link>)
                    }
                )}
            </div>
        </div>
    );
}

export default MobileMenu