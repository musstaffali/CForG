import React from "react"
import logo from "../images/CfGLogoWhite.png"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer class="footer">
      <div class="content has-text-centered">
        <container className="logowrap">
          <img src={logo} alt="Logo" className="logo" />
        </container>
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
    <Link to="" className="navbar-item">
      {" "}
      E-MAIL US
    </Link>
    <Link to="" className="navbar-item">
      CODE OF CONDUCT
    </Link>
    <Link to="/resources" className="navbar-item">
      RESOURCES
    </Link>
    <Link to="" className="navbar-item">
      CODE FOR AMERICA
    </Link>
  </nav>
)

export default Footer
