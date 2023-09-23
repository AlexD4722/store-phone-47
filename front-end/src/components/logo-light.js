import '../styles/logo.scss'
import LogoShop from '../assets/imgs/logo-light.png'
import React from 'react';
function Logo() {
  return (
    <div className='logo-shop'>
      <img className='logo-shop__detail' src={LogoShop} alt=""/>
    </div>
  );
}

export default Logo;
