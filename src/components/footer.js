import React from "react"
import logo from "../images/FooterLogo.png"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="columns is-mobile">
        <div className="column has-text-centered">
          <img
            className="image has-img-centered"
            src={logo}
            alt="CFGSO Logo"
          ></img>
          <p>&copy; 2020 Code for Greensboro</p>
        </div>
        <div className="column is-narrow">
          <FooterNav />
        </div>
      </div>
    </footer>
  )
}

const FooterNav = () => (
  <nav className="footer-nav">
    <Link to="/join" className="navbar-item">
      Join
    </Link>
    <a
      href="https://www.codeforamerica.org/donate-to-a-brigade?utm_campaign=Code%20for%20Greensboro&utm_source=CodeforGreensboroSite"
      className="navbar-item"
      target="_blank"
      rel="noreferrer"
    >
      Donate
    </a>
    <a
      href="https://github.com/codeforamerica/codeofconduct"
      className="navbar-item"
      target="_blank"
      rel="noreferrer"
    >
      Code of Conduct
    </a>
    <a href="mailto:hello@codeforgreensboro.org" className="navbar-item">
      Email us
    </a>
  </nav>
)

export default Footer
