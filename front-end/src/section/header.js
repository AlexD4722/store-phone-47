import { useEffect } from 'react';
import Addons from '../components/addons';
import LogoShop from '../components/logo';
import LogoShopLight from '../components/logo-light';
import FormSearch from '../components/form-search';
import '../styles/wrap-header.scss'
import '../styles/index.scss';

function Header() {
    function handleOpenMenuExtend() {
        const layout = document.querySelector(".wrapper-header-layout");
        const menuExtend = document.querySelector(".wrapper-header-menu-extend");
        layout.style.display = "block";
        menuExtend.style.transform = "translateX(0)";
    }
    function handleCloseMenuExtend() {
        const layout = document.querySelector(".wrapper-header-layout");
        const menuExtend = document.querySelector(".wrapper-header-menu-extend");
        layout.style.display = "none";
        menuExtend.style.transform = "translateX(-100%)";
    }
    useEffect(() => {
        const btnItem = document.getElementsByClassName("wrapper-header-menu-extend__btn-item");
        const menuExtend = document.getElementsByClassName("wrapper-header-menu-extend__menu-sub");
        for (let i = 0; i < btnItem.length; i++) {
            btnItem[i].addEventListener('click',() =>{
                console.log("this is running");
                if (menuExtend[i].style.height === "0px") {
                    menuExtend[i].style.height = "auto";
                    console.log("this is running");
                }
                else{
                    menuExtend[i].style.height = "0px";
                    console.log("this is running222222");
                }
            });
        }
    }, []);
    return (
        <header className='box-header'>
            <div className='xo-container'>
                <div className='wrapper-header wrapper-header--tablet'>
                    <LogoShop />
                    <FormSearch />
                    <Addons />
                </div>
                <div className='wrapper-header-mobile'>
                    <div onClick={handleOpenMenuExtend} className='wrapper-header-mobile__btn-toggle-open'>
                        <i className="bi bi-list"></i>
                    </div>
                    <LogoShop />
                    <div className="header-addons__icon">
                        <i className="bi bi-cart"></i>
                        <span className='header-addons__icon-quantity'>
                            <span className='header-addons__icon-quantity-detail header-addons__icon-quantity-detail--cart'>
                                0
                            </span>
                        </span>
                    </div>
                </div>
                <div onClick={handleCloseMenuExtend} className='wrapper-header-layout'>
                </div>
                <div className='wrapper-header-menu-extend'>
                    <div className='wrapper-header-menu-extend__row wrapper-header-menu-extend__row--header'>
                        <LogoShopLight />

                        <div onClick={handleCloseMenuExtend} className='wrapper-header-menu-extend__btn-close-menu'>
                            <i className="bi bi-x"></i>
                        </div>
                    </div>
                    <div className='wrapper-header-menu-extend__row wrapper-header-menu-extend__row--item'>
                        <ul className='wrapper-header-menu-extend__wrapper-menu'>
                            <li className='wrapper-header-menu-extend__item-menu'>
                                <div className='wrapper-header-menu-extend__btn-item'>
                                    <span className='wrapper-header-menu-extend__name-item'>home</span>
                                    <i className="bi bi-chevron-down"></i>
                                </div>
                                <ul className='wrapper-header-menu-extend__menu-sub'>
                                    <li>iphone</li>
                                    <li>samsung</li>
                                    <li>xiaomi</li>
                                </ul>
                            </li>
                            <li className='wrapper-header-menu-extend__item-menu'>
                                <div className='wrapper-header-menu-extend__btn-item'>
                                    <span className='wrapper-header-menu-extend__name-item'>home</span>
                                    <i className="bi bi-chevron-down"></i>
                                </div>
                                <ul className='wrapper-header-menu-extend__menu-sub'>
                                    <li>iphone</li>
                                    <li>samsung</li>
                                    <li>xiaomi</li>
                                </ul>
                            </li>
                            <li className='wrapper-header-menu-extend__item-menu'>
                                <div className='wrapper-header-menu-extend__btn-item'>
                                    <span className='wrapper-header-menu-extend__name-item'>home</span>
                                    <i className="bi bi-chevron-down"></i>
                                </div>
                                <ul className='wrapper-header-menu-extend__menu-sub'>
                                    <li>iphone</li>
                                    <li>samsung</li>
                                    <li>xiaomi</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
