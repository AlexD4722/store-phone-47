import React from "react";
import { Link } from "react-router-dom";
import "../styles/site-menu.scss";
import "../styles/wrap-header.scss";
import "../styles/index.scss";

function SiteMenu() {
    return (
        <nav className="wrapper-menu">
            <div className="xo-container">
                <ul className="site-menu">
                    <li className="site-menu__item">
                        <div className="site-menu__name-item">
                            <Link to="/">Home</Link>
                        </div>
                    </li>
                    <li className="site-menu__item">
                        <div className="site-menu__icon-item">
                            <i className="bi bi-phone"></i>
                        </div>
                        <div className="site-menu__name-item">
                            <Link to="search/phone">cell phone</Link>
                        </div>
                        <ul className="site-menu__menu-sub">
                            <li>iphone</li>
                            <li>samsung</li>
                            <li>xiaomi</li>
                        </ul>
                    </li>
                    <li className="site-menu__item">
                        {/* <div className='site-menu__icon-item'>
                            <i className="bi bi-file-spreadsheet"></i>
                        </div> */}
                        <div className="site-menu__name-item">
                            <Link to="search/tablet">Tablet</Link>
                        </div>
                        <ul className="site-menu__menu-sub">
                            <li>iphone</li>
                            <li>samsung</li>
                            <li>xiaomi</li>
                        </ul>
                    </li>
                    <li className="site-menu__item">
                        <div className="site-menu__icon-item">
                            <i className="bi bi-headphones"></i>
                        </div>
                        <div className="site-menu__name-item">
                            <Link to="search/Accessories">Accessories</Link>
                        </div>
                    </li>
                    <li className="site-menu__item">
                        <div className="site-menu__icon-item">
                            <i className="bi bi-smart watch"></i>
                        </div>
                        <div className="site-menu__name-item">
                            <Link to="search/SmartWatch">Smart Watch</Link>
                        </div>
                    </li>
                    <li className="site-menu__item">
                        <div className="site-menu__name-item">
                            <Link to="blog">Blog</Link>
                        </div>
                    </li>
                    <li className="site-menu__item">
                        <div className="site-menu__name-item">
                            <Link to="contact">Contact</Link>
                        </div>
                    </li>
                    <li className="site-menu__item">
                        <div className="site-menu__name-item">
                            <Link to="/searchReceipt">Search Receipt</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default SiteMenu;
