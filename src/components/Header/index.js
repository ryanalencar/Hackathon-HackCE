import React from 'react';
import { FiSearch } from 'react-icons/fi';

import './styles.css';
import logo from '../../assets/logo.svg';
import userImg from '../../assets/user-img.svg';

const Header = () => (
  <header>
    <div className='logo-area'>
      <div id='logo'>
        <img src={logo} alt='Ecoleta' />
        <p>SOK</p>
      </div>
      <div id='search'>
        <input type='text' />
        <span className='search-icon'>
          <FiSearch />
        </span>
      </div>
    </div>
    <div className='user-area'>
      <p>nome do usuário</p>
      <img src={userImg} alt='aaaa' />
    </div>
  </header>
);

export default Header;
