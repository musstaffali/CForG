import React from "react"
import { Link } from "gatsby"
import logo from "../images/CfGLogoWhite.png"
import styles from "./nav.module.css"

function Nav(props) {
  function burgerClick(e) {
    console.log("e.target= ", e.target)
    console.log("dataset = ", e.target.dataset)
    const menu = document.getElementById(e.target.dataset.target)
    e.target.classList.toggle("is-active")
    menu.classList.toggle("is-active")
  }

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/">
          <div className="logowrap">
            <img src={logo} alt="Logo" className="logo" />
          </div>
        </Link>
        <a
          id="navBurger"
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navMenu"
          onClick={burgerClick}
        >
          <span aria-hidden="true" className={styles.burgerspan}></span>
          <span aria-hidden="true" className={styles.burgerspan}></span>
          <span aria-hidden="true" className={styles.burgerspan}></span>
        </a>
      </div>

      <div id="navMenu" className="navbar-menu">
        <div className="navbar-end">
          <Link className="navbar-item" to="/">
            HOME
          </Link>

          <Link className="navbar-item" to="/about">
            ABOUT
          </Link>

          <Link className="navbar-item" to="/resources">
            RESOURCES
          </Link>

          <Link className="navbar-item" to="/ourprojects">
            OUR PROJECTS
          </Link>

          <a
            href="https://www.codeforamerica.org/donate-to-a-brigade?utm_campaign=Code%20for%20Greensboro&utm_source=CodeforGreensboroSite"
            className="navbar-item"
            target="_blank"
            rel="noreferrer"
          >
            DONATE
          </a>

          <Link className="navbar-item" to="/join">
            JOIN US
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav
