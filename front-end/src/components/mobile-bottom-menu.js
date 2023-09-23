import '../styles/mobile-bottom-menu.scss';
import React from 'react';
// import P1dot2 from '../assets/imgs/product1.2.jpg';
function NavBottom() {
    return (
        <div className='mobile-bottom-menu'>
            <div className='mobile-bottom-menu__wrapper'>
                <nav className='mobile-menu'>
                    <ul>
                        <li>
                            <i className="bi bi-house"></i>
                            <span>home</span>
                        </li>
                        <li>
                            <i className="bi bi-funnel"></i>
                            <span>filter</span>
                        </li>
                        <li>
                            <i className="bi bi-search"></i>
                            <span>search</span>
                        </li>
                        <li>
                            <i className="bi bi-person"></i>
                            <span>account</span>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
export default NavBottom