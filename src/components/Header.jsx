import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '@context/providers/AppContext';

import '@styles/components/Header.styl';

import logo from '@assets/logo.png';

const Header = () => {
  const { cart } = useAppContext();
  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">
          <img src={logo} alt="Logo" />
          Platzi Store
        </Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket" />
        </Link>
        {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
      </div>
    </div>
  );
};

export default Header;
