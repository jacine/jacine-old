import React from 'react'
import Link from 'gatsby-link'
import './footer.scss'

const Footer = () => (
  <footer className="footer" role="contentinfo">
    <div className="container">
      <nav className="nav nav--footer">
        <ul className="nav__list">
          <li className="nav__item"><Link to="/archive">Archive</Link></li>
          <li className="nav__item"><a href="https://twitter.com/jacine">Twitter</a></li>
          <li className="nav__item"><a href="https://github.com/jacine">Github</a></li>
        </ul>
      </nav>
    </div>
  </footer>
)


export default Footer
