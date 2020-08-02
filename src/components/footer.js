import React from "react"
import logo from "../images/FooterLogo.png"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className="footer">
      <FooterNav />
      <div className="content has-text-centered">
        <p>&copy; 2020 Code for Greensboro</p>
      </div>
    </footer>
  )
}

const FooterNav = () => (
  <nav className="footer-nav is-flex-tablet">
    <Link to="/" className="navbar-item">
      HOME
    </Link>
    <Link to="/join" className="navbar-item">
      JOIN US
    </Link>
    <a href="mailto:hello@codeforgreensboro.org" className="navbar-item">
      E-MAIL US
    </a>
    <Link to="/conduct" className="navbar-item">
      CODE OF CONDUCT
    </Link>
    <Link to="/resources" className="navbar-item">
      RESOURCES
    </Link>
    <a
      href="https://www.codeforamerica.org/"
      target="_blank"
      rel="noreferrer"
      className="navbar-item"
    >
      CODE FOR AMERICA
    </a>
  </nav>
)

export default Footer
