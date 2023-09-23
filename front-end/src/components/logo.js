import '../styles/logo.scss'
import LogoShop from '../assets/imgs/logo-light.png'
import React from 'react';
import { Link } from 'react-router-dom';
function Logo() {
  return (
    <Link to="/" className='logo-shop'>
      <div>
        <img className='logo-shop__detail' src={LogoShop} alt="" />
      </div>D
    </Link>
  );
}

export default Logo;
