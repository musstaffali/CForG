import React from "react"
import logo from "../images/CfGLogoWhite.png"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <div className="logowrap">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <p>&copy; 2020 Code for Greensboro</p>
      </div>
      <FooterNav />
    </footer>
  )
}

const FooterNav = () => (
  <nav className="footer-nav">
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
      className="navbar-item"
    >
      CODE FOR AMERICA
    </a>
  </nav>
)

export default Footer
