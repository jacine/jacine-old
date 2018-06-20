import React from 'react'
import Link from 'gatsby-link'
import Logo from '../../../static/logo.svg'
import './header.scss'

const Header = () => (
  <header className="header" role="banner">
    <div className="container">
      <h1 className="header__title">
        <Link to="/">
          <img src={Logo} alt="Jacine Luisi" />
        </Link>
      </h1>
      <nav role="navigation" className="nav nav--header">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav__item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header
