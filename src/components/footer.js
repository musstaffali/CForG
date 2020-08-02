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
